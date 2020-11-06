<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- components:components/focus -->
          <focus />

          <div class="list-container">
            
            <!-- components:components/coupon -->
            <home-coupon />

            <!-- 老兵驿站 -->
            <div class="list-main">
              <div class="list-head">
                <h3>老兵驿站<span>Military Memory</span></h3>
                <a href="/courier-station/index">查看更多</a>
              </div>
              <div class="list-body img-list-box">
                <div class="section-head">
                  <ul class="section-title">
                    <li class="is-active">老营房</li>
                    <li>老哨所</li>
                    <li>老故事</li>
                    <li>老家书</li>
                    <li>老军装</li>
                    <li>老连队</li>
                    <li>老照片</li>
                  </ul>
                </div>
                <a href="" class="img-list">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>老营房——大兴沟军营，我永久的怀念</span>
                  </div>
                  <p>军营还在，军人不见了。看不见引以为荣的“国防绿”，听不到铿锵有力的军力的军歌声力的军歌声歌声...</p>
                </a>
                <a href="" class="img-list">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>老营房——大兴沟军营，我永久的怀念</span>
                  </div>
                  <p>军营还在，军人不见了。看不见引以为荣的“国防绿”，听不到铿锵有力的军歌力的军歌声力的军歌声声...</p>
                </a>
                <a href="" class="img-list">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>老营房——大兴沟军营，我永久的怀念</span>
                  </div>
                  <p>军营还在，军人不见了。看不见引以为荣的“国防绿”，听不到铿锵有力的军歌声力的军歌声力的军歌声...</p>
                </a>
              </div>
            </div>
            <!-- 老兵驿站end -->

            <!-- 老兵战史 -->
            <div class="list-main">
              <div class="list-head">
                <h3>老兵战史<span>Veteran war history</span></h3>
                <a href="">查看更多</a>
              </div>
              <div class="list-body">
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">战史</i>
                  </div>
                  <div class="list-body-text">
                    <h3>中国有我！— 抗日英雄杨靖宇</h3>
                    <p>杨靖宇是在极端艰苦的条件下进行抗日斗争的。缺衣少食，在零下四十多度的严寒中，只能吃草破，树根，橡子面，粗涩硬冷，难以下咽。</p>
                    <div class="list-text-cate">
                      <span class="tip">老兵战史</span>
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">战例</i>
                  </div>
                  <div class="list-body-text">
                    <h3>
                      解放战争时期，一野、二野、三野、四野的总司令和政委都是谁？
                    </h3>
                    <p>解放战争时期，在我军转入战略反攻之际，1948年11月，将全军各部队按地名划分为四大野战军，即:西北野战军、中原野战军、华东野战军和东北野战军。</p>
                    <div class="list-text-cate">
                      <span class="tip">老兵战史</span>
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/list-img.png" />
                    <i class="badge">非军事行动</i>
                  </div>
                  <div class="list-body-text">
                    <h3>汶川地震中军人救援的瞬间催人泪下，军民一家亲</h3>
                    <p>十年弹指一挥间，流走的是岁月，永驻的是精神。十年前汶川那场浩劫，过往的点点滴滴，回忆起来就会情不自禁流下眼泪，有悲伤，有感动。天灾无情人有情。2008年5月16日，消防战士在映秀抢救幸存者。</p>
                    <div class="list-text-cate">
                      <span class="tip">老兵战史</span>
                      <span class="time">
                        <i class="el-icon-time" />2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <!-- 老兵战史end -->

            <!-- 老兵情怀 -->
            <div class="list-main">
              <div class="list-head">
                <h3>老兵情怀<span>Veteran feelings</span></h3>
                <a href="">查看更多</a>
              </div>
              <div class="list-body">
                <a href="" class="img-list slide">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>守护民族之光 — 老兵大病救助</span>
                  </div>
                </a>
              </div>
              <div class="list-body">
                <a href="" class="img-list">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>守护民族之光 — 老兵大病救助</span>
                  </div>
                  <p>军营还在，军人不见了。看不见引以为荣的“国防绿”，听不到铿锵有力的军力的军歌声力的军歌声歌声...</p>
                </a>
                <a href="" class="img-list">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>守护民族之光 — 老救助</span>
                  </div>
                  <p>军营还在，军人不见了。看不见引以为荣的“国防绿”，听不到铿锵有力的军歌力的军歌声力的军歌声声...</p>
                </a>
                <a href="" class="img-list">
                  <div class="img-list-main">
                    <img src="@/assets/img/list-img2.png" />
                    <span>守护民族之光 — 老兵大病救助</span>
                  </div>
                  <p>军营还在，军人不见了。看不见引以为荣的“国防绿”，听不到铿锵有力的军歌声力的军歌声力的军歌声...</p>
                </a>
              </div>
            </div>
            <!-- 老兵情怀end -->

            <!-- 老兵文化 -->
            <div class="list-main">
              <div class="list-head">
                <h3>老兵文化<span>Veteran culture</span></h3>
                <a href="">查看更多</a>
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

              <div class="list-body culture-list-box">
                <a href="" class="img-list nonebg">
                  <div class="img-list-main">
                    <img src="@/assets/img/9.png" />
                  </div>
                  <p>军旅书法家 王文杰 作品</p>
                </a>
                <a href="" class="img-list nonebg">
                  <div class="img-list-main">
                    <img src="@/assets/img/9.png" />
                  </div>
                  <p>军旅书法家 王文杰 作品</p>
                </a>
                <a href="" class="img-list nonebg">
                  <div class="img-list-main">
                    <img src="@/assets/img/9.png" />
                  </div>
                  <p>军旅书法家 王文杰 作品</p>
                </a>
              </div>

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
            <div class="list-main">
              <div class="list-head">
                <h3>老兵风采<span>Veteran presence</span></h3>
                <a href="">查看更多</a>
              </div>
              <div class="list-body">
                <a href="" class="img-list-famous">
                  <div class="img-list-main">
                    <img src="@/assets/img/r2.jpg" />
                  </div>
                  <h3>冷鹏飞</h3>
                  <span>全国战斗英雄 一等功臣</span>
                  <p>湖北浠水人，1933年1月出生。2017年7月28日，中央军委主席习近平签署命令：授予冷鹏飞</p>
                  <span class="famous-dict"></span>
                </a>
                <a href="" class="img-list-famous">
                  <div class="img-list-main">
                    <img src="@/assets/img/r1.jpg" />
                  </div>
                  <h3>阎肃</h3>
                  <span>著名艺术家 空政文工团创作员</span>
                  <p>河北保定人，1930年5月出生。一级编剧。2016年当选“感动中国2015年度人物”。2019年9获“最美奋斗者”个人称号。</p>
                  <span class="famous-dict"></span>
                </a>
                <a href="" class="img-list-famous">
                  <div class="img-list-main">
                    <img src="@/assets/img/r1.jpg" />
                  </div>
                  <h3>阎肃</h3>
                  <span>著名艺术家 空政文工团创作员</span>
                  <p>河北保定人，1930年5月出生。一级编剧。2016年当选“感动中国2015年度人物”。2019年9获“最美奋斗者”个人称号。</p>
                  <span class="famous-dict"></span>
                </a>
              </div>
            </div>
            <!-- 老兵风采end -->

            <!-- 企业展播 -->
            <div class="list-main">
              <div class="list-body">
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/11.png" />
                    <i class="badge">名企展播</i>
                  </div>
                  <div class="list-body-text">
                    <h3>华为“南泥湾”</h3>
                    <p>为了规避美国技术和含有美国技术的产品，华为高高举起南泥湾大旗，及时启动了“南泥湾项目”。在实现“去美化”的过程中，实现技术自给自足。在美国一次次的无情打压下...</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/12.png" />
                    <i class="badge">名企展播</i>
                  </div>
                  <div class="list-body-text">
                    <h3>麒麟将成绝唱？</h3>
                    <p>8月7日，华为消费者业务CEO余承东宣布，9月15日之后，世上再无华为麒麟芯片。余承东说，今年秋天发布的新一代旗舰机Mate40将搭载华为自己的麒麟芯片...</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
                <a href="" class="list-item">
                  <div class="list-body-img">
                    <img src="@/assets/img/13.png" />
                    <i class="badge">广告</i>
                  </div>
                  <div class="list-body-text">
                    <h3>麒麟将成绝唱？</h3>
                    <p>8月7日，华为消费者业务CEO余承东宣布，9月15日之后，世上再无华为麒麟芯片。余承东说，今年秋天发布的新一代旗舰机Mate40将搭载华为自己的麒麟芯片...</p>
                    <div class="list-text-cate">
                      <span class="time">
                        <i class="el-icon-time"></i>2020-10-26
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <!-- 企业展播end -->
        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <home-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/home/index is loaded~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
import Focus from "@/views/ma/home/components/focus"
import HomeCoupon from "@/views/ma/home/components/coupon"
import HomeRightSide from "@/views/ma/home/components/rightside"
// import axios from 'axios'
// import { getData, postData } from "@/api/common";
// import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomePage",
  components: {
    Focus, // 焦点图
    HomeCoupon, //优惠信息
    HomeRightSide
  },
  data() {
    return {
      //优惠信息接收数组
      // coupon: [],
      // url: LaobingUrl.index_coupon
    };
  },
  computed: { },
  created: function() {
    // const baseUrl = this.GLOBAL.basePath;

    // axios.get(baseUrl + this.url)
    //   .then(res => {
    //     //data属性是固定的用法,用于获取后台的实际数据
    //     this.coupon = res.data;
    //     console.log(res.data);
    //   }
    // );
  },
  methods: {},
  activated: function() {
    this.getCase()
  }
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
  width: 234px;
  height: 400px;
  background: #edf1f4;
  margin-right: 7px;
  overflow: hidden;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  .img-list-famous-main {
    position: relative;
    width: 234px;
    height: 234px;
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
