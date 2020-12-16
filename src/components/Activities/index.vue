<template>
  <!-- 最新活动 -->
  <div class="side-main">
    <div class="side-head">
      <h3>
        <svg-icon icon-class="hdot" class-name="card-panel-icon" />最新活动<a href="">更多活动</a>
      </h3>
    </div>
    <div class="side-body">
      <div class="side-img-box">
        <div class="box-img">
          <img src="@/assets/img/side-demo.png" alt="" />
        </div>
        <h3>阅遍山河 看世界”老兵摄影大赛</h3>
        <p>活动时间：10月20日 - 12月20日</p>
        <i class="badge badge-blue">活动</i>
      </div>
      <div class="side-img-box">
        <div class="box-img">
          <img src="@/assets/img/side-demo2.png" alt="" />
        </div>
        <h3>“云”舞兵清云舞蹈大赛通知</h3>
        <p>活动时间：10月20日 - 12月20日</p>
        <i class="badge badge-blue">活动</i>
      </div>
      <div class="side-img-box">
        <div class="box-img">
          <img src="@/assets/img/side-demo3.png" alt="" />
        </div>
        <h3>全军野战文艺创演活动</h3>
        <p>活动时间：10月20日</p>
        <i class="badge badge-orange">晚会</i>
      </div>
    </div>
  </div>
  <!-- 最新活动end -->
</template>

<script>
console.log("Components：@/Activities is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: "MaHomeheader",
  name: "Activities",
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
              console.log("Get Activities Response:", data);
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
          console.log("Get Activities Json:", response)
        });
    }
  }
};
</script>

<style scoped lang="scss">

</style>
