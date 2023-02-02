<template>
  <div class="card-container">
    <el-card>
      <el-row id="title">
        实验课程
      </el-row>
      <el-row>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="正在进行" name="first">
            <Course />
            <Course />
          </el-tab-pane>
          <el-tab-pane label="收藏" name="second">收藏</el-tab-pane>
          <el-tab-pane label="已结束" name="third">已结束</el-tab-pane>
        </el-tabs>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Course from './components/Course.vue'
export default {
  name: 'Investigation',
  components: {
    Course
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="scss" scoped>
.card-container{
  margin: 10px;
  #title{
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: bold;
  }
}
</style>
