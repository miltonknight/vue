<!-- 老兵战史文章右侧 -->
<template>
  <div>
    <!-- 作者信息 -->
    <div class="side-main">
      <div class="article-side">
        <div class="writer-box">
          <div class="writer-head">
            <!-- <img src="@/assets/img/head.png" alt=""> -->
            <img :src="infoDetail.avatar?infoDetail.avatar:defaultAvatar" class="user-avatar">
          </div>
          <div class="writer-info">
            {{ infoDetail.name }}<p v-if="infoDetail.label_name"><span>{{ infoDetail.label_name }}</span></p>
          </div>
          <div class="writer-follow">关注</div>  
          <p class="writer-intro">{{ infoDetail.introduction }}</p>
        </div>  
        <div class="article-side-list">
          <div class="list-head">
            <span class="list-head-ttl">发表文章 {{ infoDetail.count }} 篇</span>
          </div>
          <div class="list-body">
            <span class="list-head-ttl">最近发布</span>
            <!-- <dl>
              <dt>教育股集体下跌，教育股还是好的投资吗？</dt>
              <dd>1小时前</dd>
              <dt>教育股集体下跌，教育股还是好的投资吗？</dt>
              <dd>1小时前</dd>
            </dl> -->

            <dl v-for="item in infoDetail.list" :key="item.id">
              <!-- <a :href="'/#/annals/article?id=' + item.article_id + '&sort_id=' + item.sort_id"> -->
              <a :href="'/#/annals/article?id=' + item.article_id">
                <dt>{{ item.title }}</dt>
                <dd>{{ item.create_time }}</dd>
              </a>
            </dl>
            <!-- 近期 -->
            <div v-show="zwsj" class="zwsj">近期没有发表过其他文章</div>

          </div>
        </div>
      </div>
      <div class="more">
        <router-link :to="'/profile/index?uid=' + writer">阅读更多内容</router-link>
      </div>
    </div>
    <!-- 作者信息end -->

  </div>    
</template>

<script>
console.log("annals/components: writer-info is loaded");

import { LaobingUrl } from "@/api/laobing_url";
import { postData } from "@/api/common";
import { mapGetters } from "vuex";

export default {
  name: "AnnalsWriterInfo",
  components: {},
  props: {
    writer: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      infoDetail: [],
      url: LaobingUrl.writer_info,
      zwsj: false,
      defaultAvatar: require("@/assets/img/head.png")
    }
  },
  computed: {
    ...mapGetters(["user_id", "access_token", "avatar"])
  },
  // created: function() {
  //   this.fetchData();
  // },
  mounted: function() { 
    this.fetchData();
  },
  methods: {
    defAvatar(e) {
      console.log("-this.avatar::", this.avatar);
      // if (this.avatar === undefined) {
      //   this.$store.state.user.avatar = '@/assets/img/head.png';
      //   console.log("avatar::::::::" + this.avatar);
      // }
      console.log(e)
      const img = e.srcElement
      img.src = this.defaultAvatar
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              if (data.list.length === 0) {
                this.zwsj = true
              } else { 
                this.zwsj = false; // 修复数据与“暂无数据”共存bug
              }  
              console.log("Get Annals Writer Info Response:", data);
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
      // this.postDataFromUI('/article/findWriterDataById', 'cd3a070bf1d14f1eba3f0b434ad57e4b')
      var param = {
        create_uid: this.writer
        // create_uid: "cd3a070bf1d14f1eba3f0b434ad57e4b"
      }
      console.log(this.url, param.create_uid);
      // console.log(param.create_uid)
      this.postDataFromUI(this.url, param)
        .then(response => {
          this.infoDetail = response;
          console.log(response);
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
  font-size: 12px;
  text-align: left;
  color: #ccc;
  margin: 15px 0 0;
}
</style>
