<template>
  <div class="list-main">
    <div class="list-head">
      <h3>老兵情怀<span>Veteran feelings</span></h3>
      <a href="/#/sentiment/index">查看更多</a>
    </div>
    <div class="list-body">
      <!-- <a v-for="(item, index) in ret" v-if="index === 0" :key="item.article_id" :href="'/#/sentiment/critical-detail?id=' + item.article_id" class="img-list slide"> -->
      <a v-for="item in ret.slice(0, 1)" :key="item.article_id" :href="'/#/sentiment/critical-detail?id=' + item.article_id" class="img-list slide">
        <div class="img-list-main">
          <img :src="item.img_path">
          <span>{{ item.title }}</span>
        </div>
      </a>
    </div>
    <div class="list-body">
      <!-- <a v-for="(item, index) in ret" v-if="index != 0" :key="item.article_id" :href="'/#/sentiment/critical-detail?id=' + item.article_id" class="img-list"> -->
      <a v-for="item in ret.slice(1, 4)" :key="item.article_id" :href="'/#/sentiment/critical-detail?id=' + item.article_id" class="img-list">
        <div class="img-list-main">
          <img :src="item.img_path">
          <span>{{ item.title }}</span>
        </div>
        <p>{{ item.introduction }}</p>
      </a>
      
    </div>
  </div>
</template>

<script>
console.log("home/components: sentiment is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeSenti",
  components: {},
  data() {
    return {
      // 数据接收数组
      ret: [],
      url: LaobingUrl.index_modulars,
      param: {
        sort_id: 31 // 版块id=31
      }
    }
  },
  computed: {
    // message() {}
  },
  created: function() {
    this.fetchData();
  },
  methods: { 
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000 && data != null) {
              console.log("Index Sentiment Response:", data);
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
          this.ret = response.list;
          console.log("homepage Senti Json:", response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.block {
  margin-bottom: 30px;

  .el-carousel__item {

    h3 {
      line-height: 20px;
      margin-top: -60px;
      color: #fff;
      font-size: 1.2em;
      font-weight: normal;
    }
    a img {
      border-radius: 3px;
    }
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    text-align: center;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    text-align: center;
  }
}
.section-head {
  margin-bottom: 20px;

  .section-title {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      flex-grow: 7;
      text-align: center;
      list-style: none;
      cursor: pointer;
      border-right: 2px solid #d7d7d7;

      &:nth-last-child(1) {
        border-right: none;
      }
    }
  }
}
</style>
