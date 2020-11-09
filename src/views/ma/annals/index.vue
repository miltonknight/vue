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
                <a href="/annals/index">查看更多</a>
              </div>
              <div class="list-head list-head-sub">
                版块分割部分
              </div>
              <div class="list-body">
                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/courier-station/artical?id=' + item.soldier_station_id" class="list-item"> -->
                <a v-for="item in ArticalList.list" :key="item.id" :href="'/annals/artical?id=' + item.article_id" class="list-item">
                  <div class="list-body-img">
                    <img :src="item.img_path" />
                    <i class="badge">{{item.sort_name}}</i>
                  </div>
                  <div class="list-body-text">
                    <h3>{{item.title}}</h3>
                    <p>{{item.introduction}}</p>
                    <div class="list-text-cate">
                      <span class="tip">{{item.sort_name}}</span>
                      <span class="time">
                        <i class="el-icon-time"></i>{{item.create_time}}
                      </span>
                    </div>
                  </div>
                </a>

                <!-- <pagination
                  v-show="total > 0"
                  :total="total"
                  :page.sync="listQuery.page"
                  :limit.sync="listQuery.limit"
                  @pagination="fetchData"
                /> -->

                <!-- <pagination
                  background
                  layout="prev, pager, next"
                  v-show="total > 0"
                  :total="total"
                  :page.sync="listQuery.page"
                  :limit.sync="listQuery.limit"
                  @pagination="fetchData"
                /> -->
                
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
import Pagination from "@/components/Pagination";
import axios from 'axios';
// import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Annals",
  components: {
    AnnalsFocus, // 焦点图
    AnnalsRightSide,
    Pagination
  },
  data() {
    return {
      //文章列表接口地址、接收数组
      url: LaobingUrl.modular_artical_list,
      ArticalList: [],
      // Pagination
      total: 100,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 2,
        page: 1,
        limit: 20
      }
    };
  },
  // computed: { },
  created: function() {
    const baseUrl = this.GLOBAL.basePath;
    const allUrl = baseUrl + this.url;
    console.log("http::::::::::"+allUrl);
    //json post prop
    let prop = {
      "sort_id":"2", //版块
      "page": 1,  //
      "limit": 10  //单页数量
    };
    // JSON.parse(prop);
    console.log("prop4list:::::"+prop)
    axios.post(allUrl, prop)
    // axios.post(allUrl, this.listQuery)
      .then(res => {
        //data属性是固定的用法,用于获取后台的实际数据
        this.ArticalList = res.data.data;
        console.log(res.data.data);
        //console.log("res.data::::::::"+res.data.data[0].srcPath);
        // this.total = res.data.data.total;
      }
    );
    // this.fetchData();
  },
  mounted() {
    // this.fetchData()
  },
  methods: { 
    // fetch Pagination data, init & set 
    // fetchData() {
    //   console.log("进来了啊！！！！！");
    //   this.listLoading = true;
    //   var page = {
    //     "sort_id":"2",
    //     page: this.listQuery.page,
    //     limit: this.listQuery.limit
    //   };
    //   this.$store
    //     // .dispatch(this.url, page)
    //     .dispatch("http://192.168.110.170:8181/article/pageArticleBySortId", page)
    //     .then(response => {
    //       const { code, msg, data } = response;
    //       this.total = data.total;
    //       this.list = data.list;
    //       this.listLoading = false;
    //     })
    //     .catch(error => {
    //       this.listLoading = false;
    //       this.$message({
    //         message: "操作失败",
    //         type: "success"
    //       });
    //     });
    // }
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
</style>
