<!-- 老兵文化-老兵问道 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- components:components/focus -->
          <culture-focus />
          
          <!-- list -->
          <div class="list-container">
            <div class="list-main">
              <div class="list-head list-head-sub-culture">
                <!-- <ul class="section-title">
                  <li class="is-active" @click="searchBySort()">老兵论道</li>
                  <li @click="searchBySort()">休闲养生</li>
                  <li @click="searchBySort()">医学前沿</li>
                  <li @click="searchBySort()">户外运动</li>
                </ul> -->
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="老兵论道" name="56"></el-tab-pane>
                    <el-tab-pane label="休闲养生" name="57"></el-tab-pane>
                    <el-tab-pane label="医学前沿" name="58"></el-tab-pane>
                    <el-tab-pane label="户外运动" name="59"></el-tab-pane>
                  </el-tabs>
                </template>
              </div>
              <div class="list-body">
                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticleList.list" :key="item.id" :href="'/courier-station/article?id=' + item.soldier_station_id" class="list-item"> -->
                <a v-for="item in ArticleList.list" :key="item.id" :href="'/#/culture/on-tao/article?id=' + item.article_id + '&sort_id=' + item.sort_id" class="list-item">
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
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <culture-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/culture/index is loaded~~~~~~~~~~~~~~~~~~~~");
import CultureFocus from "@/views/ma/culture/components/focus";
import CultureRightSide from "@/views/ma/culture/components/rightside"
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Culture",
  components: {
    CultureFocus, // 焦点图
    CultureRightSide,
    Pagination
  },
  data() {
    return {
      activeName: '56', // tab active
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
    this.$store.state.navactive = '/culture/on-tao/index';
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
      this.searchBySort(tab.name);
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

<style lang="scss" >

/******* new home page ***************/

.list-head-sub-culture {
  border-bottom: 1px solid #d7d7d7!important;
  margin-bottom: 30px!important;

  .section-title {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      flex-grow: 7;
      text-align: center;
      list-style: none;
      height: 38px;
      cursor: pointer;
    }
    li:hover, li.is-active {
      border-bottom: 3px solid #e08714;
    }
  }
}
.list-container .list-main .list-head {
  height: auto;
}
.list-head-sub-culture {
  .el-tabs__nav {
      display: flex;

    .el-tabs__item {
      width: 180px!important;
      flex-grow: 1;
      text-align: center;
      font-size: 16px;
    }
  }
  .el-tabs__item:hover {
    color: #e08714;
  }  
  .el-tabs__item.is-active {
    color: #e08714;
  }
  .el-tabs__active-bar {
    background-color: #e08714;
    height: 3px;
  }
  .el-tabs__item:hover {
    color: #e08714;
  }
}
</style>
