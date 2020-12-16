<template>
  <!-- 成功案例 -->
  <div class="side-main">
    <div class="side-head">
      <h3>
        <svg-icon icon-class="hdot" class-name="card-panel-icon" />成功案例
        <a href="/#/case-studies/index">更多案例</a>
      </h3>
    </div>
    <div class="side-body">
      <div class="side-img-box">
        <div class="box-img">
          <img src="@/assets/img/side-demo4.png" alt="" />
        </div>
        <i class="badge badge-blue">NEW</i>
      </div>
      <div class="side-body">

        <!-- <router-link v-for="item in Article" :key="item.article_id" to="'/#/case-studies/article?id=' + item.article_id'"> -->
        <a v-if="Article.code === 20000" v-for="item in Article" :key="item.article_id" :href="'/#/case-studies/article?id=' + item.article_id">
          <div class="slist-box">
            <div class="slist-box-img">
              <img :src="item.small_img_path" />
            </div>
            <p>{{ item.title }}</p>
            <span>{{ item.create_time }}</span>
          </div>
        </a>
        <!-- </router-link> -->
        
      </div>
    </div>
  </div>
  <!-- 成功案例end -->
</template>

<script>
console.log("Components：@/CaseStudies is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: "MaHomeheader",
  name: "CaseStudies",
  data() {
    return {
      Article: [],
      url: LaobingUrl.index_article,
      param: {
        sort_id: 32 // 版块id=32成功案例
      }
    }
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
              console.log("Get Case Studies Response:", data);
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
          this.Article = response;
          console.log("Get Case Studies Json:")
          console.log(response)
        });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
