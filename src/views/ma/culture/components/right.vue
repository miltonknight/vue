<!-- 老兵文化右侧 -->
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

    <!-- 最新活动 -->
    <div class="side-main">
      <div class="side-head">
        <h3>
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />最新活动<a href="">更多活动</a>
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
  </div>    
</template>

<script>
console.log("@/views/ma/culture/components/rightside.vue is loaded~~~~~~~~~~~~~~");
export default {
  name: "CultureRight",
  components: {},
  data() {
    return {}
  }
  // ,
  // computed: {
  //   // message() {}
  // },
  // created: {}
};
</script>

<style lang="scss" scoped>

</style>
