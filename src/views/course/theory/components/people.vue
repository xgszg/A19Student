<template>
  <el-table
    class="customer-no-border-table"
    :data="classdetail"
    width="100%"
    :default-sort="{prop: 'date', order: 'ascending'}"
  > <el-table-column
      porp="img"
      label="头像"
      width="100"
    >
      <template slot-scope="scope">
        <el-avatar :src="scope.row.img" />
      </template>
    </el-table-column>
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
<style>/*去掉表格单元格边框*/
.customer-no-border-table th{
  border:none;
}
.customer-no-border-table td,.customer-no-border-table th.is-leaf {
  border:none;
}
/*表格最外边框*/
.customer-no-border-table .el-table--border, .el-table--group{
  border: none;
}
/*头部边框*/
.customer-no-border-table thead tr th.is-leaf{
  border: 0px solid #EBEEF5;
  border-right: none;
}
.customer-no-border-table thead tr th:nth-last-of-type(2){
  border-right: 0px solid #EBEEF5;
}
/*表格最外层边框-底部边框*/
.customer-no-border-table .el-table--border::after,.customer-no-border-table .el-table--group::after{
  width: 0;
}
.customer-no-border-table::before{
  width: 0;
}
.customer-no-border-table .el-table__fixed-right::before,.el-table__fixed::before{
  width: 0;
}
.customer-no-border-table .el-table__header tr th{
  background: #fff;
  color: #333333 ;
  padding: 3px ;
  font-style: 550 ;
  height: 36px ;
  border: 0px;
  font-size: 15px;
}
/*去掉鼠标悬停背景颜色*/
.el-table tbody tr:hover>td {
  background-color:#ffffff!important
}
</style>
<style scoped>

.el-row {
    margin-bottom: 20px;
  }
</style>
