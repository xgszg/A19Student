<template>
  <div class="tabs-container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="代码" name="code">
        <CodeSpace />
      </el-tab-pane>
      <el-tab-pane label="提交记录" name="submit">
        提交记录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CodeSpace from '@/views/investigation/code/components/CodeSpace.vue'

export default {
  name: 'CodeRightContainer',
  components: {
    CodeSpace
  },
  data() {
    return {
      activeName: 'code'
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-container::v-deep .el-tabs__header.is-top{
    margin-bottom: 0px;

}
</style>
