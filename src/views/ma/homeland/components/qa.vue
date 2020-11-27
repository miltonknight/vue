<template>
  <!-- 优惠信息 -->
  <div class="list-main">
    <div class="list-head">
      <h3>常见问题解答<span>Q&A</span></h3>
      <a href="/#/homeland/qa-list">查看更多</a>
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

      <a class="qa-box" href="/#/homeland/qa-detail">
        <h2><span>问</span>退役军人在遇到权益被侵害时，可依据哪些法律进行维权？</h2>
        <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
      </a>
      <a class="qa-box" href="/#/homeland/qa-detail">
        <h2><span>问</span>退役军人在遇到权益被侵害时，可依据哪些法律进行维权？</h2>
        <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
      </a>
      <a class="qa-box" href="/#/homeland/qa-detail">
        <h2><span>问</span>退役军人在遇到权益被侵害时，可依据哪些法律进行维权？</h2>
        <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
      </a>
      <a class="qa-box" href="/#/homeland/qa-detail">
        <h2><span>问</span>退役军人在遇到权益被侵害时，可依据哪些法律进行维权？</h2>
        <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
      </a>
      <a class="qa-box" href="/#/homeland/qa-detail">
        <h2><span>问</span>退役军人在遇到权益被侵害时，可依据哪些法律进行维权？</h2>
        <p>退役军人在职场上不可避免地要遇到维权事件，处理此类问题时可依据有关法律作出如下处理：(1)不签订劳动合同《中华人民共和国劳动合同法》第七条规定：“用人单位自用工之日起即与劳动者建立劳动关系。”第十条规定：“建立劳动关系，应当订立书面劳动合同。</p>
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
.qa-box {
  width: 100%;
  display: block;
  margin-bottom: 30px;
  
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
