<template>
  <div>
    <el-table
      :data="logs"
    >
      <el-table-column
        label="通知名称"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.top">
            <svg-icon icon-class="ontop" style="fill: #409EFF;font-size: 18px" />
          </span>
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="50">
        <el-button type="text" size="small">详情</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Dashboard from '@/api/dashboard'
export default {
  name: 'Logs',
  data() {
    return {
      logs: Dashboard.logs
    }
  }
}
</script>

<style scoped>

</style>
