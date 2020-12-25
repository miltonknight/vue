<!-- 老兵文化-比赛活动 -->
<template>
  <el-row>
    <div class="item-sort">
      活动筛选：<span>全部时间</span><span>全部状态</span>
    </div>

    <div class="item-main">
      <a class="item-box" href="/#/culture/competition/detail">
        <div class="item-img">
          <img src="http://www.lblbsy.com:2020/static/img/competitions-top.c3c6fc73.jpg" alt="">
        </div>
        <div class="item-data">
          <div class="item-info">
            <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
            <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
          </div>
          <div class="item-status">
            <span>进行中</span>2020-09-30  至  2020-09-30
          </div>
        </div>
      </a>
      <a class="item-box" href="/#/culture/competition/detail">
        <div class="item-img">
          <img src="http://www.lblbsy.com:2020/static/img/competitions-top.c3c6fc73.jpg" alt="">
        </div>
        <div class="item-data">
          <div class="item-info">
            <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
            <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
          </div>
          <div class="item-status">
            <span>进行中</span>2020-09-30  至  2020-09-30
          </div>
        </div>
      </a>
      <a class="item-box" href="/#/culture/competition/detail">
        <div class="item-img">
          <img src="http://www.lblbsy.com:2020/static/img/competitions-top.c3c6fc73.jpg" alt="">
        </div>
        <div class="item-data">
          <div class="item-info">
            <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
            <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
          </div>
          <div class="item-status">
            <span>进行中</span>2020-09-30  至  2020-09-30
          </div>
        </div>
      </a>
      <a class="item-box" href="/#/culture/competition/detail">
        <div class="item-img">
          <img src="http://www.lblbsy.com:2020/static/img/competitions-top.c3c6fc73.jpg" alt="">
        </div>
        <div class="item-data">
          <div class="item-info">
            <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
            <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
          </div>
          <div class="item-status">
            <span>进行中</span>2020-09-30  至  2020-09-30
          </div>
        </div>
      </a>
      <a class="item-box" href="/#/culture/competition/detail">
        <div class="item-img">
          <img src="http://www.lblbsy.com:2020/static/img/competitions-top.c3c6fc73.jpg" alt="">
        </div>
        <div class="item-data">
          <div class="item-info">
            <h3>《难忘军号声》— 老兵老兵网2020年老兵救助第N期</h3>
            <p>这是甲子光年的年度最重磅峰会，旨在站在当下时间节点，围绕中国科技产业化、产业科技化发表出趋势判断，传达思考和观点。</p>
          </div>
          <div class="item-status">
            <span>进行中</span>2020-09-30  至  2020-09-30
          </div>
        </div>
      </a>
    </div>
    
  </el-row>
</template>

<script>
console.log("Views: /culture/competition/index is loaded");

// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CultureCompetition",
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
        sort_id: 56, // 版块id
        page: 1,
        limit: 10
      },
      zwsj: false
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/culture/competition/index';
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true
              }  
              console.log("Get Annals List Response:", data);
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

<style lang="scss" scope>
.item-sort {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #f5f7f9;
  margin-bottom: 20px;
  color: #787878;
  padding: 0 45px;

  span {
    margin-left: 20px;
  }
}
.item-box {
  width: 510px;
  height: 458px;
  overflow: hidden;
  float: left;
  margin: 0 20px 20px 0;
  border-radius: 3px;

  &:nth-child(2n) {
    margin-right: 0;
  }
  .item-img {
    width: 510px;
    height: 290px;
    overflow: hidden;

    img {
      width: 510px;
      height: 290px;
    }
  }
  .item-data {
    border: 1px solid #eee;
    border-top: none;
    border-radius: 3px;
    clear: both;
    overflow: hidden;

    .item-info {
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
    .item-status {
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
