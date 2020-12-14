<template>
  <!-- 优惠信息 -->
  <div class="list-main">
    <div class="list-head">
      <h3>常见问题解答<span>Q&A</span></h3>
      <a href="/#/homeland/qa-list">查看更多</a>
    </div>
    <div class="list-body">
      
      <a v-for="item in ret" :key="item.id" class="qa-box" :href="'/#/homeland/qa-detail?id=' + item.article_id">
        <h2><span>问</span>{{ item.title }}</h2>
        <p v-html="item.content"></p>
      </a>

    </div>
  </div>
  <!-- 优惠信息end -->
</template>

<script>
console.log("homeland/components: Qa is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeLandQa",
  components: {},
  data() {
    return {
      // 优惠信息接收数组
      ret: [],
      url: LaobingUrl.qa_index_list,
      params: { }
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
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              console.log("Component HL-QA List Response:", data);
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
      this.postDataFromUI(this.url, this.params)
        .then(response => {
          this.ret = response;
          console.log(response)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.qa-box {
  width: 100%;
  display: block;
  margin-bottom: 30px;
  max-height: 105px;
  overflow: hidden;
  
  h2 {
    font-size: 22px;
    line-height: 1.5;
    width: 100%;
    height: 33px;
    overflow: hidden;
    margin: 0;

    span {
      background: #e08714;
      color: #fff;
      padding: 2px;
      margin-right: 5px;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 10px 0;
  }
}
</style>
