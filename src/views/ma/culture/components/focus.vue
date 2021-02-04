<template>

  <div class="block" style="margin-bottom: 40px;">
    <el-carousel height="300px">
      <el-carousel-item v-for="item in ret" :key="item.id">
        <!-- <a :href="item.link" :id="item.soldier_station_id"> -->
        <!-- 实现href传参，soldier_station_id写在type后方   -->
        <a :href="item.link">
          <img :src="item.img_path" width="720px" />
        </a>
      </el-carousel-item>
      <!-- <el-carousel-item>
        <a>
          <img src="http://www.lblbsy.com:2000/test/fake-105.jpg" alt="" width="726px" />
        </a>
        <h3></h3>
      </el-carousel-item> -->
    </el-carousel>
  </div>
    
</template>

<script>

console.log("@/views/ma/culture/components/focus is loaded~~~~~~~~~~~~~~");
console.log("culture/components: focus is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "CultureFocus",
  components: {},
  data() {
    return {
      // focus数据接收数组
      ret: [],
      url: LaobingUrl.modular_focus,
      sort_id: 3,
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  computed: {
    // ...mapGetters(["user_id", "access_token"])
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
              console.log("CS Focus Response:", data);
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
      // json post prop
      var params = {
        section_name: "名家讲坛"
      };
      this.postDataFromUI(LaobingUrl.modular_focus, params)
        .then(response => {
          this.ret = response.list;
          console.log(response);
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
