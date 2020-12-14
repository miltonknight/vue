<template>
  <div class="follow-body">
    
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
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <!-- <img src="@/assets/img/follow.png" alt=""> -->
      </div>
      <div class="follow-operate">
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <!-- <img src="@/assets/img/follow.png" alt=""> -->
      </div>
      <div class="follow-operate">
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <!-- <img src="@/assets/img/follow.png" alt=""> -->
      </div>
      <div class="follow-operate">
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <!-- <img src="@/assets/img/follow.png" alt=""> -->
      </div>
      <div class="follow-operate">
        <el-button type="warning" @click="unfollow">取消关注</el-button>
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
        <el-button type="warning" @click="unfollow">取消关注</el-button>
      </div>
    </div>

  </div>
</template>

<script>
console.log("follow/components: followed is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Followed",
  data() {
    return {
      
    };
  },
  methods: {
    unfollow(e) {
      // 获取最外层div
      console.log(e.currentTarget.parentElement.parentElement);
      e.currentTarget.parentElement.parentElement.visible = false
    }
  }  
};
</script>

<style lang="scss" scoped>
.follow-box {
  display: inline-flex;
  width: 48%;
  margin-bottom: 20px;

  &:nth-child(even) {
    margin-left:3.5%;
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

</style>
