<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-row>
        <el-col :span="12">
          <div class="login-title">
            基于云计算平台的教学管理系统
          </div>
          <img class="login-img" :src="img()">
        </el-col>
        <el-col :span="12">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left"
          >

            <el-form-item prop="username">
              <span class="svg-container">
                <svg-icon icon-class="user" />
              </span>
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="Username"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>

            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="Password"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-button
                  :loading="loading"
                  type="primary"
                  style="width:100%;margin-bottom:30px;"
                  @click.native.prevent="handleLogin"
                >登录
                </el-button>
              </el-col>
              <el-col :span="12">
                <el-button
                  :loading="loading"
                  type="primary"
                  style="width:100%;margin-bottom:30px;"
                  @click="toRegister"
                >注册
                </el-button>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center">
              <el-col :span="6" :offset="2">
                <div style="align-items: center;justify-items: center">
                  <svg-icon icon-class="QQ" class="login-third-part" />
                  <svg-icon icon-class="wechat-fill" class="login-third-part" />
                </div>

              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>

    </el-card>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'student',
        password: '124421'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    toRegister() {
      this.$router.push({ path: '/register' })
    },
    img() {
      return require('@/assets/images/学习.svg')
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #383838;

.login-container {
  min-height: 100%;
  width: 100%;
  background: url("~@/assets/images/snow-4726119.png") no-repeat center;
  overflow: hidden;

  ::v-deep .el-input input {
    color: #2b2f3a;
  }

  .login-card {

    //background-image: linear-gradient( 135deg, #ffffff 10%, rgb(250, 241, 241) 100%);

    ::v-deep .el-card__body {
      padding: 0;
    }

    .login-img {
      height: 350px;
      position: relative;
      left: 80px;
    }

    .login-title {
      margin-top: 20px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      padding: 0;
    }

    position: relative;
    width: 1020px;
    max-width: 100%;
    //padding: 160px 35px 0;
    margin: 240px auto;
    overflow: hidden;
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 30px 35px 0;
    margin-top: 80px;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}

.login-third-part{
  font-size: 30px;
  cursor: pointer;

}
</style>
