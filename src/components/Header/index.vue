<template>
  <div class="header-container">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      @select="handleSelect"
    >
      <el-menu-item index="1">就业创业</el-menu-item>
      <el-menu-item index="2">红色旅游</el-menu-item>
      <el-menu-item index="3">医疗健康</el-menu-item>
      <el-menu-item index="4">法律服务</el-menu-item>
      <el-menu-item index="5">困难救助</el-menu-item>
      <el-submenu index="6">
        <template slot="title">登录</template>
        <el-menu-item index="2-1">注册</el-menu-item>
        <el-menu-item index="2-2">登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
console.log("original header here----------");
export default {
  name: "Homeheader",
  props: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.header-container {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 60px;
  background-color: rgb(59, 59, 59);
  min-width: 1030px;
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
  /* float: right; */
  padding-right: 30px;
  height: 100%;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>
