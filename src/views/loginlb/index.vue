<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">欢迎登录老兵老兵网</h3>
        <h4 class="stitle">WELCOME TO LOGIN</h4>
      </div>

      <div class="begernav">
        <h5 class="stitle-sub-this" @click="LoginnK">免密登录</h5>
        <h5 class="stitle-sub" @click="LoginK">密码登录</h5>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="phone" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="手机号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="identity">
        <span class="svg-container">
          <svg-icon icon-class="message" />
        </span>
        <el-input
          :key="passwordType"
          ref="identity"
          v-model="loginForm.identity"
          :type="passwordType"
          placeholder="请输入验证码"
          name="identity"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <el-button
          :loading="loading"
          type="primary"
          class="identitybtn"
          name="identitybtn"
          @click.native.prevent="getVerifyCode"
        >{{btnTitle}}</el-button>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;background:#107ebd;"
        @click.native.prevent="handleLogin"
      >登录</el-button>

      <div class="tips">
        <span @click="regist">注册账号</span>
        <span>/</span>
        <span @click="pwdreset">找回密码</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { valid } from "mockjs";

export default {
  name: "Login",
  data() {
    const validatePhone = (rule, value, callback) => {
      //判断输入的手机号是否合法
      if (!value) {
        callback(new Error("请输入手机号码"));
        // return false
      } else if (!/^1[345678]\d{9}$/.test(value)) {
        callback(new Error("请输入正确的手机号码"));
        // return false
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        identity: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validatePhone },
        ],
        identity: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      btnTitle: "获取短信验证码",
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("登录信息错误请重试!");
          return false;
        }
      });
    },
    getVerifyCode() {
      this.validateBtn();
      //发送网络请求
      this.loading = true;
      this.$store
        .dispatch("user/getVerifyCode", this.loginForm)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    validateBtn() {
      console.log(this.btnTitle);
      //倒计时
      let time = 6;
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "获取短信验证码";
        } else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      }, 1000);
    },
    LoginK() {
      this.$router.push({ path: "/logink" });
    },
    LoginnK() {
      this.$router.push({ path: "/login" });
    },
    regist() {
      this.$router.push({ path: "/regist" });
    },
    pwdreset() {
      this.$router.push({ path: "/pwdreset" });
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #f8f8f8;
$light_gray: #b1b1b1;
$cursor: #f8f8f8;

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

  .el-input {
    &:nth-of-type(1) {
      width: 50%;
    }
  }

  .el-form-item {
    clear: both;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: $light_gray;
  }
}
</style>

<style lang="scss" scoped>
$bg: #ffffff;
$dark_gray: #889aa4;
$light_gray: #107ebd;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #107ebd;
    margin-bottom: 10px;
    cursor: pointer;
    // span {
    //   &:nth-of-type(3) {
    //     color:$dark_gray;
    //   }
    // }
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
      margin: 0px auto 10px auto;
      text-align: left;
      font-weight: bold;
    }
    .stitle {
      font-size: 18px;
      color: #13263f;
      margin: 0px auto 40px auto;
      text-align: left;
      font-weight: bold;
    }
  }

  .begernav {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    cursor: pointer;

    .stitle-sub {
      color: $dark_gray;
      margin: 0px auto 20px auto;
      padding: 0 0 5px 0;
      float: left;
    }
    .stitle-sub-this {
      color: #13263f;
      margin: 0px auto 20px auto;
      padding: 0 0 5px 0;
      float: left;
      border-bottom: 3px solid #107ebd;
    }

    h5 {
      &:nth-of-type(2) {
        margin: 0px auto 20px 15px;
      }
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

  .identitybtn {
    color: $dark_gray;
    background: none;
    border: none;
    float: right;
    width: 30%;
    height: 47px;
    line-height: 28px;
    padding: 12px 0;
    margin-right: 10px;
  }
}
</style>
