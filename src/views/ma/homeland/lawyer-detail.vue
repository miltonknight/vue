<!-- 老兵家园-律师 -->
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
                <h1>张炜 — 北京市炜衡（沈阳）事务所专职律师、高级合伙人{{ ArticleDetail.title }}</h1>
              </div>
              <div class="article-body">
                <!-- <p v-html="ArticleDetail.content"></p> -->
                <img src="@/assets/img/lawyer.jpg" alt="">
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
                <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
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
              <div class="more">咨询客服</div>
            </div>
            <!-- 律师信息end -->

            <!-- 律所信息 -->
            <div class="side-main">
              <img src="~@/assets/img/corp.jpg" alt="">
            </div>
            <!-- 律所信息 -->

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("Views: /homeland/lawyer-detail is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomeLandLawyerDetail",
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
.article-side {
  border: 1px solid #f5f7f9;
  border-top: 3px solid #4696a3;
  border-bottom: none;
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
</style>
