<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-document" />
      <div style="width:24%">
        <span class="testname">{{ testdata.name }}</span><br>
        <span class="testtime">截至时间：{{ testdata.Deadline }} | {{ testdata.state }} | {{ testdata.type }}</span><br>
        <span class="teststate">限时：{{ testdata.time }}分钟</span>
      </div>
      <div v-show="testdata.state==='已结束'" class="bottoncss">
        <!-- <el-button :loading="buttonloading" style="margin-right: 10px;" size="medium" :disabled="testdata.state==='待开始'" @click="Viewgrades(testdata)">查看成绩</el-button> -->
        <span>{{ testdata.fraction }}分</span>
      </div>
      <div v-show="testdata.state==='正在进行'" class="bottoncss">
        <!-- <el-button :loading="buttonloading" style="margin-right: 10px;" size="medium" :disabled="testdata.state==='待开始'" @click="Viewgrades(testdata)">查看成绩</el-button> -->
        <span>等待考试结束后显示分数</span>
      </div>
      <div v-show="testdata.state==='待开始'" class="bottoncss">
        <!-- <el-button :loading="buttonloading" style="margin-right: 10px;" size="medium" :disabled="testdata.state==='待开始'" @click="Viewgrades(testdata)">查看成绩</el-button> -->
        <el-button type="primary" @click="gotest()">去考试</el-button>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    testdata: {
      type: Object,
      default: function() {
        return {
          name: '测试一',
          Deadline: '2022/12/31 10:30',
          state: '已结束',
          type: '考试',
          time: '120', // 考试时间
          fraction: '100' // 考试分数
        }
      }
    }
  },
  data() {
    return {
      buttonstatic: false,
      buttonloading: false,
      fractionlook: false
    }
  },
  created() { // 自动加载indexs方法
    this.fractionlookh()
  },
  methods: {
    fractionlookh() {
      if (this.testdata.state === '已结束') this.fractionlook = true
      else this.fractionlook = false
    },
    gotest() {
      this.$confirm('即将进入考试, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('app/toggleSideBar')
        this.$message({
          type: 'success',
          message: '正在进入!'
        })
        const timejump = 1
        if (!this.timer) {
          this.count = timejump
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= timejump) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
              // 跳转的页面写在此处
              // this.$router.push({ path: '/examination-Notice' })
              this.$router.push({ path: '/examination' })
            }
          }, 500)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消进入'
        })
      })
    }
    // Viewgrades(testdata) {
    //   this.buttonloading = true
    //   if (testdata.state === '已结束') {
    //     setTimeout(() => {
    //       this.$alert('你的成绩是100分', '提示', {
    //         confirmButtonText: '确定',
    //         callback: action => {
    //           this.buttonloading = false
    //         }
    //       })
    //     }, 1000)
    //   } else {
    //     setTimeout(() => {
    //       this.$alert('考试还未结束，无法查看成绩', '提示', {
    //         confirmButtonText: '确定',
    //         callback: action => {
    //           // testdata.state='已结束'预留的状态转化
    //           this.buttonloading = false
    //         }
    //       })
    //     }, 1000)
    //   }
    // }
  }
}
</script>

<style scoped>
.el-icon-document{
    font-size: 20px;
}
.el-divider--horizontal{
    margin-top: 12px;
    margin-bottom: 12px;
}
.el-avatar{
    margin: 10px;
    background:#f8916b;
}
.testname{
    white-space:nowrap;
    font-size: 18px;
    margin-left: 2%;
    margin-top:4px
}
.testtime{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
    color: #646464;
}
.teststate{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
}
.name{
    display:flex;
    font-size: 18px;
}
.bottoncss{
    width: 70%;
    margin-top: 15px;
    text-align:right;
}
</style>
