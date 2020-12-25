<template>
  <div class="header-main">
    <div class="header-container">
      <el-menu
        router=""
        :default-active="navselected"
        :active="navselected"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3b3b3b"
        text-color="#fff"
        @select="handleSelect"
      >

        <!-- <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="1">老兵旅游</el-menu-item>
        <el-menu-item index="2">老兵医疗</el-menu-item>
        <el-menu-item index="3">金融服务</el-menu-item>
        <el-menu-item index="4">创业就业</el-menu-item>
        <el-menu-item index="5">高端论坛</el-menu-item>
        <el-menu-item index="/temp-upload/article">临时上传</el-menu-item> -->

        <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="/courier-station/index">老兵驿站</el-menu-item>
        <el-menu-item index="/annals/index">老兵战史</el-menu-item>
        <el-menu-item index="/sentiment/index">老兵情怀</el-menu-item>
        <el-submenu 
          index="4"
          background-color="#3b3b3b"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template slot="title">老兵文化</template>
          <el-menu-item index="/culture/on-tao/index">名家讲坛</el-menu-item>
          <el-menu-item index="/culture/storage/index">资料库</el-menu-item>
          <el-menu-item index="/culture/new-media/index">新媒体</el-menu-item>
          <el-menu-item index="/culture/competition/index">比赛活动</el-menu-item>
          <el-menu-item index="4-5">网络晚会</el-menu-item>
        </el-submenu>
        <el-submenu 
          index="5"
          background-color="#3b3b3b"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template slot="title">老兵风采</template>
          <el-menu-item index="/famous/people/index">老兵名人大辞典</el-menu-item>
          <el-menu-item index="/famous/enterprise/index">老兵名企展播</el-menu-item>
        </el-submenu>
        <el-menu-item index="/policy/index">老兵政策</el-menu-item>
        <el-menu-item index="7">老兵论坛</el-menu-item>

        <div v-if="access_token" class="header-operations">
          <el-badge is-dot class="item">
            <i class="el-icon-chat-dot-round" title="私信" @click="msg" />
          </el-badge>
          <el-badge is-dot class="item">
            <i class="el-icon-message" title="站内信" @click="mail" />
          </el-badge>
        </div>

        <el-submenu index="8" mode="vertical" class="last">
          <template slot="title">
            <div class="avatar-box">
              <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
              <img :src="avatar?avatar:defaultAvatar" class="user-avatar">
              <i class="el-icon-caret-bottom" />
            </div>
          </template>
          <el-menu-item v-if="!access_token" index="/login">登陆</el-menu-item>
          <el-menu-item v-if="access_token" index="/setting/index">资料</el-menu-item>
          <el-menu-item v-if="access_token" index="/articles/index">我的文章</el-menu-item>
          <el-menu-item v-if="access_token" index="/follow/index">我的关注</el-menu-item>
          <el-menu-item v-if="access_token" index="#" @click.native="logout">退出</el-menu-item>
        </el-submenu>
        
      </el-menu>

    </div>
  </div>
</template>

<script>
import router from '@/router';
console.log("Components：@/CommonNav is loaded");

import { mapGetters } from "vuex";
export default {
  // name: "MaHomeheader",
  name: "CommonNav",
  props: {},
  data() {
    return {
      activeIndex: "/home/index", // 使用数字页面无法识别初始状态
      activeIndex2: "0",
      navselected: "/home/index",
      indexArray: [
        { index: "0", path: "/home/index", title: "首页" },
        { index: "1", path: "/courier-station/index", title: "老兵驿站" },
        { index: "2", path: "/annals/index", title: "老兵战史" },
        { index: "3", path: "/sentiment/index", title: "老兵情怀" },
        { index: "4", path: "/culture", title: "老兵文化" },
        { index: "4-1", path: "/culture/on-tao/index", title: "名家讲坛" },
        { index: "4-2", path: "/culture/storage/index", title: "资料库" },
        { index: "4-3", path: "/culture/new-media/index", title: "新媒体" },
        { index: "4-4", path: "/culture/index", title: "比赛活动" },
        { index: "4-5", path: "/culture/index", title: "网络晚会" },
        { index: "5", path: "/famous/", title: "老兵风采" },
        { index: "5-1", path: "/famous/people/index", title: "老兵名人大辞典" },
        { index: "5-2", path: "/famous/enterprise/index", title: "老兵名企展播" },
        { index: "6", path: "/policy/index", title: "老兵政策" },
        { index: "7", path: "/home/index", title: "老兵论坛" }
      ],
      defaultAvatar: require("@/assets/img/head.png")
    };
  },
  computed: {
    ...mapGetters(['avatar', 'access_token'])
  },
  watch: {
    // 监测store.state
    '$store.state.navactive': 'getNavType'
  },
  created: function() {
    // this.defaultAvatar();
  },
  methods: {
    defAvatar(e) {
      console.log("defaultAvatar ~ this.avatar::", this.avatar);
      // if (this.avatar === undefined) {
      //   this.$store.state.user.avatar = '@/assets/img/head.png';
      //   console.log("avatar::::::::" + this.avatar);
      // }
      console.log(e)
      const img = e.srcElement
      img.src = this.defaultAvatar
    },

    // example function for login 
    login: function() {
      alert("jump to model login")
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    // example function for mail 
    mail: function() {
      router.push('/inbox/index');
      // alert("jump to model mail")
    },
    // example function for msg 
    msg: function() {
      console.log("hhhhhhhhhhhhhhh", this.avatar);
      // alert("jump to model msg")
    },
    getNavType() {
      this.navselected = this.$store.state.navactive;
      // store.state.navactive里值变化的时候，设置navselected
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // 按钮选中之后设置当前的index为store里的值。
      this.$store.state.navactive = key;
    }
  }
};
</script>

<style scoped lang="scss">
.header-main {
  width: 100%;
  min-width: 1340px;
  height: 50px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #3b3b3b;
  position: fixed;
  z-index: 99;
  padding: 0 195px; /* narrow screen bug fixed */

  .header-container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 1040px;
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
    padding: 15px 0;
    text-align: right;
    margin-left: 85px;
    
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
    width: 100%;
  }
  /* el menu bug fix */
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu-item.is-active,
  .el-menu--popup .el-menu--popup-bottom-start li,
  .el-menu--horizontal > .el-menu--popup > .el-menu-item:not(.is-disabled):hover {
    background-color: #e08714 !important; 
    color: #fff !important;
    border-bottom: none;
  }
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    color: #fff !important;
    // background-color: #e08714 !important;
    background-color: #e08714;
    border-bottom: none;
  }
  /* el menu border bug fix */
  .el-menu--horizontal > .el-menu-item,
  .el-menu--horizontal>.el-submenu .el-submenu__title {
    transition: none;
    width: 96px;
    text-align: center;
    //this part is 4 bug fixing which is missing
    height: 50px!important;
    line-height: 50px!important;
  }
}
ul.el-menu li.el-submenu {

  &:nth-last-child(1) {
    float: right;
    background: none !important;
    
    .el-submenu__title { 
      padding: 0px 30px 0px 10px !important;
      background: none !important;
    }
  }
}
.el-menu--horizontal>.el-submenu.last .el-submenu__title, 
.is-active.last>>>.el-submenu__title {
  background: none !important;
  // padding: 0px 30px 0px 10px !important;
  // padding: 0px 10px 0px 10px;
}
.avatar-box {
  width: 30px;
  height: 30px;

  img {
    width: 30px;
    height: 30px;
    display: inline-block;
  }
}
</style>
