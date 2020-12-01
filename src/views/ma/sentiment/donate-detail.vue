<!-- 老兵情怀 - 捐赠众筹 -->
<template>
  <!-- <div> -->
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-sentiment.jpg" alt="">
    </div>
    <div class="donate-main">
      <div class="donate-top">
        <div class="donate-cover">
          <img src="@/assets/img/donate-top.jpg" alt="">
        </div>
        <div class="donate-info">
          <h1>正规军用级航母</h1>
          <p>已筹到</p>
          <div class="donate-total">
            <span>￥</span>90,000,000,000
          </div>
          <el-progress :percentage="90"></el-progress>
          <div class="donate-progress">
            <span>当前进度90%</span>230,000,000名支持者  
          </div>   
          <p>此项目必须在<span>2020年12月31日</span>前得到<span>￥100,000,000,000</span>的支持才可成功！ 剩余<span>43</span>天！</p>
        </div>
      </div>

      <el-row :gutter="24">
        <!-- 左侧内容 -->
        <el-col :span="17">
          <div class="grid-content bg-purple">
            <div class="donate-content">
              <div class="donate-head">项目介绍</div>
              <div class="donate-body">
                <div class="donate-ttl"><span></span>航母简介</div>
                <p>一架航母价格</p>
                <p>以中国的辽宁级航母为例</p>
                <p>336313431303231363533e4b893e5b19e31333365653934标准，其满载6万吨，加上舰载机，价格如下：</p>
                <p>1、卡31预警机，中国购买了9架，折合10亿美元。 </p>
                <p>2、歼-15舰载机，舰上需要26架，全部加上训练用舰载机，至少需要40架，其价格至少1亿美元一架。（按照苏35约1亿美元，F16大约0.6亿美元推算）</p>
                <p>3、卡28反潜机，这个需要20架，就算5000万一架，也需要10亿美元。航母不排除用直9替代卡28可能。这样能更便宜点。直9大约2000万（估计可能用直19、直20，直20一点也不便宜）。</p>
                <p>4、舰体（电子仪器、武器设备、动力设备）：按照现代级（8000吨）7亿和052C（7500吨）6-7亿的标准，辽宁号6万吨舰体，至少需要8.75*6=52亿。</p>
                <img src="@/assets/img/ship.jpg" alt="">
              </div>
            </div>
          </div>
        </el-col>
        <!-- 右侧内容 -->
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="donate-side">
              <div class="side-ttl">
                ￥1 <span>23000名支持者</span>
              </div>
              <div class="side-body">
                <p>不需要给回报，选择此项，项目成功后发起人将不会给您发送回报</p>
                <el-button type="warning">支持 ￥1</el-button>
              </div>
            </div>
            <div class="donate-side">
              <div class="side-ttl">
                ￥99 <span>23000名支持者</span>
              </div>
              <div class="side-body">
                <p>不需要给回报，选择此项，项目成功后发起人将不会给您发送回报</p>
                <el-button type="warning">支持 ￥99</el-button>
              </div>
            </div>
            <div class="donate-side">
              <div class="side-ttl">
                ￥299 <span>23000名支持者</span>
              </div>
              <div class="side-body">
                <p>不需要给回报，选择此项，项目成功后发起人将不会给您发送回报</p>
                <el-button type="warning" disabled>筹款结束</el-button>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
        
    </div>
  </el-row>
  <!-- </div> -->
</template>

<script>
console.log("Views: /sentiment/donate-detail is loaded");

// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "SentimentDonateDetail",
  components: {
    // Pagination
  },
  data() {
    return {
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
    border-radius: 3px;
  }
}
.donate-main {

  .donate-top {
    clear: both;
    overflow: hidden;
    border: 1px solid #f0f0f0;
    margin-bottom: 20px;

    .donate-cover {
      width: 600px;
      height: 325px;
      overflow: hidden;
      float: left;
      border-radius: 3px;

      img {
        width: 600px;
        height: 325px;
      }
    }
    .donate-info {
      padding: 20px;
      color: #262626;
      width: 438px;
      float: left;
      height: 325px;
      overflow: hidden;

      h1 {
        margin: 0 0 25px;
      }
      p {
        line-height: 1.5;
        
        span {
          color: #e08714
        }
      }
      .donate-total {
        font-size: 40px;
        margin: 20px auto;
        
        span {
          font-size: 18px;
          margin-right: 20px;
        }
      }
      .el-progress-bar__inner {
        background-color: #e08714;
      }
      .donate-progress {
        font-size: 14px;
        text-align: right;
        margin: 20px 0;
        font-weight: bold;

        span {
          color: #e08714;
          float: left;
        }
      }
    }
  }
  .donate-content {
    width: 100%;
    min-height: 400px;
    border-radius: 3px;
    border: 1px solid #f0f0f0;

    .donate-head {
      height: 50px;
      line-height: 50px;
      background: #f9f9f9;
      padding: 0 20px;
      border-bottom: 1px solid #f0f0f0;
    }
    .donate-body {
      padding: 0px 20px;
      margin-bottom: 50px;

      .donate-ttl {
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
  .donate-side {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #f0f0f0;
    padding: 0 20px 20px;
    margin-bottom: 20px;

    .side-ttl {
      height: 50px;
      line-height: 50px;
      background: #fefefe;
      border-bottom: 1px solid #f0f0f0;

      span {
        float: right;
        font-size: 12px;
        color: #666;
      }
    }
    .side-body {

      p {
        font-size: 12px;
        color: #666;
        line-height: 2;
        margin: 20px 0;
      }
      .el-button {
        background: #e08714;
        color: #fff;
        font-size: 16px;
        width: 100%;
      }
      .el-button[disabled] {
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }  
    }
  } 
}
</style>
