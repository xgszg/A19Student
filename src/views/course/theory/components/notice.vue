<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-bell" />
      <div style="width:24%">
        <div style="margin-top:5px">
          <span class="testname">公告一</span>
        </div>
        <div style="margin-top:10px">
          <span class="testtime">发布时间：2022/12/31 10:30</span>
        </div>
      </div>
      <div class="bottoncss">
        <el-button style="margin-right: 10px;font-size: 18px;" type="text" size="small">查看</el-button>
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
.el-icon-bell{
    font-size: 20px;
}
.el-divider--horizontal{
    margin-top: 12px;
    margin-bottom: 12px;
}
.el-avatar{
    margin: 10px;
    background:#934fff;
}
.testname{
    white-space:nowrap;
    font-size: 18px;
    margin-left: 2%;
    margin-top:4px
}
.testtime{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
    color: #646464;
}
.teststate{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
}
.name{
    display:flex;
    font-size: 18px;
}
.bottoncss{
    width: 70%;
    margin-top: 10px;
    text-align:right;
}
</style>
