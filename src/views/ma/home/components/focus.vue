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
      <el-carousel-item v-for="item in ret.data" :key="item.id">
        <a :href="item.srcPath">
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

console.log(
  "@/views/ma/home/components/focus is loaded~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

import axios from 'axios';
import { getData } from '@/api/common';
// import { getData, postData } from "@/api/common";
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
    console.log("baseUrl::::::" + this.GLOBAL.basePath);
    const baseUrl = this.GLOBAL.basePath;
    console.log("request::::::" + this.url);
    console.log("http::::" + baseUrl + this.url);
    //getData("http://192.168.110.170:8181/test/queryHomePageImgs")
    axios.get(baseUrl + this.url)
      .then(res => {
        //data属性是固定的用法,用于获取后台的实际数据
        this.ret = res.data;
        console.log(res.data);
      }
    );
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
