<!-- 创就业 -->
<template>
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-job.jpg" alt="">
    </div>
    <div class="job-box">
      <div class="job-main">
        <div class="job-detail">
          <h1>苏家屯区 | 二手车金融销售代表</h1>
          <p>苏家屯区 | 二手车金融销售代表</p>
          <div class="tips">
            <span>五险一金</span> <span>交通补助</span> <span>话补</span>
          </div>
          <div class="rules">
            招10人    |    学历不限    |    经验不限
          </div>
          <div class="position">
            沈阳 - 沈河 - 北文萃路沈阳沈河区文萃路58号<a href="">查看地图</a>
          </div>

          <div class="job-pay"><span>6000-9000</span>元/月</div>
          <div class="job-apply">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" /> 申请职位
            </el-button>
          </div>
        </div>
        <!-- <div class="job-money">
        </div> -->

      </div>
      
      <div class="job-main">
        <div class="job-head">
          <span>服务内容</span>
        </div>
        <div class="job-body">
          <h3>职位描述</h3>
          <p>一、岗位要求：</p>
          <p>1、年龄20-40岁优先（周岁）未满19周岁无法办理入职暂不考虑</p>
          <p>2、学历不限（高中以上学历优先录取）</p>
          <p>2、性格开朗，有较好的沟通力、表达力和亲和力</p>
          <p>3、热爱销售工作，责任心强，有良好的服务意识，喜欢挑战高薪</p>
          <p>二、其他</p>
          <p>1、工作时间：8:20-17:30，月休4天</p>
          <p>2、底薪3000-5000+高提成+组长额外提成1%-5%</p>
          <p>3、节假日公司福利+五险+定期团建+海外游+现金奖+高提点</p>
          <p>4. 租赁佣金秒结，租赁提点33%，联动现金奖励拿到你手软。万莲 五爱街 五爱市场 小南 小西 新立堡东街 一经 朱剪炉 中街 正阳 展览馆 长青</p>
          <p>皇姑 大东 铁西 于洪 沈北新区 苏家屯 浑南新区 沈阳周边</p>
          <p>联系我时，请说是在老兵老兵网看到的，谢谢！</p>
          <h3>公司介绍</h3>
          <p>沈阳市浑南区金江房产信息服务部隶属于芒果不动产下属门店</p>
          <p>芒果集团成立于2003年9月，是中国房产经纪机构100强品牌企业，中国房地产经纪协会会员单位。地产经纪业务是公司的核心，芒果集团是辽沈*家置业顾问持证上岗的房地产经纪机构、辽沈*家发展加盟店的房地产经纪机构。</p>
          <p>芒果集团的核心业务是地产经纪，芒果集团是辽沈置业顾问持证上岗的房地产经纪机构、辽沈发展加盟店的房地产经纪机构。</p>
        </div>
      </div>
    </div>
  </el-row>
</template>

<script>
console.log("Views: /jobs/job-detail is loaded");

import { LaobingUrl } from "@/api/laobing_url";
import { postData } from "@/api/common";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "JobsDetail",
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
    this.$store.state.navactive = '/ma/home/index';
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
.job-main {
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;

  .job-detail {
    padding: 20px;
    position: relative;

    h1 {
      font-size: 30px;
      margin: 0 0 20px;
    }
    p {
      margin: 0 0 20px;
    }
    .tips {
      margin: 0 0 20px;

      span {
        font-size: 12px;
        color: #e08714;
        background: #f6fcff;
        padding: 2px 5px;
        margin-right: 20px;
      }
    }
    .rules {
      font-size: 14px;
      margin: 0 0 20px;
    }
    .position {
      color: #333;
      font-size: 14px;

      a {
        margin-left: 20px;
        color: #e08714;
      }
    }
    .job-pay {
      position: absolute;
      top: 20px;
      right: 20px;
      color: #e08714;
      font-size: 18px;

      span {
        font-size: 30px;
        margin-right: 10px;
        font-weight: bold;
      }
    }
    .job-apply {
      position: absolute;
      bottom: 20px;
      right: 20px;

      .el-button {
        width: 240px;
        background: #e08714;
        font-size: 30px;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
  .job-head {
    background: #efc289;

    span {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      background: #e08714;
      display: inline-block;
      color: #fff;
      font-size: 24px;
    }
  }
  .job-body {
    padding: 0px 20px;
    margin-bottom: 50px;

    p {
      padding: 0 20px;
      text-align: justify;  
      line-height: 1.5;
      margin: 10px 0;
    }
    img {
      display: block;
      margin: 30px auto;
      max-width: 100%;
    }
  }
}
</style>
