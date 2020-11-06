<!-- 老兵驿站文章右侧 -->
<template>
  <div>
    <!-- 作者信息 -->
    <div class="side-main">
      作者信息
    </div>
    <!-- 作者信息end -->

    <!-- 推荐文章 -->
    <div class="side-main">
      推荐文章
    </div>
    <!-- 推荐文章end -->

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
console.log("@/views/ma/courier_station/components/rightside-artical.vue is loaded~~~~~~~~~~~~~~");
export default {
  name: "CsRightSideArtical",
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
