<template>
  <!-- 优惠信息 -->
  <div class="list-main">
    <div class="list-head">
      <h3>优惠信息<span>Preferential Information</span></h3>
      <a href="">查看更多</a>
    </div>
    <div class="list-body" style="overflow:inherit">
      
      <a v-for="item in coupon.list" :key="item.id" :href="'/#/courier-station/article?id=' + item.article_id" class="list-item">
        <div class="list-body-img">
          <img :src="item.img_path" />
          <i class="badge badge-red">加油优惠</i>
        </div>
        <div class="list-body-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.introduction }}</p>
          <div class="list-text-cate">
            <span class="tip">加油优惠信息</span>
            <span class="time">
              <i class="el-icon-time"></i>{{ item.create_time }}
            </span>
          </div>
        </div>
      </a>
      
    </div>
  </div>
  <!-- 优惠信息end -->
</template>

<script>
console.log("home/components: coupon is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeCoupon",
  components: {},
  data() {
    return {
      // 优惠信息接收数组
      coupon: [],
      url: LaobingUrl.index_modulars
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
              console.log("Coupon List Response:", data);
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
        "sort_id": 72
      };
      this.postDataFromUI(this.url, params)
        .then(response => {
          this.coupon = response;
          console.log("homepage Coupon Json:", response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
