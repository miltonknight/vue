<template>
  <div class="header-main">
    <div class="header-container">
      <el-menu
        router=""
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3b3b3b"
        text-color="#fff"
        @select="handleSelect"
      >
        <!-- <el-menu-item index="0">首页</el-menu-item>
        <el-menu-item index="1">老兵旅游</el-menu-item>
        <el-menu-item index="2">老兵医疗</el-menu-item>
        <el-menu-item index="3">金融服务</el-menu-item>
        <el-menu-item index="4">创业就业</el-menu-item>
        <el-menu-item index="5">高端论坛</el-menu-item> -->

        <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="1">老兵旅游</el-menu-item>
        <el-menu-item index="2">老兵医疗</el-menu-item>
        <el-menu-item index="3">金融服务</el-menu-item>
        <el-menu-item index="4">创业就业</el-menu-item>
        <el-menu-item index="5">高端论坛</el-menu-item>
        <el-menu-item index="/temp_upload/article">临时上传</el-menu-item>
      </el-menu>

      <div class="header-operations">
        <span @click="login">登录</span>
        <i class="el-icon-chat-dot-round" @click="msg" />
        <i class="el-icon-message" @click="mail" />
      </div>

      <!-- <el-submenu index="7" mode="vertical">
        <template slot="title"
          >登录</template
        >
        <el-menu-item index="7-1">注册</el-menu-item>
        <el-menu-item index="7-2">登录</el-menu-item>
      </el-submenu> -->
    </div>
  </div>
</template>

<script>
console.log("@/components/CommonNav/index is loaded~~~~~~~~~~~~~~~~");
export default {
  // name: "MaHomeheader",
  name: "CommonNav",
  props: {},
  data() {
    return {
      activeIndex: "0",
      activeIndex2: "0"
      // indexArray : [
      //   {index: 0, path: "/home/index", title: "首页0"},
      //   {index: 1, path: "/home/index", title: "首页1"},
      //   {index: 2, path: "/home/index", title: "首页2"},
      //   {index: 3, path: "/home/index", title: "首页3"},
      //   {index: 4, path: "/home/index", title: "首页4"},
      //   {index: 5, path: "/home/index", title: "首页5"}
      // ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(key);
      // console.log( this.indexArray );
      // console.log( this.indexArray[key].path );
      // this.$router.push({ path: this.indexArray[key].path });
    },
    // example function for login 
    login: function() {
      alert("jump to model login")
    },
    // example function for mail 
    mail: function() {
      alert("jump to model mail")
    },
    // example function for msg 
    msg: function() {
      alert("jump to model msg")
    }
  },
  getNavType() {
    // store.state.adminleftnavnum里值变化的时候，设置navselected,获取当前Nav index
    this.navselected = this.$store.state.adminleftnavnum;
    console.log("get index number :::::::" + this.$store.state.adminleftnavnum);
  }
  // selectItems(){
  //   //按钮选中之后设置当前的index为store里的值。
  //   var _index = this.$store.state.adminleftnavnum;
  //   this.$router.push() {

  //   }
  //   this.$router.push({path:'/eleme'})
  // },
};
</script>

<style scoped lang="scss">
.header-main {
  width: 100%;
  min-width: 1430px;
  height: 50px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #3b3b3b;
  position: fixed;
  z-index: 99;

  .header-container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 1030px;
    margin: 0 auto;
  }
  .header-logo {
    display: inline-block;
    vertical-align: middle;
  }
  .el-header {
    padding: 0 20px;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .header-operations {
    display: inline-block;
    height: 50px;
    width: 220px;
    float: right;
    padding: 15px 0;
    text-align: right;
    
    i {
      font-size: 1.3em;
      color: #fff;
      margin: 0 0 0 10px;
      float: right;
      cursor: pointer;
    }
    span {
      font-size: 14px;
      color: #fff;
      margin: 2px 0 0 10px;
      float: right;
      cursor: pointer;
    }
  }

  /*************************** for the menu bug fix *****************/
  .el-menu-demo {
    display: inline-block;
    list-style-type: disc;
  }
  /* el menu bug fix */
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #e08714 !important;
    border-bottom: none;
  }
  /* el menu border bug fix */
  .el-menu--horizontal > .el-menu-item {
    transition: none;
    width: 110px;
    text-align: center;
    //this part is 4 bug fixing which is missing
    height: 50px;
    line-height: 50px;
  }
}
</style>
