<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 焦点图 -->
          <!-- components:components/focus -->
          <home-land-focus />

          <div class="list-container">
            
            <!-- 全部法律 -->
            <div class="list-main">
              <div class="list-head">
                <h3>法律法规<span>Laws & Regulations</span></h3>
              </div>
              <div class="list-body">
                <div class="list-serach">
                  <el-input v-model="inputLaw" placeholder="输入您想要查询的法律条文" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                </div>

                <a class="law-cover" href="/#/homeland/law-detail">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>
                <a class="law-cover" href="/#/homeland/law/">
                  <img src="~@/assets/img/law-cover.jpg" />
                </a>

                <!-- 暂无数据 -->
                <div v-show="zwsj" class="zwsj">暂无数据</div>

                <pagination
                  v-show="total > 0"
                  background
                  layout="prev, pager, next"
                  :total="total"
                  :page.sync="listQuery.page"
                  :limit.sync="listQuery.limit"
                  @pagination="fetchData"
                />
                
              </div>
            </div>
            <!-- 全部法律end -->

          </div>
        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <home-land-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
    <el-backtop>
      <div class="backtobox">
        <div><img src="@/assets/img/cservice.png" /></div>
        <div><img src="@/assets/img/backtop.png" /></div>
      </div>
    </el-backtop>
  </div>
</template>

<script>
console.log("Views: /homeland/law-list is loaded");

import HomeLandFocus from "./components/focus"
import HomeLandRightSide from "./components/rightside"

import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomeLandLawList",
  components: {
    HomeLandFocus, // 焦点图
    Pagination,
    HomeLandRightSide // 右侧
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
        sort_id: 13, // 版块id
        page: 1,
        limit: 10
      },
      zwsj: false,
      inputLaw: ''
    };
  },
  computed: { },
  created: function() {
    // this.$store.state.navactive = '/homeland/law-list';
    this.fetchData();
  },
  methods: {
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
    }
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

/******* cover list */
.law-cover {
  display: block;
  width: 230px;
  height: 250px;
  overflow: hidden;
  float: left;
  margin: 0 15px 15px 0;
  border: 1px solid #f0f0f0;
  border-bottom: 4px solid #e08714;
  border-radius: 3px;

  &:nth-child(3n) {
    margin-right: 0;
  }
}
.list-serach {
  width: 80%;
  margin: 0 auto 20px;

  .el-button {
    background-color: #e08714!important;
    color: #fff!important;
    border: 1px solid #e08714!important;
  }
}
.el-backtop {
  left: 50% !important;
  bottom: 320px !important;
  margin-left: 542px !important;
  width: 50px;
  height: 100px;
  box-shadow: none !important;
  background: none !important; 

  &:hover {
    box-shadow: none !important;;
    background: none !important; 
  }
}
.backtobox {
  width: 50px;
  height: 100px;

  div {
    width: 50px;
    height: 50px;
    text-align: center;
    // border: 1px solid #e08714;
    border: 1px solid #f7e0c1;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: center;
    border-radius: 3px 3px 0 0;

    &:nth-last-child(1) {
      border-top: none;
      border-radius: 0 0 3px 3px;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
