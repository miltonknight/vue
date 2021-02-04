<template>
  <div>
    <div class="list-main">
      <div class="list-head">
        <h3>老兵风采<span>Veteran presence</span></h3>
        <a href="/#/famous/people/index">查看更多</a>
      </div>

      <div class="list-body">
        <a v-for="item in ret.slice(0, 3)" :key="item.article_id" :href="'/#/famous/people/article?id=' + item.article_id" class="img-list-famous">
          <div class="img-list-main">
            <img :src="item.img_path">
          </div>
          <h3>{{ item.title }}</h3>
          <span>全国战斗英雄 一等功臣</span>
          <p>湖北浠水人，1933年1月出生。2017年7月28日，中央军委主席习近平签署命令：授予冷鹏飞</p>
          <span class="famous-dict"></span>
        </a>

      </div>
      <!-- <div class="list-body">
        <a v-for="item in ret.slice(1, 0)" :key="item.article_id" :href="'/#/sentiment/critical-detail?id=' + item.article_id" class="img-list">
          <div class="img-list-main">
            <img :src="item.img_path">
            <span>{{ item.title }}</span>
          </div>
          <p>{{ item.introduction }}</p>
        </a>
        
      </div> -->
    </div>

    <!-- 企业展播 -->
    <div class="list-main">
      <div class="list-body">
        <a href="" class="list-item">
          <div class="list-body-img">
            <img src="@/assets/img/11.png" />
            <i class="badge">名企展播</i>
          </div>
          <div class="list-body-text">
            <h3>华为“南泥湾”</h3>
            <p>为了规避美国技术和含有美国技术的产品，华为高高举起南泥湾大旗，及时启动了“南泥湾项目”。在实现“去美化”的过程中，实现技术自给自足。在美国一次次的无情打压下...</p>
            <div class="list-text-cate">
              <span class="time">
                <i class="el-icon-time"></i>2020-10-26
              </span>
            </div>
          </div>
        </a>
        <a href="" class="list-item">
          <div class="list-body-img">
            <img src="@/assets/img/12.png" />
            <i class="badge">名企展播</i>
          </div>
          <div class="list-body-text">
            <h3>麒麟将成绝唱？</h3>
            <p>8月7日，华为消费者业务CEO余承东宣布，9月15日之后，世上再无华为麒麟芯片。余承东说，今年秋天发布的新一代旗舰机Mate40将搭载华为自己的麒麟芯片...</p>
            <div class="list-text-cate">
              <span class="time">
                <i class="el-icon-time"></i>2020-10-26
              </span>
            </div>
          </div>
        </a>
        <a href="" class="list-item">
          <div class="list-body-img">
            <img src="@/assets/img/13.png" />
            <i class="badge">广告</i>
          </div>
          <div class="list-body-text">
            <h3>麒麟将成绝唱？</h3>
            <p>8月7日，华为消费者业务CEO余承东宣布，9月15日之后，世上再无华为麒麟芯片。余承东说，今年秋天发布的新一代旗舰机Mate40将搭载华为自己的麒麟芯片...</p>
            <div class="list-text-cate">
              <span class="time">
                <i class="el-icon-time"></i>2020-10-26
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- 企业展播end -->
</template>

<script>
console.log("home/components: famous is loaded");

import { postData } from '@/api/common';
import { LaobingUrl } from "@/api/laobing_url";

export default {
  name: "HomeFamous",
  components: {},
  data() {
    return {
      // 数据接收数组
      ret: [],
      url: LaobingUrl.index_modulars,
      param: {
        sort_id: 34 // 版块id=34
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
              console.log("Index Famous Response:", data);
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
          console.log("homepage Famous Json:", response);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

/******* famous list */
.img-list-famous {
  display: inline-block;
  width: 228px;
  height: 400px;
  background: #edf1f4;
  margin-right: 18px;
  overflow: hidden;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  .img-list-famous-main {
    position: relative;
    width: 228px;
    height: 228px;
  }
  img {
    width: 228px;
    height: 228px;
    border-radius: 3px 3px 0 0;
  }
  h3 {
    padding: 0 15px;
    margin: 10px 0;
    height: 21px;
    overflow: hidden;
  }
  span {
    font-size: 12px;
    font-weight: normal;
    color: #a0a0a0;
    margin: 0 15px;
  }
  p {
    text-align: left;
    margin: 5px auto;
    color: #787878;
    font-size: 0.8em;
    line-height: 1.5;
    padding: 0 15px;
    height: 56px;
    overflow: hidden;
  }
  span.famous-dict {
    display: block;
    width: 82px;
    height: 14px;
    background: url(~@/assets/img/famous-dict.png);
    float: right;
    margin: 10px 10px 0 0;
  }
}
.section-head {
  margin-bottom: 20px;

  .section-title {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      flex-grow: 7;
      text-align: center;
      list-style: none;
      cursor: pointer;
      border-right: 2px solid #d7d7d7;

      &:nth-last-child(1) {
        border-right: none;
      }
    }
  }
}
</style>
