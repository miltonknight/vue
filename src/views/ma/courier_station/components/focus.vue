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
        <!-- <a :href="item.link" :id="item.soldier_station_id"> -->
        <!-- 实现href传参，soldier_station_id写在type后方   -->
        <a :href="'/courier-station/artical?id=' + item.article_id">
          <img :src="item.img_path" width="726px"/>
        </a>
        <h3>{{ item.title }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
    
</template>

<script>

console.log("@/views/ma/courier_station/components/focus is loaded~~~~~~~~~~~~~~");

import axios from 'axios';
// import { getData } from '@/api/common';
// import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "CsFocus",
  components: {},
  data() {
    return {
      // focus数据接收数组
      ret: [],
      url: LaobingUrl.courier_station_focus
    }
  },
  computed: {
    // message() {}
  },
  created: function() {
    console.log("baseUrl::::::" + this.GLOBAL.basePath);
    const baseUrl = this.GLOBAL.basePath;
    const allUrl = baseUrl + this.url
    console.log("request::::::" + this.url);
    console.log("http::::" + baseUrl + this.url);
    //json post prop
    const prop = {
      "sort_id": 3 //文章分类
    };
    console.log("prop:::::"+prop)
    //getData("http://192.168.110.170:8181/test/queryHomePageImgs")
    axios.post(allUrl, prop)
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
