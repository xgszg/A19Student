<template>
  <el-table
    :data="classdetail"
    width="100%"
    border
    :default-sort="{prop: 'date', order: 'descending'}"
  >
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180"
    />
    <el-table-column
      prop="number"
      label="学号"
      sortable
      width="200"
    />
    <el-table-column
      prop="sex"
      label="性别"
      width="180"
    />
    <el-table-column
      prop="identity"
      label="身份"
      width="180"
    />
    <el-table-column
      prop="date"
      label="加入时间"
      sortable
      width="300"
    />
    <el-table-column
      prop="class"
      label="所属班级"
      width="180"
    />
  </el-table>
</template>
<script>
import classdetail from '@/api/classdetail'
export default {
  data() {
    return {
      classdetail: classdetail.Students
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
.el-row {
    margin-bottom: 20px;
  }
</style>
