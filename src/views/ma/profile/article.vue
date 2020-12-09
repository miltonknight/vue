<!-- 我的文章 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 内容 -->
          <div class="article-container">
            <div class="article-main">
              <div class="article-head">
                <h1>{{ ArticleDetail.title }}</h1>
                <p>{{ ArticleDetail.create_time }}</p>
              </div>
              <div class="article-body">
                <p v-html="ArticleDetail.content"></p>11111111111111
                <!-- <img src="@/assets/img/article.png" />
                <p>数据库中文章内容较少填入测试文本“史无前例新品大爆发”，在“2020天猫双11全球狂欢季”新闻发布会上，阿里巴巴副总裁、天猫平台营运事业部总经理家洛身后的大屏幕上打出了这样一行大字。根据内部估算，今年将有5亿用户在双11期间主动访问新品会场，他们将让30个新品的成交额过亿，1000个新品成交金额过千万。</p>
                <img src="@/assets/img/article2.png" />
                <p>当市场上有太多机会时，竞争比的是果敢与效率；但当市场趋于饱和时，竞争的重点就要回归到前瞻性视野和精细化运营。事实上，中国的互联网市场已经过了遍地是金、跑马圈地的粗放时代，巨头们的生存境况与它们对趋势的把控力息息相关，天猫小黑盒就充分体现了这一点。</p>
                <p>点赞数量：{{ ArticleDetail.good_count }}</p> -->

              </div>
            </div>
          </div>
          <!-- 内容 end -->

        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <profile-right />
            
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
console.log("View: /profile/article is loaded")

import ProfileRight from "./components/rightside-article";
import Activities from "@/components/Activities";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "ProfileArticle",
  components: {
    ProfileRight,
    Activities
  },
  data() {
    return {
      // article
      url: LaobingUrl.modular_articles,
      ArticleDetail: []
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token", "navactive"])
  },
  created: function() {
    this.fetchData();
    // console.log("navactive::::::" + this.$store.state.navactive);
    // this.$store.state.navactive = '/policy/index';
  },
  methods: { 
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              console.log("Get User Article detail Response:", data);
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
      // json post prop
      var params = {
        // 从url中获取文章id
        "article_id": this.$route.query.id,
        "sort_id": this.$route.query.sort_id,
        // uid用户token中获取
        // "uid": '0a44f30462e742879f5fbd15d2fda9e6'
        "uid": this.user_id
      };
      this.postDataFromUI(LaobingUrl.modular_articles, params)
        .then(response => {
          this.ArticleDetail = response;
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
