<template>
  <div>
    <div class="name">
      <el-avatar class="el-icon-edit" />
      <div style="width:24%">
        <span class="homename">{{ homeworkdata.name }}</span><br>
        <span class="hometime">提交截至时间：{{ homeworkdata.time }} | {{ homeworkdata.status }} | {{ homeworkdata.attribute }}</span><br>
        <span class="homestate" :style="state(homeworkdata.state)">{{ homeworkdata.state }}</span>
      </div>
      <div class="bottoncss">
        <el-button style="margin-right: 10px;" type="primary" size="medium" :disabled="homeworkdata.status==='已结束'" @click="dialogVisible = true">提交</el-button>
      </div>
    </div>
    <el-dialog
      :title="homeworkdata.name"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-tabs v-model="homeworktabs" v-loading="homeworkloading" @tab-click="openFullScreen1">
        <el-tab-pane label="详情" name="information">
          <div style="font-size: 16px;font-weight:bold;margin-bottom: 5px;">
            <span>{{ homeworkdata.name }}</span>
          </div>
          <div style="margin-bottom: 5px;">
            <span><el-tag size="mini">{{ homeworkdata.attribute }}</el-tag><el-tag style="margin-left: 5px;" size="mini">{{ homeworkdata.state }}</el-tag><el-tag style="margin-left: 5px;" size="mini">提交截至时间{{ homeworkdata.time }}</el-tag><el-tag style="margin-left: 5px;" type="info" size="mini">100分</el-tag><el-tag style="margin-left: 5px;" type="info" size="mini">查重</el-tag></span>
          </div>
          <div style="margin-bottom: 5px;font-size: 15px;">
            <span>{{ homeworkdata.information }}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="提交" name="submit">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :before-remove="beforeRemove"
            :on-success="submithomeworksuccess"
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5mb</div>
          </el-upload>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          :loading="buttonloading"
          @click="submithomework(homeworksubmit)"
        >确 定</el-button>
      </span>
    </el-dialog>
    <el-divider />
  </div>
</template>

<script>
export default {
  name: 'Homework',
  props: {
    homeworkdata: {
      type: Object,
      default: function() {
        return {
          name: '作业一',
          time: '2022/12/31 10:30',
          status: '已结束',
          attribute: '个人作业',
          state: '已提交',
          information: '这是作业一的作业详情'
        }
      }
    }
  },
  data: function() {
    return {
      homeworkloading: false,
      homeworktabs: 'information',
      dialogVisible: false,
      buttonloading: false
    }
  },
  methods: {
    submithomeworksuccess() {
      this.homeworksubmit = true
    },
    openFullScreen1() {
      this.homeworkloading = true
      setTimeout(() => {
        this.homeworkloading = false
      }, 1000)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    state(k) {
      if (k === '已提交') return 'color: #67c23a'
      else return 'color: #fc0800'
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    submithomework(k) {
      if (k) {
        this.buttonloading = true
        setTimeout(() => {
          this.buttonloading = false
          this.dialogVisible = false
          this.homeworkdata.state = '已提交'
          this.$notify({
            title: '提示',
            message: '提交成功！',
            type: 'success'
          })
        }, 1000)
      } else {
        this.$confirm('还未提交作业, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.buttonloading = false
          this.dialogVisible = false
        })
      }
    }
  }
}
</script>

<style scoped>
::v-deep  .el-dialog--center .el-dialog__body{
  padding: 25px 25px 5px;
}
::v-deep  .el-upload-dragger{
  width:460px !important;
}
.upload-demo{
  text-align: center;
}
.el-upload__tip{
  text-align: center;
  font-size: 15px;
}
.el-icon-edit{
    font-size: 20px;
}
.el-divider--horizontal{
    margin-top: 12px;
    margin-bottom: 12px;
}
.el-avatar{
    margin: 10px;
    background: #3fe0e6;
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
    /*
    color: #67c23a;
    */
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
