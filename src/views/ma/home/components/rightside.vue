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
          <a href="">老兵论道</a>
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
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />老兵政策<a
            href=""
            >更多政策</a
          >
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

    <!-- 最新活动 -->
    <div class="side-main">
      <div class="side-head">
        <h3>
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />最新活动<a
            href=""
            >更多活动</a
          >
        </h3>
      </div>
      <div class="side-body">
        <div class="side-img-box">
          <img src="@/assets/img/side-demo.png" alt="" />
          <h3>阅遍山河 看世界”老兵摄影大赛</h3>
          <p>活动时间：10月20日 - 12月20日</p>
          <i class="badge badge-blue">活动</i>
        </div>
        <div class="side-img-box">
          <img src="@/assets/img/side-demo2.png" alt="" />
          <h3>“云”舞兵清云舞蹈大赛通知</h3>
          <p>活动时间：10月20日 - 12月20日</p>
          <i class="badge badge-blue">活动</i>
        </div>
        <div class="side-img-box">
          <img src="@/assets/img/side-demo3.png" alt="" />
          <h3>全军野战文艺创演活动</h3>
          <p>活动时间：10月20日</p>
          <i class="badge badge-orange">晚会</i>
        </div>
      </div>
    </div>
    <!-- 最新活动end -->

    <!-- 成功案例 -->
    <div class="side-main">
      <div class="side-head">
        <h3>
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />成功案例<a
            href=""
            >更多案例</a
          >
        </h3>
      </div>
      <div class="side-body">
        <div class="side-img-box">
          <img src="@/assets/img/side-demo4.png" alt="" />
          <i class="badge badge-blue">NEW</i>
        </div>
        <div class="side-body">
          <div class="slist-box">
            <div class="slist-box-img">
              <img src="@/assets/img/side-demo5.png" alt="" />
            </div>
            <p>苹果发布iPhone12当天，罗永浩&转转开了场“旧机发布会”</p>
            <span>2020-09-30</span>
          </div>
          <div class="slist-box">
            <div class="slist-box-img">
              <img src="@/assets/img/side-demo5.png" alt="" />
            </div>
            <p>苹果发布iPhone12当天，罗永浩&转转开了场“旧机发布会”</p>
            <span>2020-09-30</span>
          </div>
          <div class="slist-box">
            <div class="slist-box-img">
              <img src="@/assets/img/side-demo5.png" alt="" />
            </div>
            <p>苹果发布iPhone12当天，罗永浩&转转开了场“旧机发布会”</p>
            <span>2020-09-30</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 成功案例end -->

    <!-- AD -->
    <div class="side-main">
      <div class="side-img-box">
        <img src="@/assets/img/side-demo6.png" alt="" />
      </div>
    </div>
    <!-- AD end -->
  </div>
</template>

<script>
console.log("@/views/ma/home/components/rightside.vue is loaded~~~~~~~~~~~~~~");
export default {
  name: "HomeRightSide",
  components: {},
  data() {
    return {
      // timeline data
      activities: [
        {
          content: "中华人民共和国英雄烈士保护法",
          timestamp: "2018-04-12",
          size: "large",
          type: "primary",
          color: "#e08714"
        },
        {
          content: "退役士兵安置条例",
          timestamp: "2018-04-03",
          color: "#e08714"
        },
        {
          content: "中华人民共和国兵役法",
          timestamp: "2018-04-03",
          color: "#e08714"
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
