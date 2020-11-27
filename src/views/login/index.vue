<template>
  <div class="login-container">
    <div class="login-box">
      <div class="title-container">
        <h3 class="title"><img src="~@/assets/img/login-logo.png" alt=""></h3>
      </div>

      <div class="login-form-box">
        <span class="login-title">免密码登录</span>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="tel" />
            </span>
            <!-- placeholder="Username" -->
            <el-input
              ref="username"
              v-model="loginForm.username"
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
            <!-- placeholder="Password" -->
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>

          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登  录</el-button>
        </el-form>
        <p>未注册手机验证后自动登录，注册即代表我已阅读并同意</p>
        <a href="">《用户服务协议及隐私政策》</a>
      </div>
    </div>  
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
        // username: '13555800207',
        // password: '123456'
        username: '',
        password: ''
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
            // this.$router.push({ path: this.redirect || '/dashboard' })
            this.$router.push({ path: '/ma' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$cursor: #7b7b7b;
$orange: #e08714;
$bg:#fff;
$dark_gray:#889aa4;
$light_gray:#eee;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.login-box {
  width: 520px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -400px 0 0 -260px;
  background: #fff;
  padding: 40px;
  
}
.login-form-box {
  border: 1px solid #ebebeb;
  padding: 35px 35px;
  box-shadow: 0 0 5px -1px #8d8d8d;
  border-radius: 10px;
  background: #fff;

  .login-title {
    color: #000;
    padding-bottom: 15px;
    border-bottom: 3px solid $orange;
  }
  .svg-icon {
    width: 18px;
    height: 18px;
  }
  p, a {
    font-size: 14px;
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-form-item__content {
    border-bottom: 1px solid #ebebeb;
  }
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
      color: $cursor;
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
    border-radius: 5px;
    color: #454545;
  }
  .el-button--primary {
    background-color: $orange;
    border-color: $orange;
  }
}

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    width: 520px;
    max-width: 100%;
    margin: 40px auto 0;
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
</style>
