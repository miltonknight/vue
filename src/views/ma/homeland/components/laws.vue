<template>
  <!-- 法律法规 -->
  <div class="list-main">
    <div class="list-head">
      <h3>法律法规<span>Laws & Regulations</span></h3>
      <a href="/#/homeland/law-list">查看更多</a>
    </div>
    <div class="list-body">

      <a class="law-cover" href="/#/homeland/law-detail">
        <img src="~@/assets/img/law-cover.jpg" />
      </a>

      <a v-for="item in ret.list" :key="item.id" :href="'/#/homeland/law-detail?id=' + item.article_id + '&sort_id=' + item.sort_id" class="law-cover">
        <img :src="item.img_path" />
      </a>
      
    </div>
  </div>
  <!-- 法律法规end -->
</template>

<script>
console.log("homeland/components: laws is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeLandLaws",
  components: {},
  data() {
    return {
      // 老兵驿站数据接收数组
      ret: [],
      url: LaobingUrl.modular_article_list,
      param: { 
        sort_id: 69,
        page: 1,
        limit: 6
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
              console.log("Component HL-Law Response:", data);
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
          console.log(response)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
/******* cover list */
.law-cover {
  display: block;
  width: 230px;
  height: 250px;
  overflow: hidden;
  float: left;
  margin: 0 15px 15px 0;
  border: 1px solid #f0f0f0;
  border-bottom: 4px solid #e08714;
  border-radius: 3px;

  &:nth-child(3n) {
    margin-right: 0;
  }
}
</style>
