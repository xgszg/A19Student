<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-collection" />
      <div style="width: 24%;margin-top: 8px">
        <span class="coursewarename">互动课件</span>
      </div>
      <div class="bottoncss">
        <el-button style="margin-right: 10px;" type="primary" size="medium" plain @click="Saveclouddisk">保存云盘</el-button>
        <el-button style="margin-right: 10px;" type="primary" size="medium">下载</el-button>
      </div>
    </div>
    <span class="coursewaretips">互动课件</span>
    <el-divider />
  </div>
</template>

<script>
export default {
  methods: {
    Saveclouddisk() {
      this.$message({
        message: '保存云盘成功',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.coursewaretips{
    margin-top: 10px;
    margin-left: 3px;
    font-size: 14px;
}
.el-icon-collection{
    font-size: 20px;
}
.el-divider--horizontal{
    margin-top: 6px;
    margin-bottom: 6px;
}
.el-avatar{
    margin: 10px;
    background: #7be447;
}
.coursewarename{
    white-space:nowrap;
    font-size: 18px;
    margin-left: 5%;
}
.name{
    display:flex;
}
.bottoncss{
    width: 70%;
    margin-top: 15px;
    text-align: right;
}
</style>
