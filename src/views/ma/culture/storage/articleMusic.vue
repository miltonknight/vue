<!-- 老兵文化-音乐 -->
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
              <div class="music-box">
                <div class="music-play-box">
                  <img src="@/assets/img/record.png">
                </div>
                <div class="music-stuff-box">
                  <h3>第五交响曲命运: 第一乐章</h3>
                  <p><span>演奏/演唱：</span>Ludwig van Beethoven</p>
                  <p><span>所属专辑：</span>贝多芬-西方乐圣</p>
                  <div class="music-progress">播放控件预留</div>
                  <p>纯音乐，无歌词</p>
                </div>
              </div>

              <div class="music-recommend">
                <h3>
                  <svg-icon icon-class="hdot" class-name="card-panel-icon" />歌词
                </h3>
              </div>

              <div class="music-lyric">
                <p>鱼缸旅馆 - 王源</p>
                <p>词：李格弟</p>
                <p>曲：陈建骐</p>
                <p>制作人：陈建骐 George Chen</p>
                <p>编曲：问题总部 It's your fault</p>
                <p>吉他：萧玮德 Wade Hsiao/黄子恩 John Huang</p>
                <p>键盘：吴昱陞 Sam Wu</p>
                <p>贝斯：陈建安 Jason Chen</p>
                <p>鼓：林子祈 Benny Lin </p>
                <p>和声编写：丁佳慧 Hana Lin/吴昱陞 Sam Wu</p>
                <p>和声：丁佳慧 Hana Lin</p>
                <p>录音师：吴昱陞 Sam Wu/萧玮德 Wade Hsiao/黄子恩 John Huang/徐威Aaron Xu（vocal）</p>
                <p>录音室：V-Studio（上海）/Gannnnn Studio（台北）</p>
                <p>混音师：吴昱陞 Sam Wu</p>
                <p>混音室：Gannnnn Studio</p>
                <p>母带后期混音师：孙仲舒 MT Sun</p>
                <p>你真的无法想象</p>
                <p>我就像是住在一个鱼缸</p>
                <p>鱼缸旅馆里该有的什么都有</p>
                <p>像一个小小的时空胶囊</p>
                <p>那些说爱我的人</p>
                <p>都可以清楚地追踪我</p>
                <p>不像鱼无视目光只有鱼自己</p>
                <p>我努力做他们热爱的我</p>
                <p>我与陌生的自己窃窃私语</p>
                <p>就像看到透明人一览无遗</p>
                <p>我没有退缩也没有闪躲</p>
                <p>当我流泪也没有人看穿</p>
                <p>那些不爱我的人</p>
                <p>也可以无谓地注视我</p>
                <p>看我在鱼缸里因无聊而崩溃</p>
                <p>我努力让他们也会爱我</p>
                <p>我与陌生的自己窃窃私语</p>
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
                  <svg-icon icon-class="hdot" class-name="card-panel-icon" />推荐音乐
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
                <ul class="music-rcmd-lsit">
                  <li>
                    <div class="music-order">1</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">2</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">3</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">4</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">5</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">6</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">7</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">8</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">9</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                  <li>
                    <div class="music-order">10</div>
                    <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                  </li>
                </ul>
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
console.log("./views/ma/culture/article is loaded~~~~~~~~~~~~~~~~~~~~");
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
  margin-bottom: 35px;

  .article-main {
    width: 100%;
    margin-bottom: 40px;

    h3 {
      font-size: 22px;
    }

    .music-box {
      clear: both;
      overflow: hidden;

      .music-play-box {
        width: 206px;
        height: 206px;
        float: left;
        margin-right: 50px;
      }
      .music-stuff-box {
        width: 464px;
        height: 206px;
        float: left;
        h3 {
          font-size: 24px;
          margin: 0;
        }
        p {
          text-align: left;

          span {
            color: #a8a8a8;
            margin: 0;
          }
        }
        .music-progress {
          height: 60px;
          width: 350px;
          border: 1px solid #ccc;
        }
      }
    }
    .music-recommend {
      width: 100%;
      height: 38px;
      line-height: 38px;
      margin-bottom: 10px;
      // border-bottom: 1px solid #e08714;

      h3 {
        color: #3b3b3b;
        font-size: 20px;
        margin: 0;

        svg {
          width: 16px;
          height: 18px;
          margin-right: 5px;
        }
      }
    }
    .music-lyric {
      font-size: 14px;
      margin: 20px 0 50px;
    }
  }
}
.music-rcmd-lsit {
  margin: 0;
  padding: 0;

  li {
    list-style:none;
    margin: 0;
    clear: both;
    overflow: hidden;
    background-color: #f8f7f8;

    &:nth-child(2n) {
      background-color: #fff;
    }

    div {
      float: left;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      font-size: 14px;
    }
  }
  .music-order {
    width: 40px;
    text-align: center;
  }
  .music-operate {
    width: 40px;
    text-align: center;
    padding: 2px 10px;

    i {
      font-size: 16px;
    }
  }
  .music-name {
    width: 260px;
  }
}
.new-comment-box {
  width: 100%;
  margin-bottom: 35px;

  .comment-head {
    width: 100%;
    height: 38px;
    line-height: 38px;
    margin-bottom: 10px;

    h3 {
      color: #3b3b3b;
      font-size: 20px;
      margin: 0;
    
      svg {
        width: 16px;
        height: 18px;
        margin-right: 10px;
      }
    }
  }
  .conment-body {
    border-radius: 3px;
    border: 2px solid #f5f7f9;

    textarea {
      width: 100%;
      resize: none;
      border: none;
      padding: 5px;
      font-size: 14px;

      &:focus {
        border: none;
        outline: none; 
      }
    }
    .text-btn {
      background: #f5f7f9;
      width: 100%;
      height: 46px;
      line-height: 46px;
      padding: 7px 0;
      clear: both;

      button {
        float: right;
        margin: 0 10px;
        width: 92px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        background: #e08714;
        color: #fff;
        border: none;
        border-radius: 3px;
        outline: none;
      }
      span {
        float: right;
        color: #a8a8a8;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
      }
    }
  }
  p {
    font-size: 14px;
    color: #a8a8a8;
  }
} 
.comment-box {
  width: 100%;
  margin-bottom: 35px;

  .comment-head {
    width: 100%;
    height: 38px;
    line-height: 38px;
    margin-bottom: 10px;

    h3 {
      color: #3b3b3b;
      font-size: 20px;
      margin: 0;
    
      svg {
        width: 16px;
        height: 18px;
        margin-right: 10px;
      }
    }
  }
  .comments, .sub_comments {
    font-size: 14px;

    dt {
      display: flex;
      color: #3b3b3b;

      img {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }
      span {
        margin-right: 10px;
       
        &:nth-last-child(1) {
          color: #a7a7a7;
        }
      }
      .reply {
        margin-left: auto;
        font-size: 12px;

        span {
          margin: 0 5px 0 2px;
        }
        a {
          color: #4285f4;
        }
      }
    }
    dd {
      word-break: break-all;
    }
  }
  .sub_comments {
    margin-left: 40px;
  }
}  
</style>
