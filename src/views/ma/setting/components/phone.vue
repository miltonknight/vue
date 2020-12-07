<template>
  <div class="setting-body">
    <el-steps :active="active" align-center>
      <el-step title="验证原有手机" description=""></el-step>
      <el-step title="验证新手机" description=""></el-step>
      <el-step title="完成修改" description=""></el-step>
    </el-steps>

    <div v-show="active == 0" id="box-one" class="step-box">
      <el-form v-model="cellForm2" label-width="100px" class="ruleForm">
        <el-form-item label="绑定手机" prop="phoneNumber">
          <el-input value="13555555555" disabled></el-input>
        </el-form-item>
        <el-form-item label="验证方式" prop="checkWay">
          <el-input value="使用 13555555555 手机验证" disabled></el-input>
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
    <div v-show="active == 1" id="box-two" class="step-box">
      <el-form :model="cellForm" label-width="100px" class="ruleForm">
        <el-form-item label="新手机号" prop="newPhoneNumber">
          <el-input value="" placeholder="请输入新的手机号码" v-model="newPhoneNumber"></el-input>
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
    <div v-show="active == 2" id="box-three" class="step-box">
      <div class="step-final">
        <p>绑定手机修改成功！</p>
        <p>您的新绑定手机号为： 188****8888</p>
      </div>
    </div>

    <div class="step-buttons">
      <!-- <el-button type="warning" @click="">下一步</el-button> -->
      <el-button type="warning" @click="prev" v-if="active == 1">上一步</el-button>
      <el-button type="warning" @click="next(active)" v-if="active == 0 || active == 1">下一步</el-button>
      <el-button type="warning" @click="submit" v-if="active == 2">完成</el-button>
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
  name: "BindPhone",
  data() {
    return {
      active: 0, // step
      cellForm: {},
      cellForm2: {},
      passwordType: "password",
      loading: false,
      newPhoneNumber: ""
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
  margin-left: 100px;
}
</style>
