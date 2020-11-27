<!-- 老兵驿站右侧 -->
<template>
  <div>
    <!-- 顶部推荐 -->
    <div class="side-main">
      <div class="top-section">
        <div class="rcm-bbs">
          <img src="@/assets/img/bbs.png" alt="" />
          <i class="badge badge-blue">论坛</i>
        </div>
        <div class="rcm-section">
          <a href="/#/culture/on-tao/index">老兵论道</a>
          <a href="">休闲养生</a>
          <a href="">医学前沿</a>
          <a href="">户外运动</a>
        </div>
      </div>
    </div>
    <!-- 顶部推荐end -->

    <!-- 老兵政策 -->
    <div class="side-main">
      <div class="side-head">
        <h3>
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />老兵政策<a href="/#/ma/policy/index">更多政策</a>
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

    <!-- 成功案例 -->
    <case-studies />
    <!-- 成功案例end -->

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
console.log("home/components: rightside is loaded");

import CaseStudies from "@/components/CaseStudies"
export default {
  name: "HomeRightSide",
  components: {
    CaseStudies // 成功案例
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
