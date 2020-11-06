<template>
  <!-- 优惠信息 -->
  <div class="list-main">
    <div class="list-head">
      <h3>优惠信息<span>Preferential Information</span></h3>
      <a href="">查看更多</a>
    </div>
    <div class="list-body">
      
      <a v-for="item in coupon.data" :key="item.id" class="list-item">
        <div class="list-body-img">
          <img :src="item.srcPath" />
          <i class="badge badge-red">加油优惠</i>
        </div>
        <div class="list-body-text">
          <h3>{{item.title}}</h3>
          <p>{{item.intro}}</p>
          <div class="list-text-cate">
            <span class="tip">加油优惠信息</span>
            <span class="time">
              <i class="el-icon-time"></i>{{item.createTime}}
            </span>
          </div>
        </div>
      </a>
      
    </div>
  </div>
  <!-- 优惠信息end -->
</template>

<script>

console.log("@/views/ma/home/components/coupon is loaded~~~~~~~~~~~~~~~~~");

import axios from 'axios';
import { getData } from '@/api/common';
// import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeCoupon",
  components: {},
  data() {
    return {
      //优惠信息接收数组
      coupon: [],
      url: LaobingUrl.index_coupon
    }
  },
  computed: {
    // message() {}
  },
  created: function() {
    const baseUrl = this.GLOBAL.basePath;
    axios.get(baseUrl + this.url)
      .then(res => {
        //data属性是固定的用法,用于获取后台的实际数据
        this.coupon = res.data;
        console.log(res.data);
      }
    );
  }
};
</script>

<style lang="scss" scoped>

</style>
