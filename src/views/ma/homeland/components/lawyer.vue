<template>
  <!-- 找律师 -->
  <div class="list-main">
    <div class="list-head">
      <h3>找律师<span>Find laywers</span></h3>
      <a href="/#/homeland/lawyer-list">查看更多</a>
    </div>
    <div class="list-body">
      
      <a v-for="item in ret" :key="item.id" class="lawyer-box" :href="'/#/homeland/lawyer-detail?id=' + item.article_id">
        <img :src="item.img" alt="" />
        <div class="lawyer-info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.introduction }}</p>
        </div>
      </a>

    </div>
  </div>
  <!-- 优惠信息end -->
</template>

<script>
console.log("homeland/components: lawyer is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeLandFindLawyer",
  components: {},
  data() {
    return {
      // 优惠信息接收数组
      ret: [],
      url: LaobingUrl.lawyer_index_list
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
              console.log("Component HL-Lawyer Response:", data);
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
      var params = {
        
      };
      this.postDataFromUI(this.url, params)
        .then(response => {
          this.ret = response;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.lawyer-box {
  width: 165px;
  height: 320px;
  display: block;
  border-radius: 3px;
  margin: 0 20px 20px 0;
  float: left;

  &:nth-child(4n) {
    margin-right: 0;
  }

  img {
    width: 165px;
    height: 234px;
    display: block;
    overflow: hidden;
  }
  .lawyer-info {
    padding: 10px;
    background: #edf1f4;

    h3 {
      font-size: 16px;
      line-height: 1.5;
      margin: 0 0 5px;
    }
    p {
      font-size: 12px;
      line-height: 1.5;
      margin: 0;
    }
  }
}
</style>
