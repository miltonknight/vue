<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 焦点图 -->
          <!-- components:components/focus -->
          <home-focus />

          <div class="list-container">
            
            <!-- 优惠信息 -->
            <!-- components:components/coupon -->
            <home-coupon />

            <!-- 老兵驿站 -->
            <!-- components:components/courier-station -->
            <home-courier-station />
            <!-- 老兵驿站end -->

            <!-- 老兵战史 -->
            <!-- components:components/annals -->
            <home-annals />
            <!-- 老兵战史end -->

            <!-- 老兵情怀 -->
            <!-- components:components/annals -->
            <home-senti />
            <!-- 老兵情怀end -->

            <!-- 老兵文化 -->
            <div class="list-main">
              <div class="list-head">
                <h3>老兵文化<span>Veteran culture</span></h3>
                <a href="/#/culture/on-tao/index">查看更多</a>
              </div>
              <div class="list-body">
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">名家讲坛</i>
                  </div>
                  <div class="list-body-text">
                    <h3>我国著名的战略学专家，金一南教授做客璧山干部大讲堂</h3>
                    <p>金一南是我国著名的战略学专家，全国模范教师，全军首届“杰出专业技术人才”获奖者，连续三届国防大学“杰出教授”，曾获中宣部“五个一工程”奖、国务院新闻办“中国国际新闻奖”、军队科技进步奖等...</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">名家讲坛</i>
                  </div>
                  <div class="list-body-text">
                    <h3>我国著名的战略学专家，金一南教授做客璧山干部大讲堂</h3>
                    <p>金一南是我国著名的战略学专家，全国模范教师，全军首届“杰出专业技术人才”获奖者，连续三届国防大学“杰出教授”，曾获中宣部“五个一工程”奖、国务院新闻办“中国国际新闻奖”、军队科技进步奖等...</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              <!-- 老兵文化-书画 -->
              <!-- components:components/paintings -->
              <home-paintings />
              <!-- 老兵文化-书画 end -->

              <div class="list-body">
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">老兵老兵网</i>
                  </div>
                  <div class="list-body-text">
                    <h3>汶川地震中军人救援的瞬间催人泪下，军民一家亲</h3>
                    <p>十年弹指一挥间，流走的是岁月，永驻的是精神。十年前汶川那场浩劫，过往的点点滴滴，回忆起来就会情不自禁流下眼泪，有悲伤，有感动。天灾无情人有情。2008年5月16日，消防战士在映秀抢救幸存者。</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="list-body">
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">思想大视野</i>
                  </div>
                  <div class="list-body-text">
                    <h3>汶川地震中军人救援的瞬间催人泪下，军民一家亲</h3>
                    <p>十年弹指一挥间，流走的是岁月，永驻的是精神。十年前汶川那场浩劫，过往的点点滴滴，回忆起来就会情不自禁流下眼泪，有悲伤，有感动。天灾无情人有情。2008年5月16日，消防战士在映秀抢救幸存者。</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">悠远的军号声</i>
                  </div>
                  <div class="list-body-text">
                    <h3>汶川地震中军人救援的瞬间催人泪下，军民一家亲</h3>
                    <p>十年弹指一挥间，流走的是岁月，永驻的是精神。十年前汶川那场浩劫，过往的点点滴滴，回忆起来就会情不自禁流下眼泪，有悲伤，有感动。天灾无情人有情。2008年5月16日，消防战士在映秀抢救幸存者。</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">军字一号</i>
                  </div>
                  <div class="list-body-text">
                    <h3>汶川地震中军人救援的瞬间催人泪下，军民一家亲</h3>
                    <p>十年弹指一挥间，流走的是岁月，永驻的是精神。十年前汶川那场浩劫，过往的点点滴滴，回忆起来就会情不自禁流下眼泪，有悲伤，有感动。天灾无情人有情。2008年5月16日，消防战士在映秀抢救幸存者。</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <!-- 老兵文化end -->

            <!-- 老兵风采 -->
            <!-- components:components/famous -->
            <home-famous />
            <!-- 老兵风采end -->
          </div>
        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">

            <!-- components:components/BbsTop -->
            <bbs-top />
            
            <!-- components:components/rightside -->
            <home-right-side />

            <!-- components:components/CaseStudies -->
            <case-studies />
            <!-- 成功案例end -->

            <!-- components:@components/Activities -->
            <activities />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
    <!-- <el-backtop>
      <div class="backtobox">
        <div>
          <el-popover
            placement="top-start"
            title="客服电话"
            trigger="hover"
            content="+86-24-23241999">
            <img slot="reference" src="@/assets/img/cservice.png" />
          </el-popover>
        </div>
        <div><img src="@/assets/img/backtop.png" /></div>
      </div>
    </el-backtop> -->
  </div>
</template>

<script>
console.log("Views: /home/index is loaded");

import HomeFocus from "@/views/ma/home/components/focus";
import HomeCoupon from "@/views/ma/home/components/coupon";
import HomeCourierStation from "@/views/ma/home/components/courier-station";
import HomeAnnals from "@/views/ma/home/components/annals";
import HomeSenti from "@/views/ma/home/components/sentiment";
import HomeFamous from "@/views/ma/home/components/famous";
import HomePaintings from "@/views/ma/home/components/paintings";
import HomeRightSide from "@/views/ma/home/components/rightside";
import Activities from "@/components/Activities";
import BbsTop from "@/components/BbsTop";
import CaseStudies from "@/components/CaseStudies";

// import axios from 'axios'
// import { getData, postData } from "@/api/common";
// import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomePage",
  components: {
    HomeFocus, // 焦点图
    HomeCoupon, // 优惠信息
    HomeCourierStation, // 老兵驿站
    HomeAnnals, // 老兵战史
    HomeSenti, // 情怀
    HomePaintings, // 文化-书画
    HomeFamous, // 风采n名企展播
    HomeRightSide,
    Activities,
    BbsTop,
    CaseStudies
  },
  data() {
    return {
      // visible: false
    };
  },
  computed: { },
  created: function() {
    this.$store.state.navactive = '/home/index';
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
/******* new home page ***************/
.el-row {
  margin-right: 0 !important;

  .el-col.el-col-17 {
    padding-right: 0 !important;
  }
  .el-col.el-col-7 {
    padding-right: 0 !important;
  }
}

.el-carousel--horizontal > .el-carousel__button {
    background-color: #e08714!important;
    opacity: 1;
}

/******* famous list */
.img-list-famous {
  display: inline-block;
  width: 228px;
  height: 400px;
  background: #edf1f4;
  margin-right: 7px;
  overflow: hidden;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  .img-list-famous-main {
    position: relative;
    width: 228px;
    height: 228px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 3px 0 0;
  }
  h3 {
    padding: 0 15px;
    margin: 10px 0;
  }
  span {
    font-size: 12px;
    font-weight: normal;
    color: #a0a0a0;
    margin: 0 15px;
  }
  p {
    text-align: left;
    margin: 5px auto;
    color: #787878;
    font-size: 0.8em;
    line-height: 1.5;
    padding: 0 15px;
    height: 56px;
    overflow: hidden;
  }
  span.famous-dict {
    display: block;
    width: 82px;
    height: 14px;
    background: url(~@/assets/img/famous-dict.png);
    float: right;
    margin: 10px 10px 0 0;
  }
}
.section-head {
  margin-bottom: 20px;

  .section-title {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      flex-grow: 7;
      text-align: center;
      list-style: none;
      cursor: pointer;
      border-right: 2px solid #d7d7d7;

      &:nth-last-child(1) {
        border-right: none;
      }
    }
  }
}

</style>
