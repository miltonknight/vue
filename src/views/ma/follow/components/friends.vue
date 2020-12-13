<template>
  <div class="follow-body">
    <div class="follow-search">
      <el-input v-model="follow_input" placeholder="请输入您想要查找的用户" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="followSearch"></el-button>
      </el-input>
    </div>

    <div class="search-result">
      <div class="list-head">
        <h3>搜索结果</h3>
      </div>

      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>
      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>
      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>
      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>

    </div>

    <div class="search-result">
      <div class="list-head">
        <h3>相关推荐</h3>
      </div>

      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>
      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>
      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>
      <div class="follow-box">
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
          <el-button type="warning" @click="">取消关注</el-button>
        </div>
      </div>

    </div>

    
  </div>
</template>

<script>
console.log("follow/components: friends is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "FindFriends",
  data() {
    return {
      follow_input: ''
    };
  },
  methods: {
    followSearch() {
      console.log("search")
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
    flex-grow: 1;
    
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
    flex-grow: 2;
    align-self: center;
    text-align: right;
  }
}
.follow-search {
  width: 80%;
  margin: 0 auto 50px;

  .el-button {
    background-color: #e08714!important;
    color: #fff!important;
    border: 1px solid #e08714!important;
  }
}
.search-result {
  
}
</style>
