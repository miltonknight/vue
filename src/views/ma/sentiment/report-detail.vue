<!-- 老兵情怀 - 救助报道 -->
<template>
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-sentiment.jpg" alt="">
    </div>
    <div class="report-box">
      <div class="report-top">
        <img src="@/assets/img/report-top.jpg" alt="">
      </div>
      <div class="report-main">
        <div class="report-head">
          <span>公正监督—公正处等监督机构公示</span>
        </div>
        <div class="report-body">
          <h3>公正监督—公正处等监督机构公示</h3>
          <div class="report-ttl"><span></span>活动时间</div>
          <p>2020年3月22日至2021年2月7日</p>
          <div class="report-ttl"><span></span>活动地点</div>
          <p>沈阳</p>
          <div class="report-ttl"><span></span>活动主题</div>
          <p>军号是一代代老兵的难忘记忆，军号就是命令，就是枕戈待旦，体现军人不忘初心，牢记使命，不畏艰难，甘于奉献的精神。不论战争年代还是和平时期，军号都凝结着军人的使命和担当。军号是信仰，军号是军魂，军号是血性，军号是本色。每一位老兵最熟悉的声音莫过于那一声声嘹亮的军号声，那一声声让人魂牵梦绕的军号声。老兵救助活动是一碗碗心灵的鸡汤，是一次次老兵回忆的旅程，是一首首老兵嘹亮的军歌，是一声声难忘的军号声。通过老兵救助活动抒发老兵友谊的大情怀，彰显老兵互助的人间大爱，具有直抵老兵身心的无穷力量。</p>
          <div class="report-ttl"><span></span>救助对象及申请条件</div>
          <p>（一）救助对象：</p>
          <p>全国的退役老兵及其他优抚对象，具体包括：退伍红军老战士（含西路红军老战士和红军失散人员）、军队离退休干部及退休士官、军队转业干部、复员干部、退役士兵、残疾军人、复员军人、烈士遗属、因公牺牲军人遗属、病故军人遗属。</p>

        </div>


      </div>




    </div>
  </el-row>
</template>

<script>
console.log("Views: /sentiment/report-detail is loaded");

import { LaobingUrl } from "@/api/laobing_url";
import { postData } from "@/api/common";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "SentimentReportDetail",
  components: { },
  data() {
    return {
      // article
      url: LaobingUrl.modular_articles,
      ArticleDetail: [],
      // like flag
      thumbup: true
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/ma/sentiment/index';
  },
  methods: { 
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              console.log("Get Annals Article Response:", data);
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
      // json post prop
      var params = {
        // 从url中获取文章id, sortid
        "article_id": this.$route.query.id,
        "sort_id": this.$route.query.sort_id,
        // uid用户token中获取
        // "uid": '0a44f30462e742879f5fbd15d2fda9e6'
        "uid": this.user_id
      };
      console.log("::::::::::::::::::::>>>>>>>>>");
      console.log(this.$route.path);
      // this.$route.path = '/annals/index'; // read only
      console.log("::::::::::::::::::::>>>>>>>>>");
      this.postDataFromUI(LaobingUrl.modular_articles, params)
        .then(response => {
          this.ArticleDetail = response;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  margin: 0 auto 20px;

  img {
    width: 100%;
  }
}
.report-top {
  margin-bottom: 20px;
  width: 100%;

  img {
    max-width: 100%;
  }
}
.report-main {
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  overflow: hidden;

  .report-head {
    background: #efc289;

    span {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      background: #e08714;
      display: inline-block;
      color: #262626;
      font-style: italic;
    }
  }
  .report-body {
    padding: 0px 20px;
    margin-bottom: 50px;

    .report-ttl {
      margin: 20px 0;
      font-size: 16px;
      color: #262626;

      span {
        padding: 5px;
        display: inline-block;
        background: #e08714;
        position: relative;
        // top: 1px;
        margin-right: 10px;
      }
    }
    p {
      padding: 0 20px;
        text-align: justify;  
    }
    img {
      display: block;
      margin: 30px auto;
      max-width: 100%;
    }
  }
}
</style>
