<!-- 老兵情怀 -->
<template>
  <div>
    <el-row>
      <div class="banner">
        <img src="@/assets/img/banner-sentiment.jpg" alt="">
      </div>
      <el-tabs v-model="activeName" class="sentiment-tab" @tab-click="handleClick">
        <el-tab-pane label="大病救助" name="first">
          <a class="senti-box" href="/#/ma/sentiment/critical-detail">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

        </el-tab-pane>

        <el-tab-pane label="孤儿救助" name="second">
          <a class="senti-box" href="/#/ma/sentiment/orphan-detail">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span>进行中</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>

          <a class="senti-box">
            <div class="senti-img">
              <img src="@/assets/img/senti-img2.jpg" alt="">
            </div>
            <div class="senti-data">
              <div class="senti-info">
                <h3>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h3>
                <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
              </div>
              <div class="senti-status">
                <span class="end">已结束</span>2020-09-30  至  2020-09-30
              </div>
            </div>
          </a>
        </el-tab-pane>
        <el-tab-pane label="老兵捐赠" name="third">
          <div class="donate-box">
            <div class="item-total">
              目前已有<span>99999</span>个项目
            </div>
            <div class="donate-list">
              <a class="donate-item" href="/#/ma/sentiment/donate-detail">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>
              <a href="" class="donate-item">
                <img src="@/assets/img/donate.jpg" alt="">
                <div class="donate-info">
                  <h3>军用级航空母舰</h3>
                  <el-progress :percentage="90"></el-progress>
                  <div class="donate-status">
                    <div class="percent">
                      <p>90%</p>已达
                    </div>
                    <div class="money">
                      <p>￥90000000000已筹</p>已筹
                    </div>
                    <div class="days">
                      <p>43天</p>剩余
                    </div>
                  </div>
                </div> 
              </a>

            </div>

          </div>
        </el-tab-pane>
        <el-tab-pane label="救助报道" name="fourth">
          <div class="report-box">
            <!-- <a v-for="item in ret" :key="item.article_id" :href="'/#/annals/article?id=' + item.article_id" class="list-item"> -->
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>
            <a class="list-item" href="/#/ma/sentiment/report-detail">
              <div class="list-body-img">
                <img src="@/assets/img/report.jpg">
              </div>
              <div class="list-body-text">
                <h3>公正处等监督机构</h3>
                <p>公证机构是由国家专门设立的、依法行使国家公证职权、代表国家办理公证事务、进行公证证明活动的司法证明机构。公证处由国家设立，具有独立的主体地位，办理公证业务及相关的法律事务。</p>
                <div class="list-text-cate">
                  <span class="tip">公正督导</span>
                  <span class="time"><i class="el-icon-time"></i>2020-20-20</span>
                </div>
              </div>
            </a>

          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
console.log("Views: /sentiment/index is loaded");
// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Sentiment",
  components: {
    // Pagination
  },
  data() {
    return {
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 60, // 版块id
        page: 1,
        limit: 10
      }
    };
  },
  computed: { },
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = '/ma/sentiment/index';
  },
  mounted() { },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
      this.searchBySort(tab.name);
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true;
              }  
              console.log("Get Annals List Response:", data);
              console.log(msg);
              resolve(data);
            }
            // this.$message({
            //   message: msg,
            //   type: "success"
            // });
          })
          .catch(error => {
            console.log(error);
            // this.$message({
            //   message: error,
            //   type: "success"
            // });
          });
      });
    },
    fetchData() {
      this.listLoading = true;
      this.postDataFromUI(LaobingUrl.modular_article_list, this.listQuery)
        .then(response => {
          this.ArticleList = response;
          this.total = response.total;
          this.list = response.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });
    },
    searchBySort(sortId) {
      this.listQuery.sort_id = sortId;
      this.listQuery.page = 1;
      this.listQuery.limit = 10;
      this.fetchData();
    }
  }
};
</script>

<style lang="scss" >
.banner {
  margin: 0 auto 20px;

  img {
    width: 100%;
  }
}

.el-tabs--top.sentiment-tab {
  margin-bottom: 100px;
  
  .el-tabs__header {
    height: 40px ;
    margin: 0;
  }
  .el-tabs__item {
    width: 260px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;

    &:hover {
      color: #e08714;
    }
  }
  .el-tabs__item.is-active {
    color: #e08714;
  }
  .el-tabs__active-bar {
    background-color: #e08714;
  }
  .el-tabs__content {
    clear: both;
    overflow: hidden;
  }
}
.senti-box {
  width: 510px;
  height: 458px;
  overflow: hidden;
  float: left;
  margin: 20px 20px 0 0;
  border-radius: 3px;

  &:nth-child(2n) {
    margin-right: 0;
  }
  .senti-img {
    width: 510px;
    height: 290px;
    overflow: hidden;

    img {
      width: 510px;
      height: 290px;
    }
  }
  .senti-data {
    border: 1px solid #eee;
    border-top: none;
    border-radius: 3px;
    clear: both;
    overflow: hidden;

    .senti-info {
      padding: 20px 20px 0;

      h3 {
        margin: 0;
        color: #262626;
      }
      p {
        font-size: 14px;
        color: #a7a7a7;
        line-height: 1.8;
      }
    }
    .senti-status {
      text-align: right;
      margin: 0 20px;
      border-top: 1px solid #f5f7fa;
      padding: 15px 0;
      font-size: 14px;
      color: #a7a7a7;

      span {
        float: left;
        color: #fff;
        background: #e08714;
        padding: 3px 5px;
        position: relative;
        top: -3px;
      }
      span.end {
        background: #bfbfbf;
      }
    }
  }  
}
.donate-box {
  border: 1px solid #f0f0f0;
  border-top: none;
  min-height: 500px;

  .item-total {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9; 
    border-bottom: 1px solid #f0f0f0;
    color: #a5a5a5;
    text-align: right;
    padding-right: 15px;
    font-size: 14px;

    span {
      color: #323232;
      margin: 0 3px;
    }
  }
  .donate-list {
    padding: 20px;
    overflow: hidden;

    .donate-item {
      width: 319px;
      height: 332px;
      display: block;
      overflow: hidden;
      border-radius: 3px;
      float: left;
      margin: 0 20px 20px 0;
      background: #f9f9f9;

      &:nth-child(3n) {
        margin-right: 0;
      }

      img {
        width: 319px;
        height: 185px; 
      }
      .donate-info {
        padding: 25px 15px;

        h3 {
          font-size: 16px;
          margin: 0;
        }
        .el-progress {
          margin: 10px 0;

          .el-progress-bar__inner {
            background-color: #e08714;
          }
        }
        .donate-status {
          display: flex;

          .percent, .days {
            flex-grow: 1;
          }
          .money {
            flex-grow: 3;
            padding: 0 20px;
            margin: 0 20px;
            border-left: 1px solid #a5a5a5;
            border-right: 1px solid #a5a5a5;
          }
          .percent, .money, .days {
            font-size: 12px;
            color: #a5a5a5;
          }
          .percent p, .money p, .days p {
            font-size: 14px;
            color: #5e5e5e;
            margin: 5px 0;
          }
        }
      }
    }
  }
}
.report-box {
  overflow: hidden;

  .list-item {
    margin-top: 20px;
    clear: both;
    width: 100%;
    display: flex;
  }
  .list-body-img {
    position: relative;
    float: left;
    width: 220px;
    height: 145px;
    margin-right: 20px;

    img {
      width: 220px;
      height: 145px;
      border-radius: 3px 0 0 3px;
    }
  }
  .list-body-text {
    float: left;
    width: 100%;
    height: 145px;
    position: relative;
    padding: 10px 10px 10px 0;

    h3 {
      font-size: 1.4em;
      margin: 0 0 10px;
      height: 1.4em;
      line-height: 1.5;
      overflow: hidden;
    }
    p {
      color: #787878;
      line-height: 1.5;
      height: 42px;
      font-size: 14px;
      word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .list-text-cate {
      position: absolute;
      bottom: 10px;
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 14px;

      span.tip {
        color: #e08714;
      }
      span.time {
        float: right;
        color: #a7a7a7;
        margin-right: 10px;

        i {
          margin-right: 5px;
        }
      }
    }
  }

}
</style>
