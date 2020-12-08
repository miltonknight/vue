<!-- 个人设置 -->
<template>
  <div>
    <el-row :gutter="24">
      <div class="grid-content bg-purple setting-box">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="基本资料" name="first">

            <!-- components: components/basic -->
            <basic-info />

          </el-tab-pane>
          <el-tab-pane label="修改绑定手机" name="second">

            <!-- components: components/phone -->
            <bind-phone />

          </el-tab-pane>
          <el-tab-pane label="实名认证" name="third">

            <!-- components: components/auth -->
            <real-name-auth />
            
          </el-tab-pane>
        </el-tabs>

      </div>

    </el-row>
  </div>
</template>

<script>
console.log("Views: /setting/index is loaded");

import BasicInfo from "@/views/ma/setting/components/basic"
import BindPhone from "@/views/ma/setting/components/phone"
import RealNameAuth from "@/views/ma/setting/components/auth"
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "setting",
  components: {
    BasicInfo,
    BindPhone,
    RealNameAuth
  },
  data() {
    return {
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
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
.el-month-table a.cell,
.el-month-table a.cell:hover {
  color: #e08714 !important;
}
</style>
