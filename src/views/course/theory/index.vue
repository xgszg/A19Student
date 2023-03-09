<template>
  <div class="container">
    <el-card class="box-card" :body-style="{padding:'0px'}" shadow="always">
      <div :style="imageClass">
        <div id="name">{{ classInfo.name }}</div>
        <div class="classroom">
          <span v-for="(item, index) in classInfo.classrooms" :key="index">{{ item }} </span>
        </div>
        <div class="people">已加入 86人</div>
        <div class="classcode"><i class="el-icon-copy-document" /> 课程码 {{ classInfo.code }}</div>
        <span><el-button type="primary" style="float: right" icon="el-icon-video-play" round @click="gotoroom()">加入课堂</el-button></span>
      </div>
      <template>
        <el-tabs v-model="tabs" v-loading="loading" class="tabscss" @tab-click="openFullScreen1">
          <el-tab-pane label="目录" name="catalogue">
            <Catalogue />
          </el-tab-pane>
          <el-tab-pane label="互动课件" name="courseware">
            <div style="height:30px">
              <span>共2个文件</span>
            </div>
            <Courseware />
            <Courseware />
          </el-tab-pane>
          <el-tab-pane label="作业" name="task">
            <div style="height:30px">
              <span>共3次作业</span>
            </div>
            <div v-for="(item,index) in homeworkdata" :key="index">
              <Homework :homeworkdata="item" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="测试" name="test">
            <div style="height:30px">
              <span>共4次测试</span>
            </div>
            <div v-for="(item,index) in testdata" :key="index">
              <Test :testdata="item" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="资料" name="data">
            <div style="height:30px">
              <span>共2个资料</span>
            </div>
            <div v-for="(item,index) in datafile" :key="index">
              <Data :datafile="item" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="公告" name="notice">
            <div style="height:30px">
              <span>共3个公告</span>
            </div>
            <div v-for="(item,index) in noticedata" :key="index">
              <Notice :noticedata="item" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="成员" name="people">
            <People />
          </el-tab-pane>
        </el-tabs>
      </template>
    </el-card>
  </div>
</template>

<script>
import Catalogue from './components/catalogue.vue'
import Courseware from './components/courseware.vue'
import Homework from './components/homework.vue'
import Test from './components/test.vue'
import Data from './components/data.vue'
import Notice from './components/notice.vue'
import People from './components/people.vue'
import testInfo from '@/api/test-info'
import classdata from '@/api/class-info'
export default {
  name: 'Class',
  components: { Catalogue, Courseware, Homework, Test, Notice, Data, People },
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
      testdata: testInfo.test,
      noticedata: classdata.notice,
      datafile: classdata.data,
      homeworkdata: classdata.homework,
      loading: false,
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
    openFullScreen1() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    gotoroom() {
      this.$router.push('/course/theory/liveroom')
    }
  }
}
</script>

<style scoped>
.container{
  margin:20px
}
.tabscss{
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.tabscss /deep/ .el-tabs__item{
  font-size: 18px;
}
.el-tabs__nav-scroll{
  font-size: 18px;
}
.box-card{
  width: 80%;
  margin-left: 10%;
}
#name{
  color: #ffffff;
  font-size: 40px;
  margin-top: 10px;
}
.classroom{
  color: #ffffff;
  font-size: 25px;
  margin-top: 10px;
}
.classcode{
  color: #ffffff;
  font-size: 17px;
  margin-top: 10px;
}
.people{
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
}
.manager{
  position: relative;
  top: 10px;
  padding: 20px;
  width: 100%;
}
</style>
