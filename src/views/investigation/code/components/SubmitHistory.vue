<template>
  <el-table
    :data="tableData"
    style="width: 100%;"
  >
    <el-table-column
      prop="date"
      label="提交时间"
      width="180"
    />
    <el-table-column
      label="提交状态"
      width="180"
    >
      <template v-slot:default="scope">
        <span v-if="scope.row.status===0" class="fail-text status">Fail</span>
        <span v-if="scope.row.status===2" class="fail-text status">TimeOut</span>
        <span v-if="scope.row.status===1" class="success-text status">Success</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="time"
      label="运行时间"
    />
    <el-table-column
      prop="language"
      label="语言类型"
      width="100"
    />
  </el-table>
</template>

<script>
import codeHistory from '@/api/code-history'
export default {
  name: 'SubmitHistroy',
  data() {
    return {
      tableData: codeHistory.history
    }
  }
}
</script>

<style lang="scss" scoped>
@import "element-ui/packages/theme-chalk/src/common/var.scss";

.status{
  font-size: 15px;
  font-weight: bold;
}
.success-text{
  color: $--color-success;
}

.fail-text{
  color: $--color-danger;
}
</style>
