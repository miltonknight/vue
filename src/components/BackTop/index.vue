<template>
  <el-backtop>
    <div class="backtobox">
      <div>
        <el-popover
          placement="top-start"
          title="客服电话"
          trigger="hover"
          content="+86-24-23241999"
        >
          <img slot="reference" src="@/assets/img/cservice.png" />
        </el-popover>
      </div>
      <div><img src="@/assets/img/backtop.png" /></div>
    </div>
  </el-backtop>
</template>

<script>
console.log("Components：@/BackTop is loaded");

export default {
  // name: "MaHomeheader",
  name: "BackTop",
  data() {
    return {
      visible: false
    }
  },
  created: function() { },
  methods: { }
};
</script>

<style scoped lang="scss">

</style>
