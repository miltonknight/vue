<template>
  <div class="login-container">
    <el-row :gutter="40">
      <el-col :span="2">
        <div class="grid-content" />
      </el-col>
      <el-col :span="9">
        <el-form
          ref="loginForm"
          class="login-form"
          label-position="left"
        >
          <div class="title-container">
            <h3 class="title">老兵码验证</h3>
          </div>

          <el-form-item prop="soldiercode">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              v-model="soldiercode"
              placeholder="输入老兵码"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-button
            type="primary"
            style="width:100%;margin-bottom:30px;"
            @click.native.prevent="handleLogin"
          >验 证</el-button>
        </el-form>
      </el-col>

      <el-col :span="2">
        <div class="grid-content" />
      </el-col>
      <el-col :span="9">
        <box-card :code="code" :url="url" />
      </el-col>
      <el-col :span="2">
        <div class="grid-content" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BoxCard from "./BoxCard";

import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  components: {
    BoxCard
  },
  data() {
    return {
      soldiercode: '',
      code: {
        name: "",
        userId: "",
        idCard: "",
        soldierCard: ""
      },
      url: ''
    };
  },
  methods: {

    getDataFromUI(url) {
      return new Promise((resolve, reject) => {
        getData(url)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000 && data != null) {
              console.log("GetDataFromUI Response:", data);
              resolve(data);
            } else {
              reject(msg);
              this.$message({
                message: "没有查询到数据",
                type: "success"
              });
            }
          })
          .catch(error => {
            console.log(error);
            this.$message({
              message: error,
              type: "success"
            });
          });
      });
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              console.log("PostDataFromUI Response:", data);
              resolve(data);
            }
            this.$message({
              message: msg,
              type: "success"
            });
          })
          .catch(error => {
            console.log(error);
            this.$message({
              message: error,
              type: "success"
            });
          });
      });
    },
    handleLogin() {
      this.postDataFromUI(
        LaobingUrl.user_decode_soldier_code,
        this.soldiercode
      )
        .then(response => {
          console.log(response);
          this.code = response;
          this.getDataFromUI(
          LaobingUrl.user_show_soldier_code + "/" + response.userId + "/1"
        )
          .then(res => {
            this.url = res
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
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
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 120px 35px 0;
    margin: 0 auto;
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
