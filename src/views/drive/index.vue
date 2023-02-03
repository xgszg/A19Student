<template>
  <div class="app-container">
    <el-card>
      <el-row type="flex" align="middle">
        <el-col :span="22">
          <span class="space">当前空间2.3G/5G</span>
        </el-col>
        <el-col :span="2">
          <!-- <el-button type="primary" @click="onSubmit" style="margin-bottom: 10px;">上传</el-button> -->
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary" style="margin-bottom: 10px;">上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-col>
      </el-row>
      <el-card class="exam-table" :body-style="{padding:'0px'}" shadow="hover">
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          fit
          stripe
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
              <i class="el-icon-document" />
              <span style="margin-left: 10px">{{ scope.row.filename }}</span>
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
            <template>
              <el-button
                type="primary"
                size="mini"
                @click="loadFile"
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
        filename: '001.word',
        size: '2kb',
        operation: '下载'
      }, {
        filename: '001.word',
        size: '2kb',
        operation: '下载'
      }, {
        filename: '001.word',
        size: '2kb',
        operation: '下载'
      }, {
        filename: '001.word',
        size: '2kb',
        operation: '下载'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    loadFile() {
      console.log('load!')
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
</style>

