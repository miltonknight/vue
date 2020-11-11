<template>
  <!-- <div> -->
    <!-- components' name -->
    <!-- <div class="block">
      <el-carousel height="300px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div> -->
  
  <div class="block" style="margin-bottom: 40px;">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in ret" :key="item.id">
        <a :href="'/#/'+item.srcPath">
          <img
            :src="item.srcPath"
            :alt="item.intro"
            width="726px"
          />
        </a>
        <h3>{{ item.title }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    
</template>

<script>

console.log("@/views/ma/home/components/focus is loaded~~~~~~~~~~~~~~~~~~");

import { getData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "Focus",
  components: {},
  data() {
    return {
      // focus数据接收数组
      ret: [],
      url: LaobingUrl.index_focus_images
    }
  },
  computed: {
    // message() {}
  },
  created: function() {
    this.fetchData();
  },
  methods: { 
    getDataFromUI(url) {
      return new Promise((resolve, reject) => {
        getData(url)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000 && data != null) {
              console.log("Index Focus Response:", data);
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
            this.$message({
              message: error,
              type: "success"
            });
          });
      });
    },
    fetchData() {
      var params = {
        
      };
      this.getDataFromUI(LaobingUrl.index_focus_images, params)
        .then(response => {
          this.ret = response;
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
