<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-edit" />
      <div style="width:24%">
        <span class="homename">作业一</span><br>
        <span class="hometime">提交截至时间：22/12/31 00:00 | 已结束 | 个人作业</span><br>
        <span class="homestate">已提交</span>
      </div>
      <div class="bottoncss">
        <el-button style="margin-right: 10px;" type="primary" size="small">提交</el-button>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-icon-edit{
    font-size: 20px;
}
.el-divider--horizontal{
    margin-top: 12px;
    margin-bottom: 12px;
}
.el-avatar{
    margin: 10px;
    background: #67c23a;
}
.homename{
    white-space:nowrap;
    font-size: 18px;
    margin-left: 2%;
    margin-top:4px
}
.hometime{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
    color: #646464;
}
.homestate{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
    color: #67c23a;
    font-weight: bold;
}
.name{
    display:flex;
    font-size: 18px;
}
.bottoncss{
    width: 70%;
    margin-top: 15px;
    text-align:right;
}
</style>
