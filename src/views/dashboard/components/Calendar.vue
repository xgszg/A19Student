<template>
  <div>
    <el-calendar v-model="value" class="cal" />
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      value: new Date()
    }
  }
}
</script>

<style scoped>
.cal /deep/ .el-calendar-table .el-calendar-day{
  height: 40px;
}
</style>
