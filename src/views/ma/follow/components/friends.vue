<template>
  <div class="follow-body">
    <div class="follow-search">
      <el-input v-model="follow_input" placeholder="请输入您想要查找的用户" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="followSearch"></el-button>
      </el-input>
    </div>

    <div class="search-result">
      <div class="list-head">
        <h3><svg-icon icon-class="hdot" class-name="card-panel-icon" />搜索结果</h3>
      </div>

      <!-- <div class="follow-box">
        <div class="follow-avatar">
          <img src="@/assets/img/avatar-follow.png" alt="">
        </div>
        <div class="follow-name">
          王珏<span>特邀作者</span>
          <p>老兵老兵网官方编辑</p>
        </div>
        <div class="follow-relation">
          <img src="@/assets/img/follow.png" alt="">
        </div>
        <div class="follow-operate">
          <el-button type="warning" @click="unfollow">取消关注</el-button>
        </div>
      </div> -->

      <div class="follow-box" v-for="item in friends" :key="item.id" >
        <div class="follow-avatar">
          <!-- <img src="@/assets/img/avatar-follow.png" alt=""> -->
          <img :src="avatar?avatar:defaultAvatar" class="user-avatar">
        </div>
        <div class="follow-name">
          {{ item.friend_full_name }}<span v-if="item.label_name">{{ item.label_name }}</span>
          <p>{{ item.introduction }}</p>
        </div>
        <div class="follow-relation">
          <img src="@/assets/img/follow.png" alt="" v-if="item.focus_eachother">
        </div>
        <div class="follow-operate" v-if="item.focus_eachother">
          <el-button type="warning" @click="unfollow">取消关注</el-button>
        </div>
        <div class="follow-operate" v-if="!item.focus_eachother">
          <el-button type="warning" @click="follow">关 注</el-button>
        </div>
      </div>

      <!-- 暂无数据 -->
      <div v-show="zwsj" class="zwsj">没有找到相关用户</div>

      <pagination
        v-show="total > 0"
        background
        layout="prev, pager, next"
        :total="total"
        :page.sync="listParam.page"
        :limit.sync="listParam.limit"
        @pagination="fetchData"
      />

    </div>

    <div class="search-result">
      <div class="list-head">
        <h3><svg-icon icon-class="hdot" class-name="card-panel-icon" />相关推荐</h3>
      </div>

      <div class="follow-box" v-for="item in cfriends" :key="item.id" >
        <div class="follow-avatar">
          <!-- <img src="@/assets/img/avatar-follow.png" alt=""> -->
          <img :src="avatar?avatar:defaultAvatar" class="user-avatar">
        </div>
        <div class="follow-name">
          {{ item.friend_full_name }}<span v-if="item.label_name">{{ item.label_name }}</span>
          <p>{{ item.introduction }}</p>
        </div>
        <div class="follow-relation">
          <img src="@/assets/img/follow.png" alt="" v-if="item.focus_eachother">
        </div>
        <div class="follow-operate" v-if="item.focus_eachother">
          <el-button type="warning" @click="unfollow">取消关注</el-button>
        </div>
        <div class="follow-operate" v-if="!item.focus_eachother">
          <el-button type="warning" @click="follow">关 注</el-button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
console.log("follow/components: friends is loaded");

import Pagination from "@/components/Pagination";
import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  name: "FindFriends",
  components: { Pagination },
  data() {
    return {
      url: LaobingUrl.find_friends,
      friends: [],
      cfriends: [],
      defaultAvatar: require("@/assets/img/head.png"),
      follow_input: '',
      total: 0,
      listParam: {
        my_uid: '',
        search_input: '',
        page: 1,
        limit: 10
      },
      zwsj: false
    };
  },
  computed: {
    ...mapGetters(['user_id', 'access_token', 'avatar'])
  },
  methods: {
    followSearch() {
      console.log("search::::::::");
      this.fetchData();
      this.makeData();
    },
    follow() {
      // 获取最外层div
      // console.log(e.currentTarget.parentElement.parentElement);
    },
    unfollow() {
      // 获取最外层div
      // console.log(e.currentTarget.parentElement.parentElement);
    },
    defAvatar(e) {
      console.log("defaultAvatar ~ this.avatar::", this.avatar);
      // if (this.avatar === undefined) {
      //   this.$store.state.user.avatar = '@/assets/img/head.png';
      //   console.log("avatar::::::::" + this.avatar);
      // }
      console.log(e)
      const img = e.srcElement
      img.src = this.defaultAvatar
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000 && data != null) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true
              } else { 
                this.zwsj = false; // 修复数据与“暂无数据”共存bug
              }  
              console.log("Find Friends:", data);
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
      var param = {
        search_input: this.follow_input,
        my_uid: this.user_id
      }
      this.postDataFromUI(this.url, param)
        .then(response => {
          this.friends = response;
          console.log("Find Friends Json:", response);
          console.log(response[0])
        });
    },
    makeData() {
      this.listParam.my_uid = this.user_id;
      this.listParam.search_input = this.follow_input;
      // this.listParam.page = ;
      // this.listParam.limit = ;
      console.log("listParam:::::", this.listParam)
      this.postDataFromUI(LaobingUrl.find_friends, this.listParam)
        .then(response => {
          this.cfriends = response;
          console.log("Comment Friends Json:", response);
        });
    }
  }  
};
</script>

<style lang="scss" scoped>
.follow-box {
  display: inline-flex;
  width: 48%;
  margin-bottom: 20px;

  &:nth-child(odd) {
    margin-left:3.5%;

    .follow-operate {
      text-align: right;
    }
  }

  .follow-avatar {
    // flex-grow: 1;
    width: 100px;
    
    img {
      width: 78px;
      height: 78px;
    }
  }
  .follow-name {
    flex-grow: 2;
    font-size: 18px;
    color: #313131;
    padding: 15px 0 0;

    span {
      font-size: 11px;
      color: #e08714;
      padding: 4px 8px;
      border: 1px solid #e08714;
      border-radius: 3px;
      position: relative;
      top: -1px;
      margin-left: 10px;
    }
    p {
      font-size: 14px;
      color: #787878;
    }
  }
  .follow-relation {
    // flex-grow: 2;
    width: 100px;
    align-self: center;
    text-align: center;
  }
  .follow-operate {
    width: 140px;
    align-self: center;
    text-align: right;
  }
}
.follow-search {
  width: 80%;
  margin: 0 auto 30px;

  .el-button {
    background-color: #e08714!important;
    color: #fff!important;
    border: 1px solid #e08714!important;
  }
}
.card-panel-icon {
  margin-right: 10px;
}
.search-result {
  overflow: hidden;
  min-height: 180px;
}
</style>
