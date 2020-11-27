<!-- 老兵文化-视频 -->
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
              <div class="video-play-box">
                <img src="@/assets/img/videoplay.jpg" />
              </div>

              <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
              <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>

              <div class="video-infos">
                <span>999999次播放</span>
                <span class="time">老兵老兵网<i class="el-icon-time"></i>2020-11-20 </span>
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
            <div class="side-main">
              <div class="side-head">
                <h3>
                  <svg-icon icon-class="hdot" class-name="card-panel-icon" />接下来播放
                </h3>
              </div>
              <div class="side-body">
                <!-- <a v-for="item in Article" :key="item.article_id" :href="'/#/case-studies/article?id=' + item.article_id" >
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img :src="item.small_img_path" />
                    </div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.create_time }}</span>
                  </div>
                </a> -->

                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>
                <a href="/">
                  <div class="slist-box">
                    <div class="slist-box-img">
                      <img src="~@/assets/img/side-demo5.png">
                    </div>
                    <p>接下来要播放的标题/名字</p>
                    <span>2020-09-11</span>
                  </div>
                </a>

              </div>
            </div>
            
          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("Views: /culture/article is loaded");
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CultureVideoArticle",
  components: { },
  data() {
    return {
      // article
      url: LaobingUrl.modular_articles,
      ArticleDetail: []
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
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              console.log("Get Culture on Tao Article Response:", data);
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
.article-container {

  .article-main {
    
    .video-infos {
      height: 20px;
      line-height: 20px;
      font-size: 14px;

      span.time {
        float: right;
        color: #a7a7a7;
        margin-right: 10px;

        i {
          margin: 0 10px;
        }
      }
    }
  }
}

</style>
