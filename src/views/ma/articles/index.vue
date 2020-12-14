<!-- 关注 -->
<template>
  <div>
    <el-row :gutter="24">
      <div class="grid-content bg-purple follow-main">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="我的文章" name="first">

            <!-- components: components/followed -->
            <my-articles />

          </el-tab-pane>
          <el-tab-pane label="我的草稿" name="second">

            <!-- components: components/followers -->
            <my-drafts />

          </el-tab-pane>
          <el-tab-pane label="我的评论" name="third">

            <!-- components: components/find-friends -->
            <my-comments />
            
          </el-tab-pane>
        </el-tabs>

      </div>

    </el-row>
  </div>
</template>

<script>
console.log("Views: /articles/index is loaded");

import MyArticles from "@/views/ma/articles/components/articles"
import MyDrafts from "@/views/ma/articles/components/drafts"
import MyComments from "@/views/ma/articles/components/comments"
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Follow",
  components: {
    MyArticles,
    MyDrafts,
    MyComments
  },
  data() {
    return {
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: []
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
    // this.$store.state.navactive = '/setting/index';
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true
              }  
              console.log("Get Annals List Response:", data);
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
      this.listLoading = true;
      this.postDataFromUI(LaobingUrl.modular_article_list, this.listQuery)
        .then(response => {
          this.ArticleList = response;
          this.total = response.total;
          this.list = response.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.follow-main {

  .el-tabs>>>.el-tabs__header {
    padding: 10px 50px;
    background: #f5f7f9;
  }
  .el-tabs--card>>>.el-tabs__header .el-tabs__item,
  .el-tabs--card>>>.el-tabs__header .el-tabs__nav {
    border: none;
    transition: none;
  }
  .el-tabs>>>.el-form-item__label {
    padding-right: 20px;
  }

  /**** color fix */
  /** tab header */
  .el-tabs--card>>>.el-tabs__header .el-tabs__item.is-active,
  .el-tabs--card>>>.el-tabs__header .el-tabs__item:hover {
    border-bottom: none;
    color: #fff;
    background: #e08714;
  }
  // .el-input.is-active>>>.el-input__inner, 
  .el-tabs>>>.el-input__inner, 
  .el-tabs>>>.el-input__inner:focus,
  .el-tabs>>>.el-radio__inner:hover,
  .el-tabs>>>.el-textarea__inner:focus {
    border-color: #e08714;
  }
  .el-button--warning {
    background-color: #e08714;
    border-color: #e08714;
    width: 150px;
  }
  .el-form-item {
    margin-bottom: 35px;
  }
}
.follow-body {
  min-height: 700px;
  // padding: 50px;
  // border: 1px solid #f2f2f2;
  margin-top: 30px;
}

</style>
