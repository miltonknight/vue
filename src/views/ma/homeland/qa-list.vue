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
                <h3>常见问题解答<span>Q&A</span></h3>
              </div>
              <div class="list-body">
                <div class="list-serach">
                  <el-input v-model="qa_input" placeholder="输入您想要查询的问题" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search" @click="qaSearch"></el-button>
                  </el-input>
                </div>

                <a v-for="item in ArticleList.list" :key="item.id" class="qa-box" :href="'/#/homeland/qa-detail?id=' + item.article_id">
                  <h2><span>问</span>{{ item.title }}</h2>
                  <p v-html="item.content"></p>
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

            <!-- components:components/BbsTop -->
            <bbs-top />
            
            <!-- components:components/rightside -->
            <home-land-right-side />

            <!-- components:components/CaseStudy -->
            <case-studies />

            <!-- components:@components/Activities -->
            <activities />

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
console.log("Views: /homeland/qa-list is loaded");

import HomeLandFocus from "./components/focus";
import BbsTop from "@/components/BbsTop";
import HomeLandRightSide from "./components/rightside";
import Activities from "@/components/Activities";
import CaseStudies from "@/components/CaseStudies";
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomeLandQaList",
  components: {
    HomeLandFocus, // 焦点图
    Activities,
    Pagination,
    BbsTop,
    CaseStudies,
    HomeLandRightSide // 右侧
  },
  data() {
    return {
       // 文章列表接口地址、接收数组
      url: LaobingUrl.qa_lsit,
      ArticleList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        search_input: "",
        page: 1,
        limit: 10
      },
      qa_input: '',
      zwsj: false
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
              console.log("Get QA List Response:", data);
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
      this.postDataFromUI(this.url, this.listQuery)
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
    qaSearch() {
      this.listQuery.search_input = this.qa_input;
      this.fetchData();
    }
  }
};
</script>

<style lang="scss" scoped>
.qa-box {
  width: 100%;
  margin-bottom: 30px;
  display: block;
  max-height: 105px;
  overflow: hidden;
  
  h2 {
    font-size: 22px;
    line-height: 1.5;
    width: 100%;
    height: 33px;
    overflow: hidden;
    margin: 0;

    span {
      background: #e08714;
      color: #fff;
      padding: 2px;
      margin-right: 5px;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 10px 0;
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
