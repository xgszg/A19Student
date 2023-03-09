<template>
  <div class="app-container">
    <el-table
      :data="tableData1"
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
            <el-tag size="medium" type="success">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="分数">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.fraction }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData1: [{
        date: '2022-03-06-16:00',
        name: '已结束',
        many: '19',
        address: '2021-2022-2大学英语六级模拟考试（二）',
        fraction: '89'
      }, {
        date: '2022-03-03-08:00',
        name: '已结束',
        many: '19',
        address: '2021-2022-2软件工程期中考试',
        fraction: '95'
      }, {
        date: '2022-03-03-14:00',
        name: '已结束',
        many: '52',
        address: '线性代数考前练习',
        fraction: '86'
      }, {
        date: '2022-03-04-14:00',
        name: '已结束',
        many: '51',
        address: '2021-2022-2数据库原理及应用期中考试',
        fraction: '92'
      }, {
        date: '2021-03-05-08:00',
        name: '待批改',
        many: '51',
        address: '2021-2022-2线性代数期中考试',
        fraction: '--'
      }]
    }
  },
  methods: {
    handleEdit1(index, row) {
      this.$alert('该学科分数为:' + row.fraction, '', {
        confirmButtonText: '确定',
        callback: action => {
        }
      })
    }
  }
}
</script>
