<!-- 成功案例 -->
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
                <h3>成功案例<span>Successful Cases</span></h3>
              </div>
              <div>
                <!-- components:components/focus -->
                <case-studies-focus />
              </div>
              <div class="list-body">
                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/courier-station/artical?id=' + item.soldier_station_id" class="list-item"> -->
                <a v-for="item in ArticalList.list" :key="item.id" :href="'/#/case-studies/artical?id=' + item.article_id" class="list-item">
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

                <pagination
                  background
                  layout="prev, pager, next"
                  v-show="total > 0"
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
            <case-studies-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/case-studies/index is loaded~~~~~~~~~~~~~~~~~~~~");
import CaseStudiesFocus from "@/views/ma/case-studies/components/focus";
import CaseStudiesRightSide from "@/views/ma/case-studies/components/rightside"
import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CaseStudies",
  components: {
    CaseStudiesFocus, // 焦点图
    CaseStudiesRightSide,
    Pagination
  },
  data() {
    return {
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_artical_list,
      ArticalList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 32, // 版块id
        page: 1,
        limit: 10
      }
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
  },
  mounted() {
  },
  methods: { 
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              console.log("Get Case-Studies List Response:", data);
              resolve(data);
            }
            // this.$message({
            //   message: msg,
            //   type: "success"
            // });
          })
          .catch(error => {
            console.log(error);
            this.$message({
              message: error,
              type: "success"
            });
          });
      });
    },
    fetchData() {
      this.listLoading = true;
      // json post prop
      // this.listQuery.page = this.listQuery.page;
      // this.listQuery.limit = this.listQuery.limit;
      // this.postDataFromUI(LaobingUrl.modular_artical_list, params)
      this.postDataFromUI(LaobingUrl.modular_artical_list, this.listQuery)
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
