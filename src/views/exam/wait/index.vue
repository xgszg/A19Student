<template>
  <div class="app-container">
    <el-table
      :data="tableData"
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
          <span style="margin-left: 10px">{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="参考人数"
        width="120"
      >
        <template slot-scope="scope">
          <i class="el-icon-user" />
          <span style="margin-left: 10px">{{ scope.row.many }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="日期"
        width="180"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        width="80"
      >
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >参加考试</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2022-03-06-16:00',
        name: '待参加',
        many: '19',
        address: '2021-2022-2大学英语六级模拟考试（2）'
      }, {
        date: '2022-03-07-10:30',
        name: '待参加',
        many: '21',
        address: '2021-2022-2软件工程期中考试'
      }, {
        date: '2022-03-16-14:00',
        name: '待参加',
        many: '19',
        address: '操作系统第三章检测'
      }, {
        date: '2022-03-021-14:00',
        name: '待参加',
        many: '20',
        address: '操作系统期末考试'
      }]
    }
  },
  methods: {
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
