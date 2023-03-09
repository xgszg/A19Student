<template>
  <div>
    <el-table
      :data="examInfo"
      style="width: 100%"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="考试名称"
        width="360"
      >
        <template slot-scope="scope">
          <i class="el-icon-collection" />
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="参考人数"
        width="120"
      >
        <template slot-scope="scope">
          <i class="el-icon-user" />
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="180"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
      >
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium" :type="tagColor(scope.$index,scope.row)">{{ scope.row.state }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            :disabled="scope.row.state !=='待参加'"
            @click="handleEdit(scope.$index, scope.row)"
          >{{ before(scope.$index,scope.row) }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
import examInfo from '@/api/examination'
export default {
  data() {
    return {
      examInfo: examInfo.all
    }
  },
  computed: {
    // 获取现在时间
    nowTime() {
      const timeData = new Date()
      return moment(timeData).format('YYYY-MM-DD')
    }
  },
  methods: {
    before(index, row) {
      if (row.state === '已结束' || row.state === '待批改') { return '考试已结束' } else if (row.state === '待参加') { return '参加考试' }
    },
    tagColor(index, row) {
      if (row.state === '已结束') {
        return 'success'
      } else if (row.state === '待参加') {
        return 'warning'
      } else if (row.state === '待批改') {
        return ''
      }
    },
    handleEdit(index, row) {
      this.$confirm('即将进入考试, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('app/toggleSideBar')
        this.$message({
          type: 'success',
          message: '正在进入!'
        })
        const timejump = 1
        if (!this.timer) {
          this.count = timejump
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= timejump) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
              // 跳转的页面写在此处
              this.$router.push({ path: '/examination-Notice' })
            }
          }, 1000)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消进入'
        })
      })
    }
  }
}
</script>
