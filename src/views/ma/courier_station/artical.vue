<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- <router-view :key="key" /> -->

          <!-- 内容 -->
          <div class="artical-container">
            <div class="artical-main">
              <div class="artical-head">
                <h1>标题：{{ ArticalDetail.data.title }}</h1>
                <p><a href="">{{ ArticalDetail.data.writer }}writer</a> {{ ArticalDetail.data.create_time }}</p>
              </div>
              <div class="artical-body">
                <p v-html="ArticalDetail.data.content"></p>
                <img src="@/assets/img/artical.png" />
                <p>数据库中文章内容较少填入测试文本“史无前例新品大爆发”，在“2020天猫双11全球狂欢季”新闻发布会上，阿里巴巴副总裁、天猫平台营运事业部总经理家洛身后的大屏幕上打出了这样一行大字。根据内部估算，今年将有5亿用户在双11期间主动访问新品会场，他们将让30个新品的成交额过亿，1000个新品成交金额过千万。</p>
                <img src="@/assets/img/artical2.png" />
                <p>当市场上有太多机会时，竞争比的是果敢与效率；但当市场趋于饱和时，竞争的重点就要回归到前瞻性视野和精细化运营。事实上，中国的互联网市场已经过了遍地是金、跑马圈地的粗放时代，巨头们的生存境况与它们对趋势的把控力息息相关，天猫小黑盒就充分体现了这一点。</p>
                <p>点赞数量：{{ ArticalDetail.data.good_count }}</p>

              </div>
              <div class="artical-foot">
                <div class="thumbup">
                  <div class="likebox" @click='likeFlag()' >0000</div>
                  <p id="likeNum">123</p>
                  <p>好文章，需要你的鼓励</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 内容 end -->

        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <cs-right-side-artical />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/courier_station/artical is loaded~~~~~~~~~~~~~~~~~~~~");
import CsRightSide from "@/views/ma/courier_station/components/rightside"
import axios from 'axios';
import { LaobingUrl } from "@/api/laobing_url";
// import { getData, postData } from "@/api/common";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CsArtical",
  components: {
    CsRightSide
  },
  data() {
    return {
      // artical
      url: LaobingUrl.courier_station_artical,
      ArticalDetail: [],
      // like flag
      thumbup: true
    };
  },
  // computed: { 
    
  // },
  created: function() {
    // set default likebox
    console.log("::::::"+this.thumbup);
    if(this.thumbup) {
      var boxObj = document.getElementsByClassName("likebox");
      boxObj.classList = "likebox is-active";
      console.log(boxObj)
      console.log("::::::应该加上了")
    }    
    console.log("::::::方法结束")

    const baseUrl = this.GLOBAL.basePath;
    const allUrl = baseUrl + this.url
    //json post prop
    const prop = {
      "soldier_station_id": this.$route.query //文章id
    };
    axios.post(allUrl, prop)
      .then(res => {
        //data属性是固定的用法,用于获取后台的实际数据
        this.ArticalDetail = res.data;
        console.log(res.data);
        // console.log("res.data::::::::"+res.data.data.content);
      }
    );
  },
  methods: { 
    // like func
    likeFlag() {
      var total;
      var _count = document.getElementById("likeNum");
      total = parseInt(_count.innerHTML);
      // console.log(total);

      var flag = event.target.className;
      // console.log(flag)
      var _flag = flag.match("is-active");
      // console.log(_flag);
      if (_flag != null) {
        // console.log("turn to gray");
        event.target.classList.remove("is-active");
        // total num -1
        total -= 1;
        _count.innerHTML = total;
      } else {
        // console.log("turn to red");
        event.target.classList.add("is-active");
        // total num +1
        total += 1;
        _count.innerHTML = total;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/******* new home page ***************/
.artical-container {
  margin-bottom: 35px;

  .artical-main {
    width: 100%;
    margin-bottom: 40px;

    .artical-head {
      width: 100%;
      font-size: 14px;
      margin-bottom: 40px;

      h1 {
        font-size: 30px;
        margin: 0 0 1em;
      }
      a {
        color: #4696a3;
        margin-right: 20px;
      }
    }
    .artical-body {
      width: 100%;
      margin-bottom: 40px;
      text-align: center;

      p {
        font-size: 16px;
        line-height: 1.5;
        text-align: left;
      }
      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }
    .artical-foot {
      width: 100%;

      .thumbup {
        width: 100%;
        height: 130px;
        text-align: center;
        font-size: 12px;
        .likebox {
          width: 73px;
          height: 73px;
          margin: 0 auto 20px;
          // background: url(../../../assets/img/like-gray.png);
          background: url(~@/assets/img/like-gray.png);
        }
        .likebox.is-active {
          background: url(~@/assets/img/like-red.png);
        }
        p {
          margin: 10px 0;
        }
      }
    }    
  }
}

</style>
