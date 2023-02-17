<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-document" />
      <div style="width:24%">
        <span class="testname">测试一</span><br>
        <span class="testtime">截至时间：2022/12/31 10:30 | 已结束 | 考试</span><br>
        <span class="teststate">限时：120分钟</span>
      </div>
      <div class="bottoncss">
        <el-button :loading="buttonloading" style="margin-right: 10px;" size="medium" @click="Viewgrades">查看成绩</el-button>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonloading: false
    }
  },
  methods: {
    Viewgrades() {
      this.buttonloading = true
      setTimeout(() => {
        this.$alert('你的成绩是100分', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.buttonloading = false
          }
        })
      }, 1000)
    }
  }
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
    background:#f8916b;
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
    margin-top: 15px;
    text-align:right;
}
</style>
