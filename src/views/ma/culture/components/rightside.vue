<!-- 老兵驿站右侧 -->
<template>
  <div>
    <!-- 作者信息 -->
    <div class="side-main">
      <div class="article-side">
        <div class="writer-box">
          <div class="writer-head">
            <img src="@/assets/img/head.png" alt="">
          </div>
          <div class="writer-info">
            王大壮<p><span>特邀作者</span></p>
          </div>
          <p class="writer-intro">老兵老兵网官方特邀作者。多年写作经验，谙熟老兵文化事业。</p>
        </div>  
      </div>
      <div class="writer-staff">
        <div class="writer-staff-boxes">
          <router-link to="">
            <img src="@/assets/img/writer-box-1.png" alt="">
            <span>我的文章</span>
          </router-link>
        </div>
        <div class="writer-staff-boxes">
          <router-link to="">
            <img src="@/assets/img/writer-box-2.png" alt="">
            <span>我的草稿</span>
          </router-link>
        </div>
        <div class="writer-staff-boxes">
          <router-link to="">
            <img src="@/assets/img/writer-box-3.png" alt="">
            <span>我的评论</span>
          </router-link>
        </div>
        <div class="writer-staff-boxes">
          <router-link to="">
            <img src="@/assets/img/writer-box-4.png" alt="">
            <span>开始写作</span>
          </router-link>
        </div>
      </div>
      
    </div>
    <!-- 作者信息end -->

  </div>    
</template>

<script>
console.log("@/views/ma/culture/components/rightside.vue is loaded~~~~~~~~~~~~~~");
export default {
  name: "CultureRightSide",
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
}
.writer-staff {
  width: 100%;
  background-color: #f1f0f6;
  padding: 15px 0;
  display: flex;

  .writer-staff-boxes {
    flex-grow: 1; 
    width: 35px;
    align-items: center;
    justify-content: center;
    text-align: center;

    img {
      display: block;
      width: 35px;
      height: 35px;
      margin: 0 auto 5px;
    }
    span {
      font-size: 10px;
    }
  }
}
</style>
