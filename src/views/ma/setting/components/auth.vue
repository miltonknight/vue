<template>
  <div class="setting-body">
    <el-steps :active="active" align-center>
      <el-step title="填写基本资料" description=""></el-step>
      <el-step title="上传相关证件" description=""></el-step>
      <el-step title="填写军旅生涯" description=""></el-step>
      <el-step title="完成" description=""></el-step>
    </el-steps>

    <div v-show="active == 0" id="box-one" class="step-box">
      <el-form v-model="nameForm" label-width="120px" class="ruleForm">
        <el-form-item label="真实姓名" prop="name">
          <el-input v-model="nameForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="nameForm.sex">
            <el-radio label="1">男</el-radio>
            <el-radio label="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证号码" prop="idNum">
          <el-input value="" ></el-input>
        </el-form-item>
        <el-form-item label="退役证件号码" prop="armyid">
          <el-input value="" ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phoneNumber">
          <el-input value="13555555555" disabled></el-input>
        </el-form-item>
        <el-form-item label="政治面貌" prop="policitalStatus">
          <!-- <el-radio-group v-model="nameForm.policitalStatus">
            <el-radio label="1">党员</el-radio>
            <el-radio label="2">团员</el-radio>
            <el-radio label="3">群众</el-radio>
          </el-radio-group> -->
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    
    <div v-show="active == 1" id="box-two" class="step-box">
      <el-form :model="credentialsForm" label-width="120px" class="ruleForm">
        <el-form-item label="身份证正反面">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="退役军人证">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="辅助证明">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="active == 2" id="box-three" class="step-box">
      <div class="step-final">
        <p>绑定手机修改成功！</p>
        <p>您的新绑定手机号为： 188****8888</p>
      </div>
    </div>
    <div v-show="active == 3" id="box-three" class="step-box">
      <div class="step-final">
        <p>信息提交成功</p>
        <p>请等待老兵老兵网审核人员进行认证！</p>
      </div>
    </div>

    <div class="step-buttons">
      <!-- <el-button type="warning" @click="">下一步</el-button> -->
      <el-button type="warning" @click="prev" v-if="active == 1 || active == 2 ">上一步</el-button>
      <el-button type="warning" @click="next(active)" v-if="active == 0 || active == 1 || active == 2">下一步</el-button>
      <el-button type="warning" @click="submit" v-if="active == 3">完成</el-button>
    </div>

  </div>
</template>

<script>
console.log("setting/components: phone is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "RealNameAuth",
  data() {
    return {
      active: 0, // step
      nameForm: {
        name: '',
        sex: '',
        idNum: '', // 身份证号
        armyid: '',
        phoneNumber: '',
        policitalStatus: '' // 政治面貌
      },
      credentialsForm: {},
      loading: false,
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
        birthday: [
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
      options: [{
          value: '选项1',
          label: '群众'
        }, {
          value: '选项2',
          label: '团员'
        }, {
          value: '选项3',
          label: '民政党派'
        }, {
          value: '选项4',
          label: '党员'
        }],
      value: '',
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    prev() {
      --this.active;
      if (this.active < 0) this.active = 0;
    },
    next(formName) {
      if (this.active++ > 2) this.active = 0;
      else return false;
    },
    submit() {
      
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }  
};
</script>

<style lang="scss" scoped>
.setting-box {
  .el-button--warning {
    background-color: #e08714;
    border-color: #e08714;
    width: 150px;
  }
  .el-form {
    width: 500px;
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
  .el-step>>>.el-step__title.is-process,
  .el-step>>>.el-step__title.is-finish {
    color: #e08714;
  }
  .el-step>>>.el-step__head.is-process,
  .el-step>>>.el-step__head.is-finish {
    color: #e08714;
    border-color: #e08714;
  }
  .el-step>>>.el-step__head.is-finish .el-step__line {
    background-color: #e08714;
  }
  .step-final {
    margin: 70px 0 70px 100px;
    font-size: 14px;
  }

}
.step-buttons {
  margin-left: 120px;
}
</style>
