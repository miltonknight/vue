<template>
  <div class="tip-main">
    <div class="tip-container">
      <el-menu 
        :default-active="activeIndex2"
        class=""
        text-color="#3b3b3b"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <span><svg-icon icon-class="tip-home" class-name="card-panel-icon" />首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span><svg-icon icon-class="tip-legal-adviser" class-name="card-panel-icon" />法律</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span><svg-icon icon-class="tip-medical-treatment" class-name="card-panel-icon" />医疗</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span><svg-icon icon-class="tip-travel" class-name="card-panel-icon" />旅游</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span><svg-icon icon-class="tip-catering" class-name="card-panel-icon" />老军号餐饮</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span><svg-icon icon-class="tip-corporation" class-name="card-panel-icon" />创业就业</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span><svg-icon icon-class="tip-address-book" class-name="card-panel-icon" />通讯</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span><svg-icon icon-class="tip-finance" class-name="card-panel-icon" />金融</span>
        </el-menu-item>
        <el-menu-item index="9">
          <span><svg-icon icon-class="tip-refueling" class-name="card-panel-icon" />加油</span>
        </el-menu-item>
        <el-menu-item index="10">
          <span><svg-icon icon-class="tip-house-moving" class-name="card-panel-icon" />搬家</span>
        </el-menu-item>
        <el-menu-item index="11"><a href="/#/temp_upload/article">临时上传</a></el-menu-item>
      </el-menu>
      <a href="" class="tip-link">寻求合作</a>
      <a href="" class="tip-link">我要投稿</a>
    </div>
  </div>
</template>

<script>

console.log("@/components/CommonTip/index is loaded~~~~~~~~~~");

export default {
  name: "CommonTip",
  props: {},
  data() {
    return {
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.tip-main {
  position: absolute;
  left: 50%;
  top: 80px;
  width: 180px;
  padding-top: 145px;
  margin-left: -715px;  
  background: url(~@/assets/img/logo.png) #fefefe no-repeat;

  .tip-container {
    text-align: right;

    .el-menu {
      border-right: none;
      float: right;

      .el-menu-item {
        color: #3b3b3b!important;
        display: block;
        height: 2em;
        line-height: 2em;
        font-size: 1em;
        padding: 0;
        margin-bottom: 5px;

        span {
          padding: 4px 8px 5px!important;
          height: 2em;
          line-height: 2em;
          font-size: 1em;
        }
        .svg-icon {
          margin-right: 5px;
          color: #4696a3;
        }
      }
      .el-menu-item:focus, .el-menu-item:hover {
        color: #fff!important;
        background: transparent;
          
        span {
          color: #fff!important;
          border-radius: 3px;
          background-color: #e08714;
        }
        .svg-icon {
          color: #fff;
        }
      }
    }
  }
  .tip-link {
    float: right;
    color: #e08714;
    border: 1px solid #e08714;
    padding: 4px 8px 5px;
    margin: 20px 0 0px 20px;
  }
}
</style>
