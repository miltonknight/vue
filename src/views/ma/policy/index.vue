<!-- 老兵政策 -->
<template>
  <div>
    <div class="banner">
      <img src="@/assets/img/banner-policy.jpg" alt="">
    </div>
    
    <div class="policy-main">
      <el-tabs :tab-position="tabPosition" v-model="activeName" class="policy-tab" @tab-click="handleClick">
        <el-tab-pane label="权益维护" name="40">
          <div class="policy-header">权益维护</div>
          <div class="policy-body">
            <ul class="policy-list">
              <!-- <li><a href="">中华人民共和国222英雄烈士保护法</a><span><i class="el-icon-time"></i>2020-11-22</span></li> -->
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="退役安置" name="41">
          <div class="policy-header"><span name="48">军转干部安置</span> / <span name="49">退役士兵安置</span></div>
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="就业服务" name="42">
          <div class="policy-header">就业服务</div>
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="教育培训" name="43">
          <div class="policy-header">教育培训</div>
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="军休安置" name="44">
          <div class="policy-header"><span name="50">军队离退休干部服务管理</span> / <span name="51">无军籍职工安置</span></div>
          <!-- <div class="policy-header">军休安置</div> -->
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="优待抚恤" name="45">
          <div class="policy-header">优待抚恤</div>
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="英烈褒扬" name="46">
          <div class="policy-header">英烈褒扬</div>
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="双拥工作" name="47">
          <div class="policy-header">双拥工作</div>
          <div class="policy-body">
            <ul class="policy-list">
              <li v-for="item in ArticleList.list" :key="item.id">
                <a :href="'/#/policy/article?id=' + item.article_id + '&sort_id=' + item.sort_id">
                  {{ item.title }}
                </a>
                <span><i class="el-icon-time"></i>{{ item.create_time }}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
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
</template>

<script>
console.log("Views: /policy/index is loaded");
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Policy",
  components: {
    Pagination
  },
  data() {
    return {
      tabPosition: 'top',
      activeName: '40', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 40, // 版块id
        page: 1,
        limit: 10,
        role_flag: 0,
        search_input: ""
      },
      zwsj: false
    };
  },
  computed: { 
    ...mapGetters(["user_id", "access_token", "navactive"])
  },
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = '/policy/index';
    this.searchBySort(this.activeName);
  },
  mounted() {
    // console.log("this.$store.state.navactive：：：：：：：：：：：：：")
    // console.log(this.$store.state.navactive)
    // console.log(this.navselected)
    // this.$forceUpdate( this.$store.state.navactive )
   },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
      console.log("tab.name::::" + tab.name);
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
              else { 
                this.zwsj = false; // 修复数据与“暂无数据”共存bug
              }
              console.log("Get Policy List Response:", data);
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
