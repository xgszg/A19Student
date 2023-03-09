<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :xs="22" :sm="22" :md="22" :lg="8" :xl="8" class="content">
        <UserCard />
      </el-col>
      <el-col :xs="22" :sm="22" :md="22" :lg="16" :xl="16" class="content">
        <el-card>
          <!--标签页-->
          <el-tabs v-model="activeName">
            <el-tab-pane label="用户信息" name="info" class="tab-pane">
              <!--个人信息-->
              <UserDescriptions v-if="edit" />
              <!--修改个人资料-->
              <user-info v-if="!edit" />

              <el-row class="user-info-button">
                <el-button v-if="edit" type="primary" @click="changeEdit">修改信息</el-button>
                <el-button v-if="!edit" type="primary" :loading="saveLoading" @click="changeEdit">保存信息</el-button>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="修改头像" name="upload" class="tab-pane">
              <div class="tab-container">
                <!--图片上传-->
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                >
                  <i class="el-icon-upload" />
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </div>
            </el-tab-pane>
            <el-tab-pane label="社交账号" name="social" class="tab-pane">
              <Social />
            </el-tab-pane>
            <el-tab-pane label="密码管理" name="password" class="tab-pane">
              <Password />
            </el-tab-pane>

          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import UserCard from './componments/UserCard'
import UserInfo from './componments/UserInfo'
import UserDescriptions from './componments/UserDescriptions'
import Social from './componments/Social'
import Password from './componments/Password'

export default {
  name: 'PersonIndex',
  components: {
    UserCard,
    UserInfo,
    UserDescriptions,
    Social,
    Password
  },
  data() {
    return {
      edit: true,
      activeName: 'info',
      saveLoading: false
    }
  },
  methods: {
    changeEdit() {
      if (this.edit === false) {
        this.saveLoading = true
        setTimeout(() => {
          this.saveLoading = false
          this.edit = !this.edit
          this.$notify({
            title: '成功',
            message: '个人信息修改成功',
            type: 'success'
          })
        }, 3000)
      } else {
        this.edit = !this.edit
      }
    }
  }
}
</script>

<style scoped>
.container{
margin:20px
}

.user-info-button{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
}
.tab-container{
  display: flex;
  justify-content: center;
}

.tab-pane{
  min-height: 400px;
}

.upload-demo{
  margin-top: 50px;
}
</style>
