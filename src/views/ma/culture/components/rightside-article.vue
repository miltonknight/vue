<!-- 老兵驿站文章右侧 -->
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

    <!-- 热门活动 -->
    <div class="side-main">
      <div class="side-head">
        <h3>
          <svg-icon icon-class="hdot" class-name="card-panel-icon" />热门活动<a href="">更多活动</a>
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
    <!-- 热门活动end -->
  </div>    
</template>

<script>
console.log("@/views/ma/culture/components/rightside-article.vue is loaded~~~~~~~~~~~~~~");
export default {
  name: "CultureRightSideArticle",
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
.article-side {
  border: 1px solid #f5f7f9;
  border-top: 3px solid #4696a3;
  border-bottom: none;
  border-radius: 3px;
  width: 100%;
  padding: 15px 15px;

  .writer-box {
    width: 100%;
    clear: both;
    overflow: hidden;
    position: relative;
    // border-bottom: 1px solid #f5f7f9;

    .writer-head {
      width: 78px;
      height: 78px;
      float: left;
      margin-right: 20px;

      img {
        width: 78px;
        height: 78px;
      }
    }
    .writer-info {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      padding-top: 10px;

      span {
        font-size: 11px;
        font-weight: normal;
        color: #e08714;
        border: 1px solid #e08714;
        padding: 3px 7px;
        border-radius: 3px;
      }
    }
    .writer-follow {
      width: 67px;
      height: 26px;
      line-height: 26px;
      font-size: 13px;
      border-radius: 3px;
      background: #e08714;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 10px;
      right: 0;
    }
    .writer-intro {
      font-size: 13px;
      line-height: 1.4;
      color: #787878;
      margin: 30px 0 0 0;
    }
  }
  .article-side-list {
    width: 100%;

    .list-head {
      border-bottom: 1px solid #f5f7f9;
      padding: 20px 0;
      margin-bottom: 20px;
    }
    span.list-head-ttl {
      border-left: 2px solid #e08714;
      padding-left: 10px;
      font-size: 14px;
      color: #787878;
    }
    .list-body {
      width: 100%;
      font-size: 14px;
      line-height: 1.5;

      dd {
        font-size: 12px;
        color: #c4c4c4;
        margin: 0 0 15px 0;
      }
      p {
        font-size: 14px;
        margin-bottom: 10px;
      }
      p.intro {
        color: #c4c4c4;
        font-size: 12px;
      }
      span {
        color: #c4c4c4;
        font-size: 12px;
      }
    }
  }
}
.more {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #4696a3;
  border-radius: 0 0 3px 3px;
  cursor: pointer;
}

</style>
