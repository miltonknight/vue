<template>
  <div ref="moveTip" class="tip-main">
    <div class="side-logo">
      <div class="logo-text">
        老兵老兵网
        <p>www.lblbsy.com</p>
      </div>
      <p>一个专属服务老兵的<br>新型网络平台</p>
      <div class="block-line"></div>
    </div>
    <div class="tip-container">
      <el-menu 
        :default-active="activeIndex2"
        class=""
        text-color="#3b3b3b"
        @select="handleSelect"
      >
        <!-- <el-menu-item index="/home/index">
          <span><svg-icon icon-class="tip-home" class-name="card-panel-icon" />首页</span>
        </el-menu-item> -->
        <el-menu-item index="1">
          <!-- <router-link to="/homeland/law"> -->
          <a href="/#/homeland/index">
            <span><svg-icon icon-class="tip-legal-adviser" class-name="card-panel-icon" />法<i></i>律</span>
          </a>
          <!-- </router-link> -->
        </el-menu-item>
        <el-menu-item index="2">
          <span><svg-icon icon-class="tip-medical-treatment" class-name="card-panel-icon" />医<i></i>疗</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span><svg-icon icon-class="tip-travel" class-name="card-panel-icon" />旅<i></i>游</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span><svg-icon icon-class="tip-catering" class-name="card-panel-icon" />老军号</span>
        </el-menu-item>
        <el-menu-item index="5">
          <a href="/#/ma/jobs/index">
            <span><svg-icon icon-class="tip-corporation" class-name="card-panel-icon" />创就业</span>
          </a>
        </el-menu-item>
        <el-menu-item index="6">
          <a href="/#/ma/telecom/index">
            <span><svg-icon icon-class="tip-address-book" class-name="card-panel-icon" />通<i></i>讯</span>
          </a>
        </el-menu-item>
        <el-menu-item index="7">
          <span><svg-icon icon-class="tip-finance" class-name="card-panel-icon" />金<i></i>融</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span><svg-icon icon-class="tip-refueling" class-name="card-panel-icon" />加<i></i>油</span>
        </el-menu-item>
        <el-menu-item index="9">
          <a href="/#/ma/house-moving/index">
            <span><svg-icon icon-class="tip-house-moving" class-name="card-panel-icon" />搬<i></i>家</span>
          </a>  
        </el-menu-item>
      </el-menu>
      <a href="" class="tip-link">寻求合作</a>
      <a href="" class="tip-link">我要投稿</a>
      <a href="/#/temp-upload/article" class="tip-link">临时上传</a>
    </div>
  </div>
</template>

<script>
console.log("Components：@/CommonTip is loaded");

export default {
  name: "CommonTip",
  props: {
    vrbheight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex2: '0'
    };
  },
  watch: {
    vrbheight() {
      console.log("val:::");
      this.variableStyle();
    }
  },
  created() {
    // this.variableStyle();
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
      console.log(key, keyPath);
    },
    variableStyle() {
      var obj = this.$refs.moveTip;
      console.log("obj::::", obj);
      if (this.vrbheight > 0) {
        // console.log("component vrbheight > 0");
        obj.style.position = "fixed";
        obj.style.top = '70px';
        obj.style.bottom = 'auto';
        // this.$forceUpdate();
      } else {
        // console.log("component vrbheight < 0");
        obj.style.position = "absolute";
        obj.style.top = 'auto';
        obj.style.bottom = '320px';
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
.tip-main {
  position: absolute;
  left: 50%;
  top: 70px;
  width: 130px;
  margin-left: -670px;  
  padding-top: 60px;
  background-image: url(~@/assets/img/logo.png);
  background-color: #fefefe;
  background-repeat: no-repeat;
  background-position: top right;

  .side-logo {
    overflow: hidden;

    .logo-text {
      text-align: right;
      // background-image:-webkit-gradient(linear, left bottom, right bottom, color-stop(0.6, #e08714), color-stop(0.65, #4696a3), color-stop(0.93, #e08714));
      background-image: linear-gradient(to right, #e08714 40% , #4696a3 65%, #e08714 93%);
      background-clip: text;
      color: transparent;
      font-size: 24px;
      font-weight: bold;
      
      p {
        margin: 0;
        font-size: 16px;
      }
    }
    p {
      color: #4696a3;
      text-align: right;
      font-size: 12px;
      line-height: 1.5;
      font-weight: bold;
    }
    .block-line {
      height: 1.5px;
      width: 40px;
      background: #d7d7d7;
      margin: 5px 0 10px;
      float: right;
    }
  }
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

          i {
            display: inline-block;
            width: 1em;
          }
        }
        .svg-icon {
          margin-right: 5px;
          color: #4696a3;
        }
      }
      .el-menu-item:focus, .el-menu-item:hover,
      .el-menu-item.is-active {
        color: #fff!important;
        background-color: transparent!important;
          
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
