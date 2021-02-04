<template>
  <div class="block" style="margin-bottom: 40px;">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in ret" :key="item.title">
        <a :href="item.link">
          <img :src="item.img_path" width="720px" />
        </a>
      </el-carousel-item>
      <!-- <el-carousel-item>
        <a>
          <img src="http://www.lblbsy.com:2000/test/fake-106.jpg" alt="" width="726px" />
        </a>
        <h3></h3>
      </el-carousel-item> -->
    </el-carousel>
  </div>
    
</template>

<script>
console.log("homeland/components: focus is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeLandFocus",
  components: {},
  data() {
    return {
      // focus数据接收数组
      ret: [],
      url: LaobingUrl.modular_focus,
      param: {
        section_name: "法律"
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
            // const { code, data } = response;
            if (code === 20000 && data != null) {
              console.log("Law Focus Response:", data);
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
          this.ret = response.list;
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
</style>
