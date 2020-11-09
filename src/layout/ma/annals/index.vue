<template>
  <div :class="classObj" class="app-wrapper">
    <div class="web-container">
      <div :class="{ 'fixed-header': fixedHeader }" />

      <section class="app-main">
        
        <!--transition name="fade-transform" mode="out-in">
        </transition-->
        <!-- common nav -->
        <common-nav />

        <!-- main content layout -->
        <div class="main-wrapper">
          <!-- main content box -->
          <div class="main-box">

            <!-- <courier-station /> -->
            <router-view :key="key" />

          </div>  
          <!-- common tip -->
          <common-tip />
        </div>

        <!-- common footer -->
        <common-footer />
      </section>
    </div>
  </div>
</template>

<script>
// import ResizeMixin from "../../mixin/ResizeHandler";
import CommonNav from "@/components/CommonNav";
import CommonFooter from "@/components/CommonFooter";
import CommonTip from "@/components/CommonTip";
import Annals from "@/views/ma/annals";

export default {
  name: "MaAnnalsLayout",
  components: { CommonNav, CommonFooter, CommonTip, Annals},
  data() {
    return {
      activeIndex: "1"
    };
  },
  // mixins: [ResizeMixin],
  computed: {
    key() {
      return this.$route.path;
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

/*********  index rebuild ***********/
.main-wrapper {
  min-height: 1000px;
  padding-top: 50px;

  .main-box {
    width: 1030px;
    margin: 20px auto;
  }
  .el-row {
    margin-right: 0!important;
    
    .el-col.el-col-17 {
      padding-right: 0!important;
    }
  }
}

</style>
