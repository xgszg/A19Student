<template>
  <div class="container">
    <el-form label-width="120px">
      <el-form-item label="旧密码">
        <el-input v-model="oldPassword" placeholder="请输入密码" show-password style="width: 300px;" />
        <span>请输入</span>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="newPassword" placeholder="请输入密码" show-password style="width: 300px;" />
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="confirmPassword" placeholder="请输入密码" show-password style="width: 300px;" />
      </el-form-item>
      <el-form-item>
        <el-button :loading="showLoading" @click="confirm">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Password',
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      showLoading: false
    }
  },
  methods: {
    confirm() {
      this.showLoading = true
      setTimeout(() => {
        if (this.newPassword === this.confirmPassword) {
          this.$notify({
            title: '成功',
            message: '密码修改成功',
            type: 'success'
          })
          this.showLoading = false
        } else {
          this.$notify({
            title: '错误',
            message: '提交失败，请重试',
            type: 'warning'
          })
          this.showLoading = false
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
