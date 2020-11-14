<!-- 老兵风采-名企展播 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 内容 -->
          <div class="artical-container">
            <div class="artical-main">
              <div class="artical-head">
                <h1>{{ ArticalDetail.title }}</h1>
                <p><a href="">{{ ArticalDetail.writer }}writer</a> {{ ArticalDetail.create_time }}   关注</p>
              </div>
              <div class="artical-body">
                <p v-html="ArticalDetail.content"></p>
                <!-- 以下内容添加真实数据后可删除 -->
                <p>老兵名人大辞典示例文章</p>
                <img src="@/assets/img/artical.png" />
                <p>数据库中文章内容较少填入测试文本“史无前例新品大爆发”，在“2020天猫双11全球狂欢季”新闻发布会上，阿里巴巴副总裁、天猫平台营运事业部总经理家洛身后的大屏幕上打出了这样一行大字。根据内部估算，今年将有5亿用户在双11期间主动访问新品会场，他们将让30个新品的成交额过亿，1000个新品成交金额过千万。</p>
                <img src="@/assets/img/artical2.png" />
                <p>当市场上有太多机会时，竞争比的是果敢与效率；但当市场趋于饱和时，竞争的重点就要回归到前瞻性视野和精细化运营。事实上，中国的互联网市场已经过了遍地是金、跑马圈地的粗放时代，巨头们的生存境况与它们对趋势的把控力息息相关，天猫小黑盒就充分体现了这一点。</p>
                <!-- 以下内容添加真实数据后可删除end -->
                <p>点赞数量：{{ ArticalDetail.good_count }}</p>
              </div>
              <div class="artical-foot">
                <div class="thumbup">
                  <div class="likebox" @click='likeFlag()'></div>
                  <p id="likeNum">123</p>
                  <p>好文章，需要你的鼓励</p>
                </div>
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
            <famous-enterprise-right-side />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/famous/enterprise/artical is loaded~~~~~~~~~~~~~~~~~~~~");
import FamousEnterpriseRightSide from "@/views/ma/famous/enterprise/components/rightside"
import { LaobingUrl } from "@/api/laobing_url";
import { postData } from "@/api/common";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "FamousEnterpriseArtical",
  components: {
    FamousEnterpriseRightSide
  },
  data() {
    return {
      // artical
      url: LaobingUrl.modular_articals,
      ArticalDetail: [],
      // like flag
      thumbup: true
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created: function() {
    this.fetchData();

    // set default likebox
    console.log("::::::" + this.thumbup);
    if(this.thumbup) {
      var boxObj = document.getElementsByClassName("likebox");
      boxObj.classList = "likebox is-active";
      console.log(boxObj)
      console.log("::::::应该加上了")
    }    
    console.log("::::::方法结束")
  },
  methods: { 
    // like func
    likeFlag() {
      var total;
      var _count = document.getElementById("likeNum");
      total = parseInt(_count.innerHTML);
      // console.log(total);

      var flag = event.target.className;
      // console.log(flag)
      var _flag = flag.match("is-active");
      // console.log(_flag);
      if (_flag != null) {
        // console.log("turn to gray");
        event.target.classList.remove("is-active");
        // total num -1
        total -= 1;
        _count.innerHTML = total;
      } else {
        // console.log("turn to red");
        event.target.classList.add("is-active");
        // total num +1
        total += 1;
        _count.innerHTML = total;
      }
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              console.log("Get Annals Artical Response:", data);
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
      // json post prop
      var params = {
        // 从url中获取文章id
        "article_id": this.$route.query.id,
        "sort_id": this.$route.query.sort_id,
        // uid用户token中获取
        // "uid": '0a44f30462e742879f5fbd15d2fda9e6'
        "uid": this.user_id
      };
      this.postDataFromUI(LaobingUrl.modular_articals, params)
        .then(response => {
          this.ArticalDetail = response;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.artical-container {
  margin-bottom: 35px;

  .artical-main {
    width: 100%;
    margin-bottom: 40px;

    .artical-head {
      width: 100%;
      font-size: 14px;
      margin-bottom: 40px;

      h1 {
        font-size: 30px;
        margin: 0 0 1em;
      }
      a {
        color: #4696a3;
        margin-right: 20px;
      }
    }
    .artical-body {
      width: 100%;
      margin-bottom: 40px;
      text-align: center;

      p {
        font-size: 16px;
        line-height: 1.5;
        text-align: left;
      }
      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }
    .artical-foot {
      width: 100%;

      .thumbup {
        width: 100%;
        height: 130px;
        text-align: center;
        font-size: 12px;
        .likebox {
          width: 73px;
          height: 73px;
          margin: 0 auto 20px;
          // background: url(../../../assets/img/like-gray.png);
          background: url(~@/assets/img/like-gray.png);
        }
        .likebox.is-active {
          background: url(~@/assets/img/like-red.png);
        }
        p {
          margin: 10px 0;
        }
      }
    }   
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
