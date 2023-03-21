<template>
  <div v-loading="loading">
    <el-card>
      <el-table
        :data="examInfo"
        style="width: 100%"
        element-loading-text="Loading"
        fit
        highlight-current-row
        border
      >
        <el-table-column
          label="考试名称"
          width="540px"
        >
          <template slot-scope="scope">
            <i class="el-icon-collection" />
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="参考人数"
          width="150px"
        >
          <template slot-scope="scope">
            <i class="el-icon-user" />
            <span style="margin-left: 10px">{{ scope.row.number }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="日期"
          width="250"
        >
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span style="margin-left: 10px">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="状态"
          width="150"
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
              v-if="scope.row.state =='待参加'"
              size="mini"
              type="primary"
              :disabled="scope.row.state !=='待参加'"
              @click="handleEdit(0,scope.row.state,scope.row.fraction)"
            >参加考试</el-button>
            <el-button
              v-if="scope.row.state !=='待参加'"
              size="mini"
              type="primary"
              :disabled="scope.row.state =='待参加'"
              @click="handleEdit(1,scope.row.state,scope.row.fraction)"
            >查看成绩</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'
import examInfo from '@/api/examination'
export default {
  data() {
    return {
      loading: false,
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
    // before(index, row) {
    //   if (row.state === '已结束' || row.state === '待批改') { return '查看成绩' } else if (row.state === '待参加') { return '参加考试' }
    // },
    tagColor(index, row) {
      if (row.state === '已结束') {
        return 'success'
      } else if (row.state === '待参加') {
        return 'warning'
      } else if (row.state === '待批改') {
        return ''
      }
    },
    handleEdit(temp, stace, fraction) {
      if (temp === 0) {
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
                // this.$router.push({ path: '/examination-Notice' })
                this.$router.push({ path: '/examination' })
              }
            }, 500)
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消进入'
          })
        })
      } else {
        this.loading = true
        if (stace === '已结束') {
          setTimeout(() => {
            this.loading = false
            this.$alert('你的成绩是' + fraction + '分', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            })
          }, 500)
        } else {
          setTimeout(() => {
            this.loading = false
            this.$alert('考试还未结束，无法查看成绩', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            })
          }, 500)
        }
      }
    }
  }
}
</script>
