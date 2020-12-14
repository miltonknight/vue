<template>
  <div class="list-main">
    <div class="list-head">
      <h3>老兵战史<span>Veteran war history</span></h3>
      <a href="/#/annals/index">查看更多</a>
    </div>
    <div class="list-body">

      <a v-for="item in ret" :key="item.article_id" :href="'/#/annals/article?id=' + item.article_id" class="list-item">
        <div class="list-body-img">
          <img :src="item.small_img_path">
          <i class="badge">{{ item.sort_name }}</i>
        </div>
        <div class="list-body-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.introduction }}</p>
          <div class="list-text-cate">
            <span class="tip">{{ item.sort_name }}</span>
            <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span>
          </div>
        </div>
      </a>
      
    </div>
  </div>
</template>

<script>
console.log("home/components: annals is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeAnnals",
  components: {},
  data() {
    return {
      // annals数据接收数组
      ret: [],
      url: LaobingUrl.index_article,
      param: {
        sort_id: 9 // 版块id=9
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
              console.log("Index Annals Response:", data);
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
          console.log("homepage Annals Json:", response)
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
