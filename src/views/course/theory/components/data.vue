<template>
  <div>
    <div class="name">
      <el-avatar src="https://assets.ketangpai.com/openapiv5/Public/Common/img/fileicon/file_ext_big_pdf.png" shape="square" :size="40" />
      <div style="width:24%">
        <span class="dataname">资料一</span><br>
        <span class="datatime">过期时间：2022/12/31 10:30</span><br>
        <span class="datastate">已学习</span>
      </div>
      <div class="bottoncss">
        <el-button style="margin-right: 10px;" size="medium" type="primary">开始学习</el-button>
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
.el-icon-document{
    font-size: 20px;
}
.el-divider--horizontal{
    margin-top: 12px;
    margin-bottom: 12px;
}
.el-avatar{
    margin: 10px;
    background: #ffffff00;
}
.dataname{
    white-space:nowrap;
    font-size: 18px;
    margin-left: 2%;
    margin-top:4px
}
.datatime{
    white-space:nowrap;
    font-size: 14px;
    margin-left: 2%;
    color: #646464;
}
.datastate{
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
    margin-top: 15px;
    text-align:right;
}
</style>
