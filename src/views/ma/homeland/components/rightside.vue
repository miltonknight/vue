<!-- 老兵驿站右侧 -->
<template>
  <div>
    <!-- 老兵政策 -->
    <div class="side-main">
      <div class="side-head">
        <h3>
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />老兵政策<a href="">更多政策</a>
        </h3>
      </div>
      <div class="side-body">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <!-- 老兵政策end -->

    <!-- AD -->
    <div class="side-main">
      <div class="side-img-box">
        <img src="@/assets/img/side-demo6.png" alt="">
      </div>
    </div>
    <!-- AD end -->
  </div>
</template>

<script>
console.log("homeland/components: rightside is loaded");

export default {
  name: "HomeLandRightSide",
  components: {
  },
  data() {
    return {
      // timeline data
      activities: [
        {
          content: "中华人民共和国英雄烈士保护法",
          timestamp: "2018-04-12",
          // size: "large",
          type: "primary"
          // color: "#e08714"
        },
        {
          content: "退役士兵安置条例",
          timestamp: "2018-04-03"
          // color: "#e08714"
        },
        {
          content: "中华人民共和国兵役法",
          timestamp: "2018-04-03"
          // color: "#e08714"
        }
      ]
    };
  }
  // ,
  // computed: {
  //   // console.log("computed is blank")
  // },
  // created: {
  //   // console.log("created is blank");
  // }
};
</script>

<style lang="scss" scoped></style>
