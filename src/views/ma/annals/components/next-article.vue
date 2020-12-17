<!-- 老兵驿站文章右侧 -->
<template>
  <!-- 推荐文章 -->
  <div class="side-main">
    <div class="article-side">
      
      <div class="article-side-list">
        <div class="list-head">
          <span class="list-head-ttl">下一篇</span>
        </div>
        <!-- link string is needed -->
        <div class="list-body">
          <router-link v-if="ArticleDetail.code != 50003" :to="'article?id=' + ArticleDetail.article_id + '&sort_id=' + ArticleDetail.sort_id">

            <p>{{ ArticleDetail.title }}</p>
            <p class="intro">{{ ArticleDetail.introduction }}</p>
            <span>{{ ArticleDetail.create_time }}</span>
          </router-link>
          <!-- 没有更多 -->
          <div v-show="zwsj" class="zwsj">没有更多文章了</div>
        </div>

      </div>
    </div>
  </div>
  <!-- 推荐文章end -->
</template>

<script>
console.log("courier-station/components: next-article is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  name: "AnnalsNextArticle",
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
      url: LaobingUrl.next_article,
      param: {
        sort_id: '',
        article_id: '',
        create_time: ''
      },
      zwsj: false
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
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true
              } else { 
                this.zwsj = false; // 修复数据与“暂无数据”共存bug
              }  
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
.zwsj {
  font-size: 16px;
}
.article-side {
  border-bottom: 1px solid #f5f7f9;
}
.article-side .article-side-list .list-head {
  padding: 0px 0 20px;
}
</style>
