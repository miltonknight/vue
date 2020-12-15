<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 焦点图 -->
          <!-- components:components/focus -->
          <home-land-focus />

          <div class="list-container">
            
            <!-- 法律法规 -->
            <home-land-laws />
            <!-- 法律法规end -->

            <!-- 常见问题 -->
            <home-land-qa />
            <!-- 常见问题end -->

            <!-- 找律师 -->
            <home-land-find-lawyer />
            <!-- 找律师end -->

          </div>
        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">

            <!-- components:components/BbsTop -->
            <bbs-top />
            
            <!-- components:components/rightside -->
            <home-land-right-side />

            <!-- components:components/CaseStudy -->
            <case-studies />

            <!-- components:@components/Activities -->
            <activities />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
    <el-backtop>
      <div class="backtobox">
        <div><img src="@/assets/img/cservice.png" /></div>
        <div><img src="@/assets/img/backtop.png" /></div>
      </div>
    </el-backtop>
  </div>
</template>

<script>
console.log("Views: /homeland/index is loaded");

import HomeLandFocus from "./components/focus";
import HomeLandLaws from "./components/laws";
import HomeLandQa from "./components/qa";
import HomeLandFindLawyer from "./components/lawyer";
import BbsTop from "@/components/BbsTop";
import HomeLandRightSide from "./components/rightside";
import Activities from "@/components/Activities";
import CaseStudies from "@/components/CaseStudies";

// import { postData } from "@/api/common";
// import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HomeLand",
  components: {
    HomeLandFocus, // 焦点图
    HomeLandLaws, // 法律法规
    HomeLandQa, // 常见问题
    HomeLandFindLawyer, // 找律师
    HomeLandRightSide, // 右侧
    BbsTop,
    Activities,
    CaseStudies
  },
  data() {
    return {
    };
  },
  computed: { },
  created: function() {
    this.$store.state.navactive = '/homeland/law';
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
/******* new home page ***************/
.el-row {
  margin-right: 0 !important;

  .el-col.el-col-17 {
    padding-right: 0 !important;
  }
  .el-col.el-col-7 {
    padding-right: 0 !important;
  }
}

.el-carousel--horizontal > .el-carousel__button {
    background-color: #e08714!important;
    opacity: 1;
}

/******* cover list */
.law-cover {
  display: block;
  width: 230px;
  height: 250px;
  overflow: hidden;
  float: left;
  margin: 0 15px 15px 0;
  border: 1px solid #f0f0f0;
  border-bottom: 4px solid #e08714;
  border-radius: 3px;

  &:nth-child(3n) {
    margin-right: 0;
  }
}

.el-backtop {
  left: 50% !important;
  bottom: 320px !important;
  margin-left: 542px !important;
  width: 50px;
  height: 100px;
  box-shadow: none !important;
  background: none !important; 

  &:hover {
    box-shadow: none !important;;
    background: none !important; 
  }
}
.backtobox {
  width: 50px;
  height: 100px;

  div {
    width: 50px;
    height: 50px;
    text-align: center;
    // border: 1px solid #e08714;
    border: 1px solid #f7e0c1;
    display: flex;
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: center;
    border-radius: 3px 3px 0 0;

    &:nth-last-child(1) {
      border-top: none;
      border-radius: 0 0 3px 3px;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
}
</style>
