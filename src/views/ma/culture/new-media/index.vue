<!-- 老兵文化-新媒体矩阵 -->
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
                <h3>新媒体矩阵<span>New Media</span></h3>
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
            <culture-right />

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
console.log("Views: /culture/new-media/index is loaded");
import CultureRight from "@/views/ma/culture/components/right";
import Activities from "@/components/Activities";
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CultureNewMedia",
  components: {
    CultureRight,
    Activities,
    Pagination
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
    this.$store.state.navactive = '/culture/new-media/index';
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

<style lang="scss" >

/******* new home page ***************/

</style>
