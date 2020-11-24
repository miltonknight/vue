<template>
  <!-- 优惠信息 -->
  <div class="list-main">
    <div class="list-head">
      <h3>找律师<span>Find a laywer</span></h3>
      <a href="/#/homeland/lawyer-list">查看更多</a>
    </div>
    <div class="list-body">
      
      <!-- <a v-for="item in ret" :key="item.id" class="list-item">
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
      </a> -->

      <a class="lawyer-box" href="/#/homeland/lawyer-detail">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
        </div>
      </a>
      <a class="lawyer-box">
        <img src="~@/assets/img/lawyer.jpg" alt="" />
        <div class="lawyer-info">
          <h3>张炜</h3>
          <p>北京市炜衡（沈阳）律师事务所专职律师、高级合伙人</p>
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
      url: LaobingUrl.index_coupon
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
              console.log("QA List Response:", data);
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
      this.postDataFromUI(LaobingUrl.index_coupon, params)
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
