<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">完善用户资料</h3>
      </div>

      <el-form-item label="姓名">
        <el-input v-model="loginForm.zh_name"></el-input>
      </el-form-item>

      <el-form-item label="身份证号码">
        <el-input v-model="loginForm.idCard"></el-input>
      </el-form-item>

      <el-form-item label="上传身份证">
        <el-upload
          class="avatar-uploader"
          :action="actionUrl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传退役证">
        <el-upload
          class="avatar-uploader"
          :action="actionUrl"
          :show-file-list="false"
          :on-success="handleSoldierAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageSoldier" :src="imageSoldier" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传头像">
        <el-upload
          class="avatar-uploader"
          :action="actionUrl"
          :show-file-list="false"
          :on-success="handleHeaderAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageHeader" :src="imageHeader" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >提交</el-button>
    </el-form>
  </div>
</template>

<script>
import { getData, postData } from "@/api/common";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      imageUrl: '',
      imageSoldier: '',
      imageHeader: '',
      loginForm: {
        zh_name: "",
        introduction: "",
        idCard: "",
        idCardPath: "",
        soldierCard: '',
        soldierPath: '',
        headerPath: ''
      },
      actionUrl: ""
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created() {
    this.actionUrl = "http://localhost:8181/authapi/uploads/user?access_token=" + this.access_token;
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    getCode() {
      getData("/user/userapi/get_validate_code/" + this.loginForm.username)
        .then(response => {
          this.hash = response.data.hash;
          this.timestamp = response.data.timestamp;
          this.$message({
            message: response.data.msg,
            type: "success"
          });
        })
        .catch(error =>
          this.$message({
            message: error,
            type: "success"
          })
        );
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleAvatarSuccess(res, file) {
      console.log("res", res)
      this.loginForm.idCardPath = res.data
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleSoldierAvatarSuccess(res, file) {
      console.log("res", res)
      this.loginForm.soldierPath = res.data
      this.imageSoldier = URL.createObjectURL(file.raw);
    },
    handleHeaderAvatarSuccess(res, file) {
      console.log("res", res)
      this.loginForm.headerPath = res.data
      this.imageHeader = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = (file.type === "image/jpeg" || file.type === "image/png");
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  handleLogin() {
    this.loading = true;
    this.$refs.loginForm.validate(valid => {
      var params = {
        username: this.loginForm.username,
        password: this.loginForm.password,
        hash: this.hash,
        timestamp: this.timestamp,
        code: this.loginForm.code
      };
      postData("/user/userapi/register", params)
        .then(response => {
          this.$message({
            message: response.msg,
            type: "success"
          });
          this.$router.push({ path: this.redirect || "/dashboard" });
          this.loading = false;
        })
        .catch(error => {
          this.$message({
            message: error,
            type: "success"
          });
          this.loading = false;
        });
    });
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
    width: 90%;
    max-width: 100%;
    padding: 20px 10px 0;
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
