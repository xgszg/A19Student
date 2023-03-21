<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-bell" />
      <div style="width:24%">
        <div style="margin-top:5px">
          <span class="testname">{{ noticedata.title }}</span>
        </div>
        <div style="margin-top:10px">
          <span class="testtime">发布时间：{{ noticedata.time }}</span>
        </div>
      </div>
      <div class="bottoncss">
        <el-button :loading="noticeloading" style="margin-right: 10px;font-size: 18px;" type="text" size="small" @click="Look(noticedata)">查看</el-button>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    noticedata: {
      type: Object,
      default: function() {
        return {
          title: '公告一',
          time: '2022/12/31 10:30',
          content: '这是公告一的内容'
        }
      }
    }
  },
  data: function() {
    return {
      noticeloading: false
    }
  },
  methods: {
    Look(noticedata) {
      this.noticeloading = true
      setTimeout(() => {
        this.$alert(noticedata.content, noticedata.title, {
          confirmButtonText: '确定',
          callback: action => {
            this.noticeloading = false
          }
        })
      }, 500)
    }
  }
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
