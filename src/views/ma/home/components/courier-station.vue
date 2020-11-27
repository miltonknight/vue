<template>
  <div class="list-main">
    <div class="list-head">
      <h3>老兵驿站<span>Military Memory</span></h3>
      <a href="/#/courier-station/index">查看更多</a>
    </div>
    <div class="list-body img-list-box">
      <div class="section-head">
        <ul class="section-title">
          <li class="is-active">老营房</li>
          <li>老哨所</li>
          <li>老故事</li>
          <li>老家书</li>
          <li>老军装</li>
          <li>老连队</li>
          <li>老照片</li>
        </ul>
      </div>
      <a v-for="item in ret" :key="item.article_id" :href="'/#/courier-station/article?id=' + item.article_id" class="img-list">
        <div class="img-list-main">
          <img :src="item.small_img_path" />
          <span>{{ item.title }}</span>
        </div>
        <p>{{ item.introduction }}</p>
      </a>
    </div>
  </div>
</template>

<script>
console.log("home/components: courier-station is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeCourierStation",
  components: {},
  data() {
    return {
      // 老兵驿站数据接收数组
      ret: [],
      url: LaobingUrl.index_article,
      param: {
        sort_id: 1
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
              console.log("Index CourierStation Response:", data);
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
          this.ret = response;
          console.log("homepage Courier Station Json:::::::::")
          console.log(response)
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
