<template>
  <div class="list-body culture-list-box">
    <a v-for="item in ret" :key="item.article_id" :href="'/#/culture/storage/articlePainting?id=' + item.article_id" class="img-list nonebg">
      <div class="img-list-main">
        <img :src="item.img_path" />
      </div>
      <p>{{ item.title }}</p>
    </a>
    
  </div>

</template>

<script>
console.log("home/components: paintings is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomePaintings",
  components: {},
  data() {
    return {
      // 数据接收数组
      ret: [],
      url: LaobingUrl.index_modulars,
      param: {
        sort_id: 63 // 版块id=63
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
            if (code === 20000 && data != null) {
              console.log("Index paintings Response:", data);
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
          console.log("homepage paintings Json:", response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
