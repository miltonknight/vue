<!-- 老兵驿站文章右侧 -->
<template>
  <div>
    <!-- 推荐文章 -->
    <div class="side-main">
      <div class="article-side">
       
        <div class="article-side-list">
          <div class="list-head">
            <span class="list-head-ttl">下一篇</span>
          </div>
          <!-- link string is needed -->
          <router-link to="/">
            <div class="list-body">
              <p>{{ ArticleDetail.title }}</p>
              <p class="intro">{{ ArticleDetail.introduction }}</p>
              <span>1小时前</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 推荐文章end -->

  </div>    
</template>

<script>
console.log("courier-station/components: next-article is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  name: "CsNextArticle",
  components: {},
  props: {
    sort: {
      type: Number,
      default: NaN
    }, 
    article: {
      type: Number,
      default: NaN
    }, 
    time: {
      type: String,
      default: ' '
    }
  },
  data() {
    return {
      ArticleDetail: [],
      url: LaobingUrl.modular_articles,
      param: {
        sort_id: '',
        article_id: '',
        create_time: ''
      }
    }
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  // created: function() { 
  mounted: function() { 
    console.log(":::::::::::::::::::", this.sort);
    console.log(":::::::::::::::::::", this.article);
    console.log(":::::::::::::::::::", this.time);
    this.param.sort_id = this.sort;
    this.param.article_id = this.article;
    this.param.create_time = this.time;
    this.fetchData();
  },
  methods: {
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000 && data != null) {
              console.log("Get Cs Next Article Response:", data);
              resolve(data);
            } else {
              reject(msg);
              // this.$message({
              //   message: "没有查询到数据",
              //   type: "success"
              // });
            }
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
      this.postDataFromUI(this.url, this.param)
        .then(response => {
          this.ArticleDetail = response;
          console.log("Get Cs Next Article Json:", response)
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
      font-size: 18px;
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
      font-size: 13px;
      line-height: 1.4;
      color: #787878;
      margin: 30px 0 0 0;
    }
  }
  .article-side-list {
    width: 100%;

    .list-head {
      border-bottom: 1px solid #f5f7f9;
      padding: 20px 0;
      margin-bottom: 20px;
    }
    span.list-head-ttl {
      border-left: 2px solid #e08714;
      padding-left: 10px;
      font-size: 14px;
      color: #787878;
    }
    .list-body {
      width: 100%;
      font-size: 14px;
      line-height: 1.5;

      dd {
        font-size: 12px;
        color: #c4c4c4;
        margin: 0 0 15px 0;
      }
      p {
        font-size: 14px;
        margin-bottom: 10px;
      }
      p.intro {
        color: #c4c4c4;
        font-size: 12px;
      }
      span {
        color: #c4c4c4;
        font-size: 12px;
      }
    }
  }
}
.more {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background: #4696a3;
  border-radius: 0 0 3px 3px;
  cursor: pointer;
}

</style>
