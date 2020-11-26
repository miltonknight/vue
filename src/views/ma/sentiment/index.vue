<!-- 老兵情怀 -->
<template>
  <div>
    <el-row>
      <div class="banner">
        <img src="@/assets/img/banner-sentiment.jpg" alt="">
      </div>
      <el-tabs v-model="activeName" class="sentiment-tab" @tab-click="handleClick">
        <el-tab-pane label="大病救助" name="first">
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
          孤儿救助
        </el-tab-pane>
        <el-tab-pane label="老兵捐赠" name="third">
          老兵捐赠
        </el-tab-pane>
        <el-tab-pane label="救助报道" name="fourth">
          救助报道
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
      switch (tab.name) {
        case "60":
          console.log("case 60::::::::::")
          this.books = "ture"
          this.videos = false
          this.musics = false
          this.paintings = false // 书画
          this.pictures = false
          break
        case "61":
          console.log("case 61::::::::::")
          this.videos = "ture"
          this.books = false
          this.musics = false
          this.paintings = false // 书画
          this.pictures = false
          break
        case "62":
          console.log("case 62::::::::::")
          this.books = false
          this.videos = false
          this.musics = "ture"
          this.paintings = false // 书画
          this.pictures = false
          break
        case "63":
          console.log("case 63::::::::::")
          this.books = false
          this.videos = false
          this.musics = false
          this.paintings = "ture" // 书画
          this.pictures = false
          break
        case "64":
          console.log("case 64::::::::::")
          this.books = false
          this.videos = false
          this.musics = false
          this.paintings = false // 书画
          this.pictures = "ture"
          break
      }
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
  
  .el-tabs__header {
    height: 40px ;
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
  margin: 0 20px 20px 0;
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

</style>
