<template>
  <div class="container">
    <el-tabs v-model="currentTab" tab-position="left" type="border-card" class="tab">
      <el-tab-pane name="course" style="overflow-y:auto;overflow-x:hidden;">
        <span slot="label">
          <svg-icon icon-class="write3" /> 课程
        </span>
        <div class="course-container" :style="{height: height+'px'}">
          <!--标题-->
          <Title />
          <!--分割线-->
          <el-divider />
          <!--章节列表-->
          <Chapter />
        </div>
      </el-tab-pane>
      <el-tab-pane name="step">
        <span slot="label">
          <svg-icon icon-class="write2" /> 步骤
        </span>
        <!--控制高度-->
        <div class="markdown-container" :style="{height: height + 30 +'px'}">
          <!--步骤页-->
          <ReadMarkDown />
        </div>
      </el-tab-pane>
      <el-tab-pane name="report">
        <span slot="label">
          <svg-icon icon-class="write1" /> 报告
        </span>
        <!--控制高度-->
        <div :style="{height: height - 30 +'px'}">
          <!--MarkDown编辑器，使用Vditor-->
          <Markdown />
        </div>
        <!--按钮区域-->
        <div class="markdown-button">
          <el-button size="middle" type="primary" plain round @click="handleSave">保存</el-button>
          <el-button id="submit-button" size="middle" type="primary" round @click="handleSubmit">提交</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Title from '@/views/investigation/components/Title.vue'
import Chapter from '@/views/investigation/components/Chapter.vue'
// import Read from '@/views/investigation/components/Read.vue'
import ReadMarkDown from '@/views/investigation/components/ReadMarkDown.vue'
import Markdown from '@/views/investigation/components/Markdown.vue'
import { mapState } from 'vuex'

export default {
  name: 'Write',
  components: {
    Title,
    Chapter,
    ReadMarkDown,
    Markdown
  },
  data() {
    return {
      height: 900
    }
  },
  computed: {
    ...mapState('chapter', ['tab', 'chapter']),
    currentTab: {
      get() {
        return this.$store.state.chapter.tab
      },
      set(newValue) {
        this.$store.commit('chapter/CHANGE_TAB', newValue)
      }
    }
  },
  watch: {
    // currentTab(newValue) {
    //   this.$store.commit('chapter/CHANGE_TAB', newValue)
    // },
    tab(newValue) {
      this.currentTab = newValue
    }
  },
  mounted() {
    const that = this
    window.onload = function() {
      that.heightResize()
    }
    window.addEventListener('resize', () => { this.heightResize() })
  },
  destroyed() {
    window.onresize = null
  },
  methods: {
    heightResize() {
      console.log(document.body.clientHeight)
      this.height = document.body.clientHeight - 80 // 调整窗口高度
    },
    handleSave() {

    },
    handleSubmit() {

    }
  }

}
</script>

<style lang="scss" scoped>
// 标签
.tab{
  position: relative;
  height: 100%;
  width: 100%;
}
// 容器
.container{
  height: 100%;
}
// tabs 容器
.container::v-deep .el-tabs__content{
  padding: 0px;
}
// 课程页
.course-container{
  margin: 15px;
}
.markdown-container{
  overflow-y:auto;
  width: 100%;
  padding: 0px;
  overflow-x: hidden;
}

.markdown-button{
  float: right;
  margin-top: 5px;

  #submit-button{
    margin-right: 10px;
  }
}
</style>
