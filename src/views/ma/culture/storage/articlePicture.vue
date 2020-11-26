<!-- 老兵文化-老兵问道 -->
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
                <p><a href="">{{ ArticleDetail.writer }}writer</a> {{ ArticleDetail.create_time }}</p>
              </div>
              <div class="article-body">
                <img src="@/assets/img/picturelist.jpg" />
                <p>老兵老兵网  转采与2020年xx月xx日 xx时xx分xx秒</p>
                <p>图片来源：花瓣网</p>
              </div>

            </div>
          </div>
          <!-- 内容 end -->

          <!-- 新评论 -->
          <div class="new-comment-box">
            <div class="comment-head">
              <h3>
                <svg-icon icon-class="hdot" class-name="card-panel-icon" />参与评论
              </h3>
            </div>
            <div class="conment-body">
              <textarea id="" name="" cols="" rows="5" placeholder="元芳你这么看？"></textarea>
              <div class="text-btn">
                <button>提交评论</button>
                <span>0/1000</span>
              </div>
            </div>
            <p>请回复有价值的信息，无意义的评论将很快被删除，账号将被禁止发言。</p>
          </div>
          <!-- 新评论end -->

          <!-- 评论列表 -->
          <div class="comment-box">
            <div class="comment-head">
              <h3>
                <svg-icon icon-class="hdot" class-name="card-panel-icon" />评论区
              </h3>
            </div>
            <div class="conment-body">
              <dl class="comments">
                <dt>
                  <img src="@/assets/img/head-s.png" alt="">
                  <span>老兵老兵老王</span>
                  <span>5小时前</span>
                  <div class="reply"><svg-icon icon-class="heart" class-name="card-panel-icon" /><span>123</span><a href="">回复</a></div>
                </dt>
                <dd>这篇文章写得真是好极了，好破天际。让全国亿万老兵泪目！</dd>
                <dl class="sub_comments">
                  <dt>
                    <img src="@/assets/img/head-s.png" alt="">
                    <span>老兵老兵老王</span>
                    <span>5小时前</span>
                    <div class="reply"><svg-icon icon-class="heart" class-name="card-panel-icon" /><span>123</span><a href="">回复</a></div>
                  </dt>
                  <dd>这篇文章写得真是好极了，好破天际。让全国亿万老兵泪目！</dd>
                </dl>
                <dt>
                  <img src="@/assets/img/head-s.png" alt="">
                  <span>老兵老兵老王</span>
                  <span>5小时前</span>
                  <div class="reply"><svg-icon icon-class="heart" class-name="card-panel-icon" /><span>123</span><a href="">回复</a></div>
                </dt>
                <dd>这篇文章写得真是好极了，好破天际。让全国亿万老兵泪目！</dd>
                <dl class="sub_comments">
                  <dt>
                    <img src="@/assets/img/head-s.png" alt="">
                    <span>老兵老兵老王</span>
                    <span>5小时前</span>
                    <div class="reply"><svg-icon icon-class="heart" class-name="card-panel-icon" /><span>123</span><a href="">回复</a></div>
                  </dt>
                  <dd>这篇文章写得真是好极了，好破天际。让全国亿万老兵泪目！</dd>
                </dl>

              </dl>
            </div>
          </div>
          <!-- 评论列表end -->

        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <culture-right-side-article />

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
console.log("Views: /culture/storage/articlePainting is loaded");
import CultureRightSideArticle from "@/views/ma/culture/components/rightside-article";
import Activities from "@/components/Activities";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CultureArticle",
  components: {
    CultureRightSideArticle,
    Activities
  },
  data() {
    return {
      // article
      url: LaobingUrl.modular_articles,
      ArticleDetail: [],
      // like flag
      thumbup: true
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/culture/storage/index';
  },
  methods: { 
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              console.log("Get Culture on Tao Article Response:", data);
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
