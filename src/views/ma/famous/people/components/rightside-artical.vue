<!-- 老兵风采名-人大辞典右侧 -->
<template>
  <div>
    <!-- 作者信息 -->
    <div class="side-main">
      <div class="artical-side">
        <div class="writer-box">
          <div class="writer-head">
            <img src="@/assets/img/head.png" alt="">
          </div>
          <div class="writer-info">
            王大壮<p><span>特邀作者</span></p>
          </div>
          <div class="writer-follow">关注</div>  
          <p class="writer-intro">老兵老兵网官方特邀作者。多年写作经验，谙熟老兵文化事业。</p>
        </div>  
        <div class="artical-side-list">
          <div class="list-head">
            <span class="list-head-ttl">发表文章 999 篇</span>
          </div>
          <div class="list-body">
            <span class="list-head-ttl">最近发布</span>
            <dl>
              <dt>教育股集体下跌，教育股还是好的投资吗？</dt>
              <dd>1小时前</dd>
              <dt>教育股集体下跌，教育股还是好的投资吗？</dt>
              <dd>1小时前</dd>
              <dt>教育股集体下跌，教育股还是好的投资吗？</dt>
              <dd>1小时前</dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="more">阅读更多内容</div>
    </div>
    <!-- 作者信息end -->

    <!-- 推荐文章 -->
    <div class="side-main">
      <div class="artical-side">
       
        <div class="artical-side-list">
          <div class="list-head">
            <span class="list-head-ttl">下一篇</span>
          </div>
          <!-- link string is needed -->
          <router-link to="/">
            <div class="list-body">
              <p>26岁银行柜女，每天被男友质问：“你今天是想我多一点，还是想辞职多一点？”</p>
              <p class="intro">不论是“破茧成蝶”还是“凤凰涅槃”，不都是得剥掉一次皮重新来过吗？</p>
              <span>1小时前</span>
            </div>
          </router-link>
        </div>
      </div>
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
console.log("@/views/ma/famous/people/components/rightside-artical.vue is loaded~~~~~~~~~~~~~~");
export default {
  name: "FamousPeopleRightSideArtical",
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
.artical-side {
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
  .artical-side-list {
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
