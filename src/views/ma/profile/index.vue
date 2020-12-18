<!-- XX的文章列表 -->
<template>
  <el-row :gutter="24">
    <!-- 左侧内容 -->
    <el-col :span="17">
      <div class="grid-content bg-purple">
        <div class="list-container">
          <div class="list-main">
            <div class="list-head">
              <h3>XXXX的文章<span>My Articles</span></h3>
            </div>
            <div class="list-body">
              <!-- 列表循环 -->
              <!-- <a v-for="item in ArticleList.list" :key="item.id" :href="'/courier-station/article?id=' + item.soldier_station_id" class="list-item"> -->
              <a v-for="item in ArticleList.list" :key="item.id" :href="'/#/profile/article?id=' + item.article_id" class="list-item">
                <div class="list-body-img">
                  <img :src="item.img_path">
                  <i class="badge">{{ item.sort_name }}</i>
                </div>
                <div class="list-body-text">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.introduction }}</p>
                  <div class="list-text-cate">
                    <span class="tip">{{ item.sort_name }}</span>
                    <span class="time">
                      <i class="el-icon-time"></i>{{ item.create_time }}
                    </span>
                  </div>
                </div>
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
          <!-- list end -->
        </div>

      </div>
    </el-col>

    <!-- 右侧内容 -->
    <el-col :span="7">
      <div class="grid-content bg-purple">
        <div class="side-section">
          
          <!-- components:components/rightside-article -->
          <profile-right />

          <!-- components:@components/Activities -->
          <activities />

        </div> 
      </div>
    </el-col>
    <!-- 右侧内容end -->
  </el-row>
   
</template>

<script>
console.log("Views: /profile/index is loaded");

import Pagination from "@/components/Pagination";
import ProfileRight from "./components/rightside-article";
import Activities from "@/components/Activities";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Profile",
  components: {
    Pagination,
    Activities,
    ProfileRight
  },
  data() {
    return {
      // 文章列表接口地址、接收数组
      url: LaobingUrl.user_article_list,
      ArticleList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        uid: '',
        page: 1,
        limit: 10
      },
      zwsj: false
    };
  },
  computed: { 
    ...mapGetters(["user_id", "access_token", "navactive"])
  },
  // created: function() {
  //   // this.$store.state.navactive = '/profile/index';
  // },
  mounted() {
    this.fetchData();
  },
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
              } else { 
                this.zwsj = false; // 修复数据与“暂无数据”共存bug
              }
              console.log("Get User Article List Response:", data);
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
      // uid用户token中获取
      // "uid": '0a44f30462e742879f5fbd15d2fda9e6'
      // 依赖解决后调用下面方法
      // this.listQuery.uid = this.$route.query.uid;
      this.listQuery.uid = "cd3a070bf1d14f1eba3f0b434ad57e4b";
      this.postDataFromUI(LaobingUrl.user_article_list, this.listQuery)
        .then(response => {
          this.ArticleList = response;
          // this.total = response.total;
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

<style lang="scss" >
.banner {
  margin: 0 auto 20px;

  img {
    width: 1040px;
  }
}

// .el-tabs--left.policy-tab {
.el-tabs.policy-tab {
  
  .el-tabs__header {
    // height: 400px;
    height: 50px;
  }
  .el-tabs__item {
    // width: 120px;
    width: 130px;
    height: 50px;
    line-height: 50px;
    background: #f5f7f9;
    text-align: center;
    font-size: 16px;
    padding: 0 20px !important;

    &:hover {
      color: #e08714;
    }
  }
  .el-tabs__item.is-active {
    color: #fff;
    background: #e08714;
    padding: 0 20px;
  }
  .el-tabs__active-bar {
    background-color: #e08714;
  }
  .el-tabs__content {
    // padding: 0 20px;
    padding: 20px 0;
  }
}
.policy-main {

  .policy-header {
    font-size: 24px;
    height: 30px;
    line-height: 30px;
    width: 100%;
    background-image: url('~@/assets/img/zcttl.png');
    background-repeat: no-repeat;
    padding-left: 40px;
    margin-bottom: 10px;
  }
  .policy-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 18px;
      height: 38px;
      line-height: 38px;
      color: #787878;
      border-bottom: 1px solid #d7d7d7;
      margin-bottom: 0px;

      span {
        float: right;
        font-size: 14px;
        color: #a7a7a7;

        i {
          margin-right: 5px;
        }
      }

      &:nth-last-child(1) {
        border-bottom: none;
      }
    }
  }
}

</style>
