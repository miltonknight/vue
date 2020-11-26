<!-- 老兵战史 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- components:components/focus -->
          <annals-focus />
          
          <!-- list -->
          <div class="list-container">
            <div class="list-main">
              <div class="list-head">
                <h3>老兵战史<span>Veteran war history</span></h3>
              </div>
              <div class="list-head list-head-sub">
                <!-- @click="searchBySort()" -->
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="战史" name="first">
                      <div class="tab-boxes" @click="searchBySort(13)">
                        <img src="@/assets/img/annals1_1.png" />
                        <span>土地革命战争</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(14)">
                        <img src="@/assets/img/annals1_2.png" />
                        <span>抗日战争</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(16)">
                        <img src="@/assets/img/annals1_3.png" />
                        <span>解放战争</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(17)">
                        <img src="@/assets/img/annals1_4.png" />
                        <span>中印边境<br />自卫反击战</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(18)">
                        <img src="@/assets/img/annals1_5.png" />
                        <span>中苏珍宝岛<br />自卫反击战</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(19)">
                        <img src="@/assets/img/annals1_6.png" />
                        <span>对越自卫反击战</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(20)">
                        <img src="@/assets/img/annals1_7.png" />
                        <span>世界著名战役</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(21)">
                        <img src="@/assets/img/annals1_8.png" />
                        <span>走麦城</span>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="战例" name="second">
                      <div class="tab-boxes" @click="searchBySort(22)">
                        <img src="@/assets/img/annals1_1.png" />
                        <span>一野</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(23)">
                        <img src="@/assets/img/annals1_2.png" />
                        <span>二野</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(24)">
                        <img src="@/assets/img/annals1_3.png" />
                        <span>三野</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(25)">
                        <img src="@/assets/img/annals1_4.png" />
                        <span>四野</span>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="非战争军事行动" name="third">
                      <div class="tab-boxes" @click="searchBySort(26)">
                        <img src="@/assets/img/annals1_1.png" />
                        <span>抗震</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(27)">
                        <img src="@/assets/img/annals1_2.png" />
                        <span>抗洪</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(28)">
                        <img src="@/assets/img/annals1_3.png" />
                        <span>维和</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(29)">
                        <img src="@/assets/img/annals1_4.png" />
                        <span>抗疫</span>
                      </div>
                      <div class="tab-boxes" @click="searchBySort(30)">
                        <img src="@/assets/img/annals1_5.png" />
                        <span>抢险（灭火）</span>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </template>
              </div>
              <div class="list-body">
                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticleList.list" :key="item.id" :href="'/courier-station/article?id=' + item.soldier_station_id" class="list-item"> -->
                <a v-for="item in ArticleList.list" :key="item.id" :href="'/#/annals/article?id=' + item.article_id + '&sort_id=' + item.sort_id" class="list-item">
                  <div class="list-body-img">
                    <img :src="item.img_path" />
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
            <annals-right-side />

            <!-- components:@components/Activities -->
            <activities />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/annals/index is loaded~~~~~~~~~~~~~~~~~~~~");
import AnnalsFocus from "@/views/ma/annals/components/focus";
import AnnalsRightSide from "@/views/ma/annals/components/rightside"
import Activities from "@/components/Activities";
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Annals",
  components: {
    AnnalsFocus, // 焦点图
    AnnalsRightSide,
    Pagination,
    Activities
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
        sort_id: 13, // 版块id
        page: 1,
        limit: 10
      },
      zwsj: false
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/annals/index';
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

<style lang="scss">

/******* new home page ***************/
.list-head-sub {
  border-bottom: 1px solid #d7d7d7!important;

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
.list-head-sub {
  .el-tabs__nav {
      display: flex;

    .el-tabs__item {
      width: 240px!important;
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
  .el-tabs__content {
  
    .tab-boxes {
      width: 172px;
      height: 85px;
      margin: 0 10px 10px 0;
      position: relative;
      float: left;
      cursor: pointer;

      img {
        width: 172px;
        height: 85px;
      }

      span {
        font-size: 20px;
        line-height: 1.4;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: 0.5);
        color: #fff;
        position: absolute;
        top: 0;
        display: flex;
        /*实现垂直居中*/
        align-items: center;
        /*实现水平居中*/
        justify-content: center;
        text-align: center;
      }
    }
    .tab-boxes:nth-child(4n) {
      margin-right: 0;
    }
  }
}
</style>
