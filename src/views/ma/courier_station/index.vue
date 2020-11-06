<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- components:components/focus -->
          <cs-focus />
          
          <!-- list -->
          <div class="list-container">
            <div class="list-main">
              <div class="list-head list-head-sub">
                <ul class="section-title">
                  <li class="is-active">老营房</li>
                  <li>老哨所</li>
                  <li>老故事</li>
                  <li>老家书</li>
                  <li>老军装</li>
                  <li>老连队</li>
                  <li>老照片</li>
                </ul>
              </div>
              <div class="list-body">
                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/courier-station/artical?id=' + item.soldier_station_id" class="list-item"> -->
                <a v-for="item in ArticalList.list" :key="item.id" :href="'/courier-station/artical?id=' + item.article_id" class="list-item">
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
            <cs-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/courier_station/index is loaded~~~~~~~~~~~~~~~~~~~~");
import CsFocus from "@/views/ma/courier_station/components/focus";
import Pagination from "@/components/Pagination";
import CsRightSide from "@/views/ma/courier_station/components/rightside"
import axios from 'axios';
// import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CourierStation",
  components: {
    CsFocus, // 焦点图
    Pagination,
    CsRightSide
  },
  data() {
    return {
      //文章列表接口地址、接收数组
      url: LaobingUrl.courier_station_artical_list,
      ArticalList: [],
      // Pagination
      // total: 0,
      // list: null,
      // listLoading: true,
      // listQuery: {
      //   type_id: 1,
      //   page: 1,
      //   limit: 10
      // }
    };
  },
  // computed: { },
  created: function() {
    // this.fetchData();
    const baseUrl = this.GLOBAL.basePath;
    const allUrl = baseUrl + this.url
    //json post prop
    let prop = {
      "sort_id":"2", //版块
      "page": 1,  //
      "limit": 10  //单页数量
    };
    axios.post(allUrl, prop)
      .then(res => {
        //data属性是固定的用法,用于获取后台的实际数据
        this.ArticalList = res.data.data;
        console.log(res.data.data);
        //console.log("res.data::::::::"+res.data.data[0].srcPath);
      }
    );
  },
  activated: function() {
    this.getCase()
  }
  // ,
  // methods: { }
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
