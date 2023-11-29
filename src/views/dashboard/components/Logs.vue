<template>
  <div>
    <el-table :data="logs">
      <el-table-column label="通知名称">
        <template slot-scope="scope">
          <span v-if="scope.row.top">
            <svg-icon icon-class="ontop" style="fill: #409EFF;font-size: 18px" />
          </span>
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" width="50">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="openDetail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog class="eldalog" :title="detail.title" :visible.sync="showDetail">
      <div class="detail-content">
        {{ detail.content }}
      </div>
      <div class="detail-origin">
        <span> 来源： {{ detail.origin }} </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import Dashboard from '@/api/dashboard'

import { getLogsAPI } from '@/api/dashboard'
export default {
  name: 'Logs',
  data() {
    return {
      detail: {
        title: '详情',
        content: '内容详情',
        origin: ''
      },
      showDetail: false,
      logs: null
    }
  },
  created: function() {
    this.getLogs()
  },
  methods: {
    openDetail(k) {
      this.detail.title = '[' + k.time + ']  ' + k.name
      this.detail.content = k.detail
      this.detail.origin = k.origin
      this.showDetail = true
    },
    async getLogs() {
      const a = await getLogsAPI()
      this.logs = a
    }
  }
}
</script>

<style scoped>
.eldalog /deep/ .el-dialog {
  border-radius: 10px
}

.detail-content {
  font-size: 15px;
  line-height: 30px;
}

.detail-origin {
  margin-top: 20px;
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
}
</style>
