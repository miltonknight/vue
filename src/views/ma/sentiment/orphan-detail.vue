<!-- 老兵情怀 - 孤儿救治 -->
<template>
  <!-- <div> -->
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-sentiment.jpg" alt="">
    </div>
    <div class="critical-box">
      <div class="critical-top">
        <img src="@/assets/img/orphan-top.jpg" alt="">
        <div class="critical-top-infos">
          <span>进行中</span>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动
        </div>
      </div>
      <div class="critical-main">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="活动公告" name="first">
            <div class="critical-body">
              <h1>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h1>
              <div class="critical-ttl">
                <span></span>活动时间
              </div>
              <div class="critical-detail">
                <p>2020年3月22日至2021年2月7日</p>
              </div>
              <div class="critical-ttl">
                <span></span>活动地点
              </div>
              <div class="critical-detail">
                <p>沈阳</p>
              </div>
              <div class="critical-ttl">
                <span></span>活动主题
              </div>
              <div class="critical-detail">
                <p>军号是一代代老兵的难忘记忆，军号就是命令，就是枕戈待旦，体现军人不忘初心，牢记使命，不畏艰难，甘于奉献的精神。不论战争年代还是和平时期，军号都凝结着军人的使命和担当。军号是信仰，军号是军魂，军号是血性，军号是本色。每一位老兵最熟悉的声音莫过于那一声声嘹亮的军号声，那一声声让人魂牵梦绕的军号声。老兵救助活动是一碗碗心灵的鸡汤，是一次次老兵回忆的旅程，是一首首老兵嘹亮的军歌，是一声声难忘的军号声。通过老兵救助活动抒发老兵友谊的大情怀，彰显老兵互助的人间大爱，具有直抵老兵身心的无穷力量。</p>
              </div>
              <div class="critical-ttl">
                <span></span>活动地点
              </div>
              <div class="critical-detail">
                <p>沈阳</p>
              </div>
              <div class="critical-ttl">
                <span></span>救助对象及申请条件
              </div>
              <div class="critical-detail">
                <p>（一）救助对象：</p>
                <p>全国的退役老兵及其他优抚对象，具体包括：退伍红军老战士（含西路红军老战士和红军失散人员）、军队离退休干部及退休士官、军队转业干部、复员干部、退役士兵、残疾军人、复员军人、烈士遗属、因公牺牲军人遗属、病故军人遗属。</p>
                <p>（二）申请条件：</p>
                <p>1、五个必备条件：</p>
                <p>①救助申请人必须是退役老兵。</p>
                <p>②救助申请人必须是老兵老兵网的注册用户。</p>
                <p>③救助申请人必须有老部队战友的签名推荐。</p>
                <p>④救助申请人家庭人均收入在本地区月最低工资标准以下的。</p>
                <p>⑤救助申请人必须经过老兵老兵网组织的实地考察审核，并获得审验通过。</p>
              </div>

            </div>
          </el-tab-pane>
          
          <el-tab-pane label="筛选人员" name="second">
            <div class="critical-body">
              <h1>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h1>
              <div class="critical-names">
                <p>张三 188XXXX888   张三 188XXXX888   张三 188XXXX888</p>
                <p>张三 188XXXX888   张三 188XXXX888   张三 188XXXX888</p>
                <p>张三 188XXXX888   张三 188XXXX888   张三 188XXXX888</p>
                <p>张三 188XXXX888   张三 188XXXX888   张三 188XXXX888</p>
                <p>张三 188XXXX888   张三 188XXXX888   张三 188XXXX888</p>
                <p>张三 188XXXX888   张三 188XXXX888   张三 188XXXX888</p>
                <br><br>
                <p>咨询热线：400 xxx 8888</p>
                <p>微信咨询：二维码 发送您想了解的活动内容，即时获取相关信息</p>
                <p>网站后台根据报名提交上来的资料针对以下三条进行初步审核：</p>
                <p>1、老兵老兵网注册用户</p>
                <p>2、退役老兵孤儿</p>
                <p>3、有老部队战友签名推荐。</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="社会调查" name="third">
            <div class="critical-body">
              <h1>2020年首届老兵老兵网救助社会调查</h1>
              <div class="critical-names">
                <p>老兵老兵网组织专门人员对通过网络初核人员前20-50名针对以下进行实地考察，老兵老兵网组织的实地考察审核，。</p>
                <p>1、救助申请人家庭人均收入在本地区月最低工资标准以下的。</p>
                <p>2、救助申请人必须经过老兵老兵网组织的实地考察审核，并获得审验通过。</p>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="确定人员" name="fourth">
            <div class="critical-body">
              <h1>2020年首届老兵老兵网救助-确定人员</h1>
              <div class="critical-names">
                <p>确定人员确定人员确定人员确定人员确定人员确定人员确定人员</p>
                <p>确定人员确定人员确定人员确定人员确定人员确定人员确定人员确定人员确定人员</p>
                <p>确定人员确定人员确定人员确定人员确定人员确定人员确定人员</p>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="结果公示" name="fifth">
            <div class="critical-body">
              <h1>恭喜以下人员获得2020年老兵老兵网救助资金</h1>
              <div class="critical-names">
                <p>获得救助金50万元名单</p>
                <p>张三 188XXXX888  100万分</p>
                <br>
                <p>获得救助金30万元名单</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   95万分</p>
                <br>
                <p>获得救助金30万元名单</p>
                <p>张三 188XXXX888   90万分</p>
                <p>李四 188XXXX888   88万分</p>
                <p>张三 188XXXX888   85万分</p>
                <p>李四 188XXXX888   80万分</p>
                <p>张三 188XXXX888   76万分</p>
                <br>
                <p>入围老兵孤儿将获得1000元每人每月，年满十八周岁，考上大学的捐助全部学费和基本生活费。</p>
                <br>
                <p>请以上人员保持手机畅通，3个工作日内将有工作人员与您取得联系，沟通救助资金事宜。</p>
                <p>咨询热线：400 xxx 8888</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="实施救助" name="sixth">
            <div class="critical-body">
              <h1>《幸福中国一起走》— 老兵老兵网2020年老兵救助活动</h1>
              <div class="orphan-video">
                <div class="video-play">
                  <img src="@/assets/img/videoplay.jpg" alt="">
                </div>
                <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                <span>9999次播放</span>
              </div>
            </div>
          </el-tab-pane>
          
        </el-tabs>
        
      </div>
    </div>
  </el-row>
  <!-- </div> -->
</template>

<script>
console.log("Views: /sentiment/orphan-detail is loaded");
// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "SentimentOrphanDetail",
  components: {
    // Pagination
  },
  data() {
    return {
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 60, // 版块id
        page: 1,
        limit: 10
      }
    };
  },
  computed: { },
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = '/sentiment/index';
  },
  mounted() { },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
      this.searchBySort(tab.name);
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true;
              }  
              console.log("Get Annals List Response:", data);
              console.log(msg);
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
    },
    searchBySort(sortId) {
      this.listQuery.sort_id = sortId;
      this.listQuery.page = 1;
      this.listQuery.limit = 10;
      this.fetchData();
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" >
.banner {
  margin: 0 auto 20px;

  img {
    width: 100%;
    border-radius: 3px;
  }
}
.critical-box {

  .critical-top {
    width: 1040px;
    height: 560px;
    position: relative;
    border-radius: 3px;
    margin-bottom: 20px;

    img {
      width: 1040px;
      height: 560px;
    }
    .critical-top-infos {
      height: 100px;
      line-height: 100px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 32px;
      color: #fff;
      background: rgba(0,0,0,0.3);
      padding: 0 0 0 30px;

      span {
        display: block;
        width: 250px;
        height: 100px;
        line-height: 100px;
        background: #e08714;
        float: right;
        text-align: center;
      }
    }
  }
  .critical-main {
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    margin-bottom: 80px;
    min-height: 300px;

    /******** for the tabs */
    .el-tabs__nav-scroll {
      background: #efc289;
    }
    .el-tabs--card>.el-tabs__header,
    .el-tabs--card>.el-tabs__header .el-tabs__nav,
    .el-tabs--card>.el-tabs__header .el-tabs__item {
      border: none;
    }
    .el-tabs__item {
      width: 173px;
      height: 50px;
      line-height: 50px;
      font-style: italic;
      letter-spacing: 2px;
      background: #efc289;
      text-align: center;
      font-size: 18px;

      &:hover {
        background: #e08714;
        color: #fff;
      }
      // &:nth-last-child(1) {
      //   width: 173px;
      // }
      &.is-active {
        background: #e08714;
        font-weight: bold;
        color: #fff;
      }
      &.is-disabled {
        color: #919191;
        cursor: not-allowed;

        &:hover {
          color: #919191;
          background: #efc289;
        }
      }  
    }
    /******** for the tabs end */
    .critical-body {
      padding: 20px;
      margin-bottom: 50px;

      h1 {
        margin: 20px 0 30px;
        font-size: 30px;
        text-align: center;
      }
      .critical-ttl {
        margin: 20px 0;
        font-size: 16px;
        color: #262626;

        span {
          padding: 5px;
          display: inline-block;
          background: #e08714;
          position: relative;
          // top: 1px;
          margin-right: 10px;
        }
      }
      .critical-detail {
        padding-left: 20px;
        color: #666;

        p {
          line-height: 2;
          text-align: justify;
          font-size: 14px;
        }
      }
    }
  }
}
.critical-infos {
  width: 600px;
  margin: 50px auto;

  p {
    text-align: center;
    color: red;
    font-style: italic;
    font-size: 14px;
    font-weight: bold;
  }

  .el-textarea__inner {
    height: 115px;
  }
  .success {
    display: block;
    width: 200px;
    height: 40px;
    color: #fff;
    background: #e08714;
    margin: 50px auto 0;
    font-size: 16px;
    letter-spacing: 3px;
  }
  .el-input.is-active .el-input__inner, 
  .el-select .el-input.is-focus .el-input__inner,
  .el-input__inner:focus,
  .el-radio__inner:hover,
  .el-textarea__inner:focus,
  .el-upload--picture-card:hover, 
  .el-upload:focus {
    border-color: #e08714;
  }
  .el-radio__input.is-checked .el-radio__inner {
    border-color: #e08714;
    background: #e08714;
  }
  .el-radio__input.is-checked+.el-radio__label {
    color: #e08714;
  }
}
.el-select-dropdown__item.selected {
  color: #e08714;
}
.critical-vote {
  overflow: hidden;

  .vote-box {
    width: 319px;
    height: 356px;
    float: left;
    margin: 0 20px 20px 0;
    overflow: hidden;
    border-radius: 3px;
    background: #f9f9f9;
    position: relative;

    &:nth-child(3n) {
      margin-right: 0;
    }
    .vote-box-video {
      width: 100%;
      height: 180px;
    }
    .vote-box-info {
      width: 100%;
      padding: 0 15px;

      h3 {
        font-size: 18px;
        color: #262626;
      }
      p {
        font-size: 14px;
        color: #787878;
        line-height: 1.5;
        text-align: justify;
        height: 62px;
        overflow: hidden;
      }
    }
    .vote-box-number {
      text-align: right;
      font-size: 14px;
      padding: 0 15px;
      margin-bottom: 15px;

      svg {
        margin-left: 5px;
        font-size: 2em;
        position: relative;
        top: 5px;
        color: #ccc;
      }
    }
    .vote-box-number.agree svg {
      color: #ff0000;
    }
    .pass {
      position: absolute;
      left: 5px;
      bottom: 5px;
      width: 126px;
      height: 85px;
      background-image: url('~@/assets/img/pass.png');
    }
  }
}
.critical-names {
  width: 940px;
  text-align: center;
  overflow: hidden;
  margin: 50px auto;
      
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    float: left;
    margin: 0 20px 20px 0;

    &:nth-child(8n) {
      margin-right: 0;
    }
  }
}
.orphan-video {
  width: 720px;
  margin: 50px auto;

  span, p {
    font-size: 12px;
    color: #a7a7a7;
  }
}
</style>
