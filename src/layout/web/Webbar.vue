<template>
  <div class="navbar">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">创业就业</el-menu-item>
      <el-menu-item index="2">红色旅游</el-menu-item>
      <el-menu-item index="3">医疗健康</el-menu-item>
      <el-menu-item index="4">法律服务</el-menu-item>
      <el-menu-item index="5">困难救助</el-menu-item>
      <el-submenu index="6" class="right-menu">
        <template slot="title">用户中心</template>
        <el-menu-item index="2-2">登录</el-menu-item>
        <el-menu-item index="2-3">注册</el-menu-item>
        <el-menu-item index="2-3">我的资料</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Webbar",
  data() {
    return {
      avatar: "http://pic.90sjimg.com/design/00/21/84/57/58d7d20456d08.png"
    };
  },
  components: {},
  computed: {
    ...mapGetters(["avatar"])
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
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
        transition: background 0.3s;

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
