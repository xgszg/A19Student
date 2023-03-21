<template>
  <div style="margin-top:50px" onload="">
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card
          v-loading="loading"
          element-loading-text="拼命加载中"
        >
          <el-row type="flex" justify="center">
            <el-col :span="10">
              <el-steps :active="active" finish-status="success" align-center>
                <el-step title="考生须知" />
                <el-step title="设备检测" />
                <el-step title="人脸识别" />
              </el-steps>
            </el-col>
          </el-row>

          <el-row v-show="active===0" type="flex" justify="center">
            <el-col :span="12">
              <Notice />  <!-- 考生须知 -->
            </el-col>
          </el-row>

          <el-row v-show="active===1" type="flex" justify="center">
            <el-col :span="16">
              <Equipment />  <!-- 设备检测 -->
            </el-col>
          </el-row>

          <el-row v-show="active===2" type="flex" justify="center">
            <Face />  <!-- 人脸识别 -->
          </el-row>

          <el-row :gutter="10">
            <el-col :offset="14">
              <el-button v-if="active!==0" type="primary" plain @click="previous">上一步</el-button>
              <el-button v-if="active==0" type="primary" plain @click="backer">不同意，退出</el-button>
              <el-button v-if="active===0" type="primary" @click="next">我已阅读并同意</el-button>
              <el-button v-if="active===1" type="primary" @click="next">确认无误</el-button>
              <el-button v-if="active===2" type="primary" :loading="faceloading" @click="getCompetence">开始人脸识别</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Equipment from './components/equipment.vue'
import Face from './components/Face.vue'
import Notice from './components/Notice'
export default {
  name: 'Index',
  components: {
    Notice, Equipment, Face
  },
  data() {
    return {
      faceloading: false,
      active: 0,
      loading: true
    }
  },
  mounted: function() {
    this.loadinghs()// 需要触发的函数
  },
  methods: {
    backer() {
      this.$router.go(-1)
    },
    loadinghs() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 600)
    },
    next() {
      this.loadinghs()
      if (this.active < 3) { this.active += 1 }
    },
    previous() {
      if (this.active > 0) { this.active -= 1 }
    },
    getCompetence() {
      this.faceloading = true
      this.imgSrc = ''
      var _this = this
      _this.thisCancas = document.getElementById('canvasCamera')
      _this.thisContext = this.thisCancas.getContext('2d')
      _this.thisVideo = document.getElementById('videoCamera')
      _this.thisVideo.style.display = 'block'
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) { // 不存在则报错
            return Promise.reject(
              new Error('getUserMedia is not implemented in this browser')
            )
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: 'scaleX(-1)'
        }
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in _this.thisVideo) {
            _this.thisVideo.srcObject = stream
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream)
          }
          _this.thisVideo.onloadedmetadata = function(e) {
            _this.thisVideo.play()
          }
        })
        .catch(err => {
          console.log(err)
        })
      setTimeout(() => {
        this.joyexam()
      }, 2000)
    },
    joyexam() {
      this.$confirm('识别成功, 是否进入考试?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.faceloading = false
        this.thisVideo.srcObject.getTracks()[0].stop()
        this.$router.push({ path: '/examination' })
      }).catch(() => {
        this.faceloading = false
        this.thisVideo.srcObject.getTracks()[0].stop()
        this.$message({
          type: 'info',
          message: '已取消进入'
        })
      })
    }
  }
}
</script>
