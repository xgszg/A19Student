<template>
  <div class="container">
    <el-card class="box-card" :body-style="{padding:'0px'}" shadow="always">
      <div :style="imageClass">
        <div id="name">{{ classInfo.name }}</div>
        <div class="classroom">
          <span v-for="(item, index) in classInfo.classrooms" :key="index">{{ item }} </span>
        </div>
        <div class="people">已加入 86人</div>
        <div class="classcode"><i class="el-icon-copy-document"></i> 课程码 {{ classInfo.code }}</div>
        <span><el-button type="primary" style="float: right" icon="el-icon-video-play" :disabled='true' round>加入课堂</el-button></span>
      </div>
      <template>
  <el-tabs v-model="tabs" class="tabs">
    <el-tab-pane label="目录" name="catalogue">目录</el-tab-pane>
    <el-tab-pane label="互动课件" name="courseware">互动课件</el-tab-pane>
    <el-tab-pane label="作业" name="task">作业</el-tab-pane>
    <el-tab-pane label="测试" name="test">测试</el-tab-pane>
    <el-tab-pane label="资料" name="data">资料</el-tab-pane>
    <el-tab-pane label="公告" name="notice">公告</el-tab-pane>
  </el-tabs>
      </template>
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
      tabs: 'catalogue',
      imageClass: {
        backgroundImage: 'url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png")',
        height: '240px',
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
  created() {
    this.classInfo = this.$route.params.classInfo // 接收上个页面传过来的参数。
  },
  methods: {
  }
}
</script>

<style scoped>
.tabs{
  margin-left:20px;
  margin-top:10px;
  margin-bottom:20px;
  margin-right:20px;
}
.container{
  margin:20px;
  margin-left: 10%;
}
.image-box{
  background-image: url("http://lsky.jujuh.top/i/2022/04/03/62497a4626769.png");
  height: 200px;
  background-size: cover;
  padding:30px;
  width: 100%;
}

.box-card{
  width: 80%;
}

#name{
  color: #ffffff;
  font-size: 40px;
  margin-top: 10px;
}
.classroom{
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
}
.classcode{
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
}
.people{
  color: #ffffff;
  font-size: 18px;
  margin-top: 10px;
}
.manager{
  position: relative;
  top: 10px;
  padding: 20px;
  width: 100%;
}
</style>
