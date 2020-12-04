<!-- 个人设置 -->
<template>
  <div>
    <el-row :gutter="24">
      <div class="grid-content bg-purple setting-box">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="基本资料" name="first">
            <div class="setting-body">
              <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                <el-form-item label="头像" prop="avatar">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                  <el-input v-model="ruleForm.nickname"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="2">女</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="生日" required>
                  <el-form-item prop="birthday">
                    <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="选择生日" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-form-item>
                <el-form-item label="个人简介" prop="desc">
                  <el-input v-model="ruleForm.desc" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="warning" @click="submitForm('ruleForm')">保存</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="修改绑定手机" name="second">
            <div class="setting-body">
              <el-steps :active="active" align-center>
                <el-step title="验证原有手机" description=""></el-step>
                <el-step title="验证新手机" description=""></el-step>
                <el-step title="完成修改" description=""></el-step>
              </el-steps>

              <div class="step-box" id="box-one" v-show="active == 0">
                <el-form :model="cellForm" label-width="100px" class="ruleForm">
                  <el-form-item label="绑定手机" prop="phoneNumber">
                    <el-input value="13555555555" disabled>></el-input>
                  </el-form-item>
                  <el-form-item label="验证方式" prop="checkWay">
                    <el-input value="使用 13555555555 手机验证" disabled>></el-input>
                  </el-form-item>
                  <el-form-item label="验证码" prop="identity" class="verify">
                    <el-input
                      :key="passwordType"
                      ref="identity"
                      v-model="cellForm.password"
                      :type="passwordType"
                      placeholder="请输入6位短信验证码"
                      name="identity"
                      tabindex="2"
                      auto-complete="on"
                    />
                    <el-button :loading="loading" type="primary" class="identitybtn" @click.native.prevent="getidentity">获取验证码</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="step-box" id="box-two" v-show="active == 1">
                <el-form :model="cellForm" label-width="100px" class="ruleForm">
                  <el-form-item label="绑定手机" prop="phoneNumber">
                    <el-input value="13555555555" disabled>></el-input>
                  </el-form-item>
                  <el-form-item label="验证方式" prop="checkWay">
                    <el-input value="使用 13555555555 手机验证" disabled>></el-input>
                  </el-form-item>
                  <el-form-item label="验证码" prop="identity" class="verify">
                    <el-input
                      :key="passwordType"
                      ref="identity"
                      v-model="cellForm.password"
                      :type="passwordType"
                      placeholder="请输入6位短信验证码"
                      name="identity"
                      tabindex="2"
                      auto-complete="on"
                    />
                    <el-button :loading="loading" type="primary" class="identitybtn" @click.native.prevent="getidentity">获取验证码</el-button>
                  </el-form-item>
                </el-form>
              </div>






            </div>





          </el-tab-pane>
          <el-tab-pane label="实名认证" name="third">
            

          </el-tab-pane>
        </el-tabs>

      </div>

    </el-row>
  </div>
</template>

<script>
console.log("Views: /setting/index is loaded");
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CourierStation",
  components: {

  },
  data() {
    return {
      active: 0, // step
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      ruleForm: {
        imageUrl: '',
        nickname: '',
        sex: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { required: true, min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        birthday: [
          { type: 'date', required: true, message: '请选择生日', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '个人简介', trigger: 'blur' }
        ]
      },
      cellForm: {

      }
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/setting/index';
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true
              }  
              console.log("Get Annals List Response:", data);
              resolve(data);
            }
            // this.$message({
            //   message: msg,
            //   type: "success"
            // });
          })
          .catch(error => {
            console.log(error);
            // this.$message({
            //   message: error,
            //   type: "success"
            // });
          });
      });
    },
    fetchData() {
      this.listLoading = true;
      this.postDataFromUI(LaobingUrl.modular_article_list, this.listQuery)
        .then(response => {
          this.ArticleList = response;
          this.total = response.total;
          this.list = response.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });
    },
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    }

  }
};
</script>

<style lang="scss" scoped>
.setting-box {

  .el-tabs>>>.el-tabs__header {
    padding: 10px 50px;
    background: #f5f7f9;
  }
  .el-tabs--card>>>.el-tabs__header .el-tabs__item,
  .el-tabs--card>>>.el-tabs__header .el-tabs__nav {
    border: none;
    transition: none;
  }
  .el-tabs>>>.el-form-item__label {
    padding-right: 20px;
  }

  .avatar-uploader>>>.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 40px;
    position: relative;
    overflow: hidden;
    width: 80px;
    height: 80px;
    background: url('~@/assets/img/avatar-default.png');
  }
  .avatar-uploader>>>.el-upload:hover {
    border-color: #e08714;
  }
  .el-icon-plus:before {
    content: "\E6D9";
    content: none;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 40px;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
  
  /**** color fix */
  /** tab header */
  .el-tabs--card>>>.el-tabs__header .el-tabs__item.is-active,
  .el-tabs--card>>>.el-tabs__header .el-tabs__item:hover {
    border-bottom: none;
    color: #fff;
    background: #e08714;
  }
  // .el-input.is-active>>>.el-input__inner, 
  .el-tabs>>>.el-input__inner, 
  .el-tabs>>>.el-input__inner:focus,
  .el-tabs>>>.el-radio__inner:hover,
  .el-tabs>>>.el-textarea__inner:focus {
    border-color: #e08714;
  }
  .el-tabs>>>.el-textarea__inner {
    min-height: 99px !important;
  }
  .el-tabs>>>.el-radio__inner:hover,
  .el-tabs>>>.el-date-table td.today>>>span,
  .el-tabs>>>.el-date-table>>>td.available:hover {
    color: #e08714;
  }
  .el-tabs>>>.el-date-table td.current:not(.disabled) span {
    color: #FFF;
    background-color: #e08714;
  }
  .el-tabs>>>.el-radio__input.is-checked+.el-radio__label {
    color: #e08714;
  }
  .el-tabs>>>.el-radio__input.is-checked .el-radio__inner {
    border-color: #e08714;
    background: #e08714;
  }
  .el-button--warning {
    background-color: #e08714;
    border-color: #e08714;
    width: 200px;
  }
  .el-form {
    width: 500px;
    margin: 50px;
  }
  .el-form-item {
    margin-bottom: 35px;
  }
  .setting-body {
    min-height: 700px;
    border: 1px solid #f2f2f2;
  }
}
.setting-body {

  .el-steps {
    margin: 50px auto;
  }

  .step-box {

    .el-form>>>.el-input.is-disabled .el-input__inner {
      color: #3b3b3b;
      background: #f9f9f9;
      border-color: #ebebeb;
    }
    .el-form>>>.el-input__inner {
      border-color: #ebebeb;
    }
    .el-form>>>.verify .el-input,
    .el-form>>>.verify .el-input__inner {
      width: 284px !important;
    }
    .el-form>>>.verify .el-button {
      background: #e08714;
      border-color: #e08714;
    }
    
  }

}
</style>
