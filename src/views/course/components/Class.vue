<template>
  <div>
    <el-card class="box-card" :body-style="{padding:'0px'}" shadow="hover">
      <span><el-tag id="classification" :type="classificationtype(classInfo.classification)" style="float: right;">{{ classInfo.classification }}</el-tag></span>
      <div :style="imageClass" @click="Classcontent(classInfo)">
        <div id="term">{{ classInfo.date }}</div>
        <div id="name">{{ classInfo.name }}</div>
        <div class="classroom">
          <span v-for="(item, index) in classInfo.classrooms" :key="index">{{ item }} </span>
        </div>
        <div class="classroom">课程码: {{ classInfo.code }}</div>
      </div>
      <div class="manager">
        <span style="float: left">教师: {{ classInfo.teacher }}</span>
        <span><el-button type="text" style="float: right;padding: 0px" @click="outclass">退出</el-button></span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Class',
  props: {
    classInfo: {
      type: Object,
      default: function() {
        return {
          date: '学期名称',
          name: '课程名称',
          classrooms: ['班级1', '班级2'],
          code: '课程码',
          teacher: '教师名称',
          classification: '课程分类',
          url: 'url("https://lsky-picture.stdcdn.com/uploads/2022/04/eb5c30a0ce1ac0429ceb43dd6103814a.png")'
        }
      }
    }
  },
  data() {
    return {
      imageClass: {
        backgroundImage: 'url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png")',
        height: '160px',
        backgroundSize: 'cover',
        padding: '30px',
        width: ' 100%'
      }
    }
  },
  watch: {
    classInfo: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.imageClass.backgroundImage = newValue.url
      }
    }
  },
  methods: {
    outclass() {
      this.$confirm('是否退出班级?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        this.$emit('deleteid', this.classInfo.id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    Classcontent(classInfo) {
      if (classInfo.classification === '实训') {
        this.$router.push({
          path: '/course/experiment',
          name: 'experiment',
          params: {
            classInfo: classInfo }
        })
      } else {
        this.$router.push({
          path: '/course/theory',
          name: 'theory',
          params: {
            classInfo: classInfo }
        })
      }
    },
    classificationtype(k) {
      if (k === '实训') {
        return 'warning'
      } else {
        return 'success'
      }
    }
  }
}
</script>

<style scoped>
.image-box{
  background-image: url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png");
  height: 160px;
  background-size: cover;
  padding:30px;
  width: 100%;
}

.box-card{
  width: 100%;
  height: 240px;
}

#name{
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
}
.classroom{
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
}
#term{
  color: #e0eef7;
  font-size: 15px;
}
.manager{
  position: relative;
  top: 23px;
  padding: 20px;
  width: 100%;
}
#classification{
  font-size: 16px;
}
</style>
