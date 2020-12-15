<!-- 我的评论 -->
<template>
  <div class="setting-body">

    <div class="inbox-msg unread">
      <div class="inbox-msg-avatar">
        <img src="@/assets/img/envelope-close.png" alt="">
      </div>
      <div class="inbox-msg-content">
        <h3><span>老兵老兵网啊</span> 在<a class="article-link">我的从军生涯</a> 中评论你</h3>
        <div class="inbox-msg-bm">
          <div class="msg-content">你这篇文章写的太好了，完全写出了我们的心声。我当年就是这样，咋的战友没事咱们整点啊？</div>
          <div class="time">
            <i class="el-icon-time"></i>2020-20-20 15:16
          </div>
        </div>
      </div>
    </div>
    <div class="inbox-msg unread">
      <div class="inbox-msg-avatar">
        <img src="@/assets/img/envelope-close.png" alt="">
      </div>
      <div class="inbox-msg-content">
        <h3><span>老兵老兵网啊</span> 在<a class="article-link">我的从军生涯</a> 中评论你</h3>
        <div class="inbox-msg-bm">
          <div class="msg-content">你这篇文章写的太好了，完全写出了我们的心声。我当年就是这样，咋的战友没事咱们整点啊？</div>
          <div class="time">
            <i class="el-icon-time"></i>2020-20-20 15:16
          </div>
        </div>
      </div>
    </div>
    <div class="inbox-msg unread">
      <div class="inbox-msg-avatar">
        <img src="@/assets/img/envelope-close.png" alt="">
      </div>
      <div class="inbox-msg-content">
        <h3><span>老兵老兵网啊</span> 在<a class="article-link">我的从军生涯</a> 中评论你</h3>
        <div class="inbox-msg-bm">
          <div class="msg-content">你这篇文章写的太好了，完全写出了我们的心声。我当年就是这样，咋的战友没事咱们整点啊？</div>
          <div class="time">
            <i class="el-icon-time"></i>2020-20-20 15:16
          </div>
        </div>
      </div>
    </div>
    <div class="inbox-msg">
      <div class="inbox-msg-avatar">
        <img src="@/assets/img/envelope-close.png" alt="">
      </div>
      <div class="inbox-msg-content">
        <h3><span>老兵老兵网啊</span> 在<a class="article-link">我的从军生涯</a> 中评论你</h3>
        <div class="inbox-msg-bm">
          <div class="msg-content">你这篇文章写的太好了，完全写出了我们的心声。我当年就是这样，咋的战友没事咱们整点啊？</div>
          <div class="time">
            <i class="el-icon-time"></i>2020-20-20 15:16
          </div>
        </div>
      </div>
    </div>
    <div class="inbox-msg">
      <div class="inbox-msg-avatar">
        <img src="@/assets/img/envelope-close.png" alt="">
      </div>
      <div class="inbox-msg-content">
        <h3><span>老兵老兵网啊</span> 在<a class="article-link">我的从军生涯</a> 中评论你</h3>
        <div class="inbox-msg-bm">
          <div class="msg-content">你这篇文章写的太好了，完全写出了我们的心声。我当年就是这样，咋的战友没事咱们整点啊？</div>
          <div class="time">
            <i class="el-icon-time"></i>2020-20-20 15:16
          </div>
        </div>
      </div>
    </div>
    <div class="inbox-msg">
      <div class="inbox-msg-avatar">
        <img src="@/assets/img/envelope-close.png" alt="">
      </div>
      <div class="inbox-msg-content">
        <h3><span>老兵老兵网啊</span> 在<a class="article-link">我的从军生涯</a> 中评论你</h3>
        <div class="inbox-msg-bm">
          <div class="msg-content">你这篇文章写的太好了，完全写出了我们的心声。我当年就是这样，咋的战友没事咱们整点啊？</div>
          <div class="time">
            <i class="el-icon-time"></i>2020-20-20 15:16
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
console.log("Views: /inbox/index is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "MyComments",
  components: {},
  data() {
    return {
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
  mounted() {},
  methods: {
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0;
                // console.log(response.data.total)
                this.zwsj = true;
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
.setting-body {
  min-height: 700px;
  // border: 1px solid #f2f2f2;
  // padding: 0px 20px;
  margin-bottom: 50px;
}
.inbox-msg {
  margin: 20px 0;

  .inbox-msg-avatar {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    float: left;
    position: relative;

    img {
      width: 80px;
      height: 80px;
    }
    i {
      position: absolute;
      right: 0;
      top: 0;
      color: #ff0000;
      font-size: 10px;
      display: none;
    }
  }
  .inbox-msg-content {
    // float: left;
    width: 100%;
    padding: 10px 0;

    h3 {
      font-size: 18px;
      margin: 0 0 5px;
      font-weight: normal;
    }
    .article-link {
      color: #4696a3;
    }
    .inbox-msg-bm {
      overflow: hidden;
      display: flex;
      height: 54px;

      .msg-content {
        font-size: 14px;
        line-height: 1.5;
        color: #787878;
        width: 760px;
        height: 54px;
        flex-grow: 1;
      }
      .time {
        color: #a7a7a7;
        font-size: 14px;
        flex-grow: 2;
        align-self: flex-end;
        text-align: right;

        i {
          margin-right: 5px;
        }
      }
    }
  }
}
.inbox-msg.unread {
    
  h3 {
    font-weight: bold;
  }
  .inbox-msg-avatar i {
    display: block;
  }
}
</style>
