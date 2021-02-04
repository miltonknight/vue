<template>
  <div class="setting-body">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- <el-form-item label="头像" prop="avatar">
        <el-upload
          class="avatar-uploader"
          action="http://192.168.110.170:8181/uploads/avatar"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="ruleForm.imageUrl"
            :src="ruleForm.imageUrl"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item> -->

      <el-form-item label="头像" prop="avatar">
        <upload-avatar ref="avatarImg" :avatarurl="ruleForm.avatar" />
      </el-form-item>

      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname" placeholder="请输入昵称"></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="生日" required>
        <el-form-item prop="birth_date">
          <el-date-picker
            v-model="ruleForm.birth_date"
            type="date"
            placeholder="选择生日"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
      </el-form-item>

      <el-form-item label="常住地" prop="">
        <!-- <el-input v-model="ruleForm.home"></el-input> -->
        <v-distpicker
          :province="ruleForm.province"
          :city="ruleForm.city"
          :district="ruleForm.district"
          @province="onChangeProvince"
          @city="onChangeCity"
          @area="onChangeArea"
        >
        </v-distpicker>
      </el-form-item>
      <el-form-item label="个人简介" prop="introduction">
        <el-input v-model="ruleForm.introduction" type="textarea" placeholder="请输入个人简介"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="warning" 
          @click="submitForm('ruleForm')"
        >
          保存
        </el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
console.log("setting/components: basic is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";
import VDistpicker from "v-distpicker";
import {
  setTokenByKey,
  TOKEN_KEYS
} from "@/utils/auth";
// import UploadAvatar from "@/components/UploadImg/avatar"

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "BasicInfo",
  components: {
    VDistpicker,
    UploadAvatar: () => import("@/components/UploadImg/avatar")
  },
  data() {
    return {
      infos: [],
      ruleForm: {
        imageUrl: "",
        // nickname: "",
        // sex: "",
        // desc: "",
        uid: "",
        avatar: "",
        nickname: "", //
        sex: "", //
        birth_date: "", //
        introduction: "", //
        province: '',
        city: '',
        district: ''
      },
      rules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            required: true,
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "blur"
          }
        ],
        birth_date: [
          {
            type: "date",
            required: true,
            message: "请选择生日",
            trigger: "change"
          }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        desc: [{ required: true, message: "个人简介", trigger: "blur" }]
      },
      cellForm: {},
      cellForm2: {},
      passwordType: "password",
      loading: false,
      newPhoneNumber: ""
    };
  },
  computed: {
    ...mapGetters(["user_id", "avatar"])
  },
  created: function() {
    this.fetchData();
    // this.$store.state.navactive = '/annals/index';
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 地址选择
    onSelected(data) {
      alert(data.province + ' | ' + data.city)
      console.log(data)
    },
    choose() {
      this.show = !this.show
    },
    onChangeProvince(a) {
      console.log(a) 
      this.ruleForm.province = a.value;
      // this.txt1 = a.value + '-'
    },    
    onChangeCity(a) {
      console.log(a)    
      this.ruleForm.city = a.value;
      // this.txt2 = a.value + '-'    
    },
    onChangeArea(a) {
      console.log(a)    
      this.ruleForm.district = a.value;
    },
    // time format
    timeLabel(strTime) {
      var curTime = new Date(strTime);
      var Y = curTime.getFullYear();
      var M = curTime.getMonth() + 1;
      var D = curTime.getDate();
      var timeLabel = Y + '-' + M + '-' + D;
      // console.log("timeLabel", timeLabel);
      this.ruleForm.birth_date = timeLabel;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.saveData();
        } else {
          console.log("整不了!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log("this.ruleForm::::", this.ruleForm)
      this.$refs[formName].resetFields();
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
              console.log("Get profile Response:", data);
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
    fetchData() { // 读取已保存信息
      var params = {
        uid: this.user_id
      };
      this.listLoading = true;
      this.postDataFromUI(LaobingUrl.get_infos, params)
        .then(response => {
          console.log(response)
          this.ruleForm.avatar = response.avatar;
          this.ruleForm.nickname = response.nickname;
          this.ruleForm.sex = response.sex;
          this.ruleForm.birth_date = response.birth_date;
          this.ruleForm.province = response.province;
          this.ruleForm.city = response.city;
          this.ruleForm.district = response.area;
          this.ruleForm.introduction = response.introduction;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });
    },
    saveData() { // 保存信息
      // this.timeLabel(this.ruleForm.birth_date); 
      this.ruleForm.uid = this.user_id;
      this.ruleForm.avatar = this.$refs.avatarImg.imgUrl;
      // 解决token数据不刷新的bug
      this.avatar = this.ruleForm.avatar;

      console.log("ruleForm:::", this.ruleForm);
      this.listLoading = true;
      this.postDataFromUI(LaobingUrl.save_infos, this.ruleForm)
        .then(response => { 
          // this.ArticleList = response;
          console.log("save response:::::", response);
          // 强刷token，并且刷新页面
          setTokenByKey(TOKEN_KEYS.avatar_key, response.avatar);
          history.go(0);
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });
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
    width: 150px;
  }
  .el-form {
    width: 600px;
    // margin: 50px;
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
  // width: 500px;
  padding: 50px;
}
.el-tabs>>>.distpicker-address-wrapper select {
  color: #606266 !important;
  border: 1px solid #e08714 !important;;
}
</style>
