<template>
  <div>
    <div class="name">
      <el-avatar src="https://assets.ketangpai.com/openapiv5/Public/Common/img/fileicon/file_ext_big_pdf.png" shape="square" :size="40" />
      <div style="width:24%">
        <span class="dataname">{{ datafile.name }}</span><br>
        <span class="datatime">过期时间：{{ datafile.time }}</span><br>
        <span class="datastate">{{ datafile.state }}</span>
      </div>
      <div class="bottoncss">
        <el-button :loading="studyloading" style="margin-right: 10px;" size="medium" type="primary" @click="study(datafile)">下载资料</el-button>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'Data',
  props: {
    datafile: {
      type: Object,
      default: function() {
        return {
          name: '资料一',
          time: '2023/12/31 10:30',
          state: '未学习'
        }
      }
    }
  },
  data: function() {
    return {
      studyloading: false
    }
  },
  methods: {
    study(datafile) {
      this.studyloading = true
      setTimeout(() => {
        this.studyloading = false
        this.$confirm('是否下载' + datafile.name, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          datafile.state = '已学习'
          window.location.href = 'http://localhost:9528/static/pdf/data1.pdf'
        }).catch(() => {
        })
      }, 500)
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
