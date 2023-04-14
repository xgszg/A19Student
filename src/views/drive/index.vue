<template>
  <div class="app-container">
    <el-card>
      <el-row type="flex" align="middle">
        <el-col :span="3">
          <span class="space">当前空间2.3G/5G</span>
        </el-col>
        <el-col :span="6">
          <el-progress :percentage="2.3/5*100" :format="format" />
        </el-col>
        <el-col :span="12" />
        <el-col :span="4">
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin: 0 20px 10px 10px; position: relative;" size="small" type="success" @click="submitUpload">上传文件</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-col>
      </el-row>
      <el-card class="exam-table" :body-style="{padding:'0px'}" shadow="hover">
        <el-table
          :data="tableData"
          style="width: 100%"
          fit
          stripe
          tooltip-effect="dark"
        >
          <el-table-column
            type="selection"
            min-width="10%"
          />
          <el-table-column
            prop="filename"
            label="文件名"
            min-width="70%"
          >
            <template slot-scope="scope">
              <div style="display: flex; align-items: center;">
                <!-- <el-avatar class="el-icon-document" style="color: #ffffff;" /> -->
                <el-avatar :src="driveicon(scope.row)" />
                <span style="margin-left: 10px;">
                  {{ scope.row.filename }}
                </span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="size"
            label="大小"
            min-width="10%"
          />
          <el-table-column
            prop="operation"
            label="操作"
            min-width="10%"
          >
            <template slot-scope="scope">

              <el-button
                type="primary"
                size="mini"
                @click="loadFile(scope.row.filetype)"
              >下载</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Drive',
  data() {
    return {
      tableData: [{
        filename: 'word.doc',
        filetype: 'word',
        size: '2kb',
        operation: '下载'
      }, {
        filename: 'kejian.ppt',
        filetype: 'ppt',
        size: '2kb',
        operation: '下载'
      }, {
        filename: 'excel.xls',
        filetype: 'excel',
        size: '2kb',
        operation: '下载'
      }, {
        filename: 'picture.jpg',
        filetype: 'jpg',
        size: '2kb',
        operation: '下载'
      }],
      fileList: []
    }
  },
  methods: {
    driveicon(row) {
      if (row.filetype === 'ppt') { return 'http://localhost:9528/static/ppt/icon-PowerPoint.png' } else if (row.filetype === 'word') { return 'http://localhost:9528/static/word/icon-word.png' } else if (row.filetype === 'excel') { return 'http://localhost:9528/static/excel/icon-Excel.png' } else { return 'https://img.alicdn.com/imgextra/i1/O1CN01mhaPJ21R0UC8s9oik_!!6000000002049-2-tps-80-80.png' }
    },
    submitUpload() {
      console.log(this.fileList)
      this.$refs.upload.submit()
      // renderfileList(this.fileList)
    },
    loadFile(filetype) {
      this.$message({
        message: '保存云盘成功',
        type: 'success'
      })
      // console.log(String(filetype))
      if (filetype === 'word') {
        window.location.href = 'http://localhost:9528/static/word/word.doc'
      } else if (filetype === 'ppt') {
        window.location.href = 'http://localhost:9528/static/ppt/kejian.ppt'
      } else if (filetype === 'excel') {
        window.location.href = 'http://localhost:9528/static/excel/excel.xls'
      } else if (filetype === 'jpg') {
        window.location.href = 'http://localhost:9528/static/jpg/picture.jpg'
      } else {
        this.$message({
          message: '下载失败，文件可能不存在',
          type: 'error'
        })
      }
    },

    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
    // renderfileList(fileList) {
    //   let Obj = {};
    //   for (let file in fileList)
    //     Obj.push(file.name, '15kb', '下载')
    //   this.tableData.push(Obj)
    // }
  }
}
</script>

<style scoped>
.exam-table{
  margin: 0px 30px;
  border: 0px;
}

.el-table {
  font-size: 15px;
}

.el-row {
  height: 100%;
}

.space {
  margin-left: 50px;
  font-size: 18px;
}

.el-button {
  font-size: 14px;
}

.el-avatar{
    margin: 2px;
    /* background: #558FF2; */
}

.el-icon-document{
    font-size: 20px;
}
</style>

