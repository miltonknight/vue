<!-- 老兵家园-问答 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 内容 -->
          <div class="article-container">
            <div class="article-main qa">
              <div class="article-head">
                <h2><span>问</span>退役军人在遇到权益被侵害时，可依据哪些法律进行维权？</h2>
              </div>
              <div class="article-body">
                <div class="answer"><span class="orange">答</span><a class="blue">张炜</a> · 2020年11月1日</div>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>

              </div>
              <div class="useful">
                <p>此答案是否有用？</p>
                <el-button type="warning">是</el-button>
                <el-button type="info">否</el-button>
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

            <!-- 律师信息 -->
            <div class="side-main">
              <div class="article-side">
                <div class="writer-box">
                  <div class="writer-head">
                    <img src="@/assets/img/head.png" alt="">
                  </div>
                  <div class="writer-info">
                    王大壮<span>特邀作者</span>
                  </div>
                  <p class="writer-intro">北京市炜衡（沈阳）律师事务所</p>
                </div>  
                <p class="writer-corp">北京市炜衡（沈阳）律师事务 所专职律师、高级合伙人</p>
              </div>
            </div>
            <!-- 律师信息end -->

            <!-- 看了又看 -->
            <div class="side-main">
              <div class="side-head">
                <h3>
                  <svg-icon icon-class="hdot" class-name="card-panel-icon" />同样询问的人还看了
                </h3>
              </div>
              <div class="side-body">
                <ul class="pop-items">
                  <li><a href="">教育股集体下跌，教育股还是好的投资吗？</a></li>
                  <li><a href="">教育股集体下跌，教育股还是好的投资吗？</a></li>
                  <li><a href="">教育股集体下跌，教育股还是好的投资吗？</a></li>
                </ul>
              </div>
            </div>
            <!-- 看了又看end -->

            <!-- 大家还搜 -->
            <div class="side-main">
              <div class="side-head">
                <h3>
                  <svg-icon icon-class="hdot" class-name="card-panel-icon" />大家还搜
                </h3>
              </div>
              <div class="side-body">
                <ul class="pop-items">
                  <li><a href="">教育股集体下跌，教育股还是好的投资吗？</a></li>
                  <li><a href="">教育股集体下跌，教育股还是好的投资吗？</a></li>
                  <li><a href="">教育股集体下跌，教育股还是好的投资吗？</a></li>
                </ul>
              </div>
            </div>
            <!-- 大家还搜end -->

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("Views: /homeland/qa-detail is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomeLandQaDetail",
  components: {  },
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
    // this.$store.state.navactive = '/culture/storage/index';
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
.qa {
  h2 {
    font-size: 26px;
    line-height: 1.5;
    width: 100%;
    margin: 0;

    span, span.orange {
      background: #e08714;
      color: #fff;
      padding: 4px;
      margin-right: 5px;
    }
  }
}
.answer {
  text-align: left;
  font-size: 14px;
  margin-bottom: 30px;

  span.orange {
    background: #e08714;
    color: #fff;
    padding: 4px;
    margin-right: 15px;
    font-size: 26px;
  }
  a.blue {
    color: #4696a3;
  }
}
.useful {
  font-size: 18px;
  font-weight: bold;

}

.article-side {
  border: 1px solid #f5f7f9;
  border-top: 3px solid #4696a3;
  // border-bottom: none;
  border-radius: 3px;
  width: 100%;
  padding: 15px 15px;

  .writer-box {
    width: 100%;
    clear: both;
    overflow: hidden;
    position: relative;
    // border-bottom: 1px solid #f5f7f9;

    .writer-head {
      width: 78px;
      height: 78px;
      float: left;
      margin-right: 20px;

      img {
        width: 78px;
        height: 78px;
      }
    }
    .writer-info {
      font-size: 22px;
      font-weight: bold;
      width: 100%;
      padding-top: 10px;

      span {
        font-size: 11px;
        font-weight: normal;
        color: #e08714;
        border: 1px solid #e08714;
        padding: 3px 7px;
        border-radius: 3px;
        margin-left: 25px;
        position: relative;
        top: -4px;
      }
    }
    .writer-follow {
      width: 67px;
      height: 26px;
      line-height: 26px;
      font-size: 13px;
      border-radius: 3px;
      background: #e08714;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 10px;
      right: 0;
    }
    .writer-intro {
      font-size: 12px;
      line-height: 1.4;
      color: #787878;
      margin: 20px 0 0 0;
    }
  }
  p.writer-corp {
    font-size: 14px;
    color: #787878;
    line-height: 1.5;
    text-align: justify;
    margin-top: 20px;
  }
}
.more {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #e08714;
  border-radius: 0 0 3px 3px;
  cursor: pointer;
} 
.pop-items {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 0 0 20px;
    padding: 0;
    font-size: 14px;
  }
}
</style>
