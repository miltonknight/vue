<!-- 我的文章 -->
<template>
  <div class="list-body">
    <div v-for="item in ArticleList.list" :key="item.id" class="list-item" :data-id="item.article_id">
      <div class="list-body-img">
        <img :src="item.img_path">
        <i class="badge">{{ item.sort_name }}</i>
      </div>
      <div class="list-body-text">
        <!-- 链接地址目前存在指向错误的问题,用户发出的文章目前只能在论坛中显示,但论坛版块尚未开启所以暂时指向老兵驿站 -->
        <h3><a :href="'/#/courier-station/article?id=' + item.article_id + '&sort_id=' + item.sort_id">{{ item.title }}</a></h3>
        <p><a :href="'/#/courier-station/article?id=' + item.article_id + '&sort_id=' + item.sort_id">{{ item.introduction }}</a></p>
        <div class="list-text-cate">
          <span class="tip">{{ item.sort_name }}</span>
          <span class="time">
            <i class="el-icon-edit-outline"></i> <i class="el-icon-delete" @click="deleteArticle"></i><i class="el-icon-time"></i>{{ item.create_time }}
          </span>
        </div>
      </div>
    </div>
    <!-- 暂无数据 -->
    <div v-show="zwsj" class="zwsj">暂无数据</div>

    <pagination
      v-show="total > 0"
      background
      layout="prev, pager, next"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />

  </div>
</template>

<script>
console.log("articles/components: articles is loaded");

import Pagination from "@/components/Pagination";
import { mapGetters } from 'vuex';
import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "MyArticles",
  components: {
    Pagination
  },
  data() {
    return {
      ArticleList: [],
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        uid: this.user_id, // 作者id
        page: 1,
        limit: 10
      },
      zwsj: false,
      obj: Object
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    // 打开弹出层确认操作，作为中间件传递obj给确认删除方法
    open(e) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 通过弹出层传参，将参数传递给确认删除方法
        this.confirmDelete(e);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    // 删除文章，获取最外层父级元素，生成对象进行传参
    deleteArticle(e) {
      // 获取最外层div
      // console.log(e.currentTarget);
      console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement);
      var obj = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
      // 使用弹出层作为中间件传递当前对象
      this.open(obj);
    },
    // 确认删除，前台将元素隐藏，同时请求后台接口假删除数据
    confirmDelete(e) {
      console.log("e.data-id::::" + e.getAttribute("data-id"));
      console.log("this.user_id;:::" + this.user_id)
      var prop = {
        article_id: '',
        uid: ''
      }
      prop.article_id = e.getAttribute("data-id");
      prop.uid = this.user_id;

      this.postDataFromUI(LaobingUrl.delete_article, prop) 
        .then(response => {
          // const { code, msg, data } = response;
          const { code, data } = response;
          if (code === 20000) {
            console.log("Delete Operation is done");
            resolve(data);
          }
        })
      e.style.display = 'none';
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
              console.log("Get My Articles Response:", data);
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
    // searchBySort(sortId) {
    //   this.listQuery.sort_id = sortId;
    //   this.listQuery.page = 1;
    //   this.listQuery.limit = 10;
    //   this.fetchData();
    // }
  }  
};
</script>

<style lang="scss" scoped>
.list-body {
  padding: 30px 0;
}
.list-item {
  margin-bottom: 20px;
  clear: both;
  width: 100%;
  display: flex;
}
.list-body-img {
  position: relative;
  float: left;
  width: 220px;
  height: 145px;
  margin-right: 20px;

  img {
    width: 220px;
    height: 145px;
    border-radius: 3px 0 0 3px;
  }
}
.list-body-text {
  float: left;
  width: 100%;
  height: 145px;
  position: relative;
  padding: 10px 10px 10px 0;

  h3 {
    font-size: 1.4em;
    margin: 0 0 10px;
    height: 1.4em;
    line-height: 1.5;
    overflow: hidden;
  }
  p {
    color: #787878;
    line-height: 1.5;
    height: 42px;
    font-size: 14px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .list-text-cate {
    position: absolute;
    bottom: 10px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;

    span.tip {
      color: #e08714;
    }
    span.time {
      float: right;
      color: #a7a7a7;
      margin-right: 10px;

      i {
        margin: 0 5px;
        font-size: 16px;

        &:hover {
          color: #e08714;
        }

        &:nth-last-child(1) {
          font-size: 14px;
        }
      }
    }
  }
}
.el-button--primary {
  background-color: #e08714 !important;
  border-color: #e08714 !important;
}
</style>
