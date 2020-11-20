<!-- 老兵风采-名人大辞典 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- list -->
          <div class="list-container">
            <div class="list-main">
              <div class="list-head">
                <h3>老兵名人大辞典<span>The Veteran's Dictionary</span></h3>
              </div>
              <div class="list-head list-head-sub-famous">
                <!-- <ul class="section-title">
                  <li class="is-active" @click="searchBySort(35)">老兵典型模范</li>
                  <li @click="searchBySort(36)">老兵科学家</li>
                  <li @click="searchBySort(37)">老兵艺术家</li>
                  <li @click="searchBySort(38)">老兵企业家</li>
                </ul> -->
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="老兵典型模范" name="35"></el-tab-pane>
                    <el-tab-pane label="老兵科学家" name="36"></el-tab-pane>
                    <el-tab-pane label="老兵艺术家" name="37"></el-tab-pane>
                    <el-tab-pane label="老兵企业家" name="38"></el-tab-pane>
                  </el-tabs>
                </template>
              </div>
              <div class="list-body">
                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/courier-station/artical?id=' + item.soldier_station_id" class="list-item"> -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/#/famous/people/artical?id=' + item.article_id" class="list-item">
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
                </a> -->

                <a v-for="item in ArticalList.list" :key="item.id" :href="'/#/famous/people/artical?id=' + item.article_id + '&sort_id=' + item.sort_id" class="img-list-famous">
                  <div class="img-list-main">
                    <img :src="item.img" />
                  </div>
                  <h3>{{ item.name }}</h3>
                  <span v-for="honour in item.honour_list" :key="honour">{{ honour }}</span>
                  <p>{{ item.introduction }}</p>
                  <span class="famous-dict"></span>
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
            <famous-people-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/famous/people/index is loaded~~~~~~~~~~~~~~~~~~~~");
import FamousPeopleRightSide from "@/views/ma/famous/people/components/rightside"
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "FamousPeople",
  components: {
    FamousPeopleRightSide,
    Pagination
  },
  data() {
    return {
      activeName: '35', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.famous_people,
      ArticalList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 35, // 版块id
        page: 1,
        limit: 12
      },
      zwsj: false
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
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
            const { code, msg, data } = response;
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
      this.postDataFromUI(LaobingUrl.famous_people, this.listQuery)
        .then(response => {
          this.ArticalList = response;
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
.el-row {
  margin-right: 0 !important;

  .el-col.el-col-17 {
    padding-right: 0 !important;
  }
  .el-col.el-col-7 {
    padding-right: 0 !important;
  }
}

.list-head-sub-famous {
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

.list-head-sub-famous {
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
.list-head-sub-famous {
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
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }
}
/******* famous list */
.img-list-famous {
  display: inline-block;
  width: 229px;
  height: 400px;
  background: #edf1f4;
  margin: 0 10px 10px 0;
  overflow: hidden;

  &:nth-child(3n) {
    margin-right: 0;
  }

  .img-list-famous-main {
    position: relative;
    width: 229px;
    height: 229px;
  }
  img {
    width: 229px;
    height: 229px;
    border-radius: 3px 3px 0 0;
  }
  h3 {
    padding: 0 15px;
    margin: 10px 0;
    height: 22px;
    width: 100%;
    overflow: hidden;
  }
  span {
    font-size: 12px;
    font-weight: normal;
    color: #a0a0a0;
    margin: 0 0 0 15px;
  }
  p {
    text-align: left;
    margin: 5px auto;
    color: #787878;
    font-size: 0.8em;
    line-height: 1.5;
    padding: 0 15px;
    height: 56px;
    overflow: hidden;
  }
  span.famous-dict {
    display: block;
    width: 82px;
    height: 14px;
    background: url(~@/assets/img/famous-dict.png);
    float: right;
    margin: 10px 10px 0 0;
  }
}
</style>
