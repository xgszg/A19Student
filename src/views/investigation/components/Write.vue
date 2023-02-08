<template>
  <div class="container">
    <el-tabs tab-position="left" type="border-card" class="tab">
      <el-tab-pane style="overflow-y:auto;overflow-x:hidden;">
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
      <el-tab-pane>
        <span slot="label">
          <svg-icon icon-class="write2" /> 步骤
        </span>
        <div class="markdown-container" :style="{height: height+30+'px'}">
          <ReadMarkDown />
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <svg-icon icon-class="write1" /> 报告
        </span>
        实验报告
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Title from '@/views/investigation/components/Title.vue'
import Chapter from '@/views/investigation/components/Chapter.vue'
import Read from '@/views/investigation/components/Read.vue'
import ReadMarkDown from '@/views/investigation/components/ReadMarkDown.vue'

export default {
  name: 'Write',
  components: {
    Title,
    Chapter,
    ReadMarkDown
  },
  data() {
    return {
      height: 900
    }
  },
  mounted() {
    const that = this
    window.onresize = function() {
      that.heightResize()
    }
  },
  methods: {
    heightResize() {
      console.log(document.body.clientHeight - 50)
      this.height = document.body.clientHeight - 80
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
</style>
