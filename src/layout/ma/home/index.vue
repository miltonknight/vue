<template>
  <div :class="classObj" class="app-wrapper" @mousewheel="scrollEvent">
    <div class="web-container">
      <!-- <div :class="{ 'fixed-header': fixedHeader }">
         <div class="asHead2"></div>
      </div> -->

      <section class="app-main">
        <!--transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition-->
        <!-- common nav -->
        <common-nav />
        <!-- <common-nav-pic :class="newPst" /> -->

        <!-- main content layout -->
        <div class="main-wrapper">

          <!-- main content box -->
          <div class="main-box">

            <!-- global router-view -->
            <router-view :key="key" />

          </div>  
          <!-- common tip -->
          <common-tip ref="tipMenu" :vrbheight="tipValue" />

          <!-- common BackTop -->
          <back-top />

        </div>

        <!-- common footer -->
        <common-footer />
      </section>
    </div>
  </div>
</template>

<script>
console.log("Layout：@/home/index is loaded");
// import ResizeMixin from "../../mixin/ResizeHandler";
import CommonNav from "@/components/CommonNav";
// import CommonNavPic from "@/components/CommonNav/index2";
import CommonFooter from "@/components/CommonFooter";
import CommonTip from "@/components/CommonTip";
import BackTop from "@/components/BackTop"

export default {
  name: "MaLayout",
  components: { 
    CommonNav, 
    // CommonNavPic,
    CommonFooter, 
    CommonTip, 
    BackTop
  },
  data() {
    return {
      activeIndex: "1",
      visible: false,
      // tipStyle: {
      //   position: '',
      //   top: ''
      // }
      tipValue: 0
      // newPst: ''
    };
  },
  // mixins: [ResizeMixin],
  computed: {
    key() {
      // return this.$route.path;
      return this.$route.fullPath;
    },
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    }
  },
  created: function() { 
    // this.tipPosition();
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({ path: keyPath[0] });
      if (key === 1) {
        console.log(222);
        this.$router.push({ path: "/quick_upload" });
      }
      if (key === 2) {
        this.$router.push({ path: "/quick_download" });
      }
      if (key === 3) {
        this.$router.push({ path: "/req_exchange" });
      }
      if (key === 4) {
        this.$router.push({ path: "/login" });
      }
    },
    scrollEvent(e) {
      // console.log("滚动事件", e);
      this.tipPosition();
      this.$refs.tipMenu.variableStyle();
    },
    tipPosition() {
      // 内容高度 document.body.scrollHeight
      var contentHeight = document.body.scrollHeight; 
      // console.log("contentHeight::", contentHeight);
      // 页面滚动高度
      var rollHeight = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      // console.log("rollHeight:::", rollHeight);
      // 可用高度 = 内容高度 -（头50+脚300）- tip高度（box+mgT） - 安全高度 - 滚动高度 
      // 头部新增230图片高
      // if (rollHeight > 230) {
      var variableHeight = contentHeight - 350 - 690 - 80 - rollHeight; 
        // console.log("variableHeight:::", variableHeight);
      this.tipValue = variableHeight;
      // console.log("this.tipValue:::", this.tipValue);
        // this.newPst = 'fixhead-move'
      // }
      // else {
      //   this.newPst = 'fixhead-still'
      // }
    } 
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.web-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 0;
  position: relative;
}
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.1s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
