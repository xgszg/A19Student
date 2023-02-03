<template>
  <el-tabs tab-position="left" type="border-card" class="tab">
    <el-tab-pane>
      <span slot="label">
        <svg-icon icon-class="write3" /> 课程
      </span>
      课程
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <svg-icon icon-class="write2" /> 步骤
      </span>
      步骤
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <svg-icon icon-class="write1" /> 报告
      </span>
      实验报告
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Write',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.tab{
  position: relative;
  height: 100%;
}
</style>
