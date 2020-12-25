<!-- 老兵搬家 -->
<template>
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-moving.jpg" alt="">
    </div>
    <div class="corp-box">
      <div class="corp-main">
        <div class="corp-detail">
          <div class="corp-detail-ttl">
            沈阳搬家 | 支持空调移机、长途搬家、厂房搬迁等服务 | 签订合同、价格优惠<span>2020-10-13 更新</span>
          </div>
          <div class="corp-detail-wrapper">
            <div class="corp-detail-logo">
              <img src="@/assets/img/corp-logo.jpg" alt="">
            </div>
            <div class="corp-detail-infos">
              <p><i>类</i>别：居民搬家</p>
              <p>服务区域：铁西 于洪 浑南 皇姑 沈河 大东 沈北新区 </p>
              <p>联 系 人：经理 </p>
              <p>商家地址：浑南 - 奥体中心 - 全市连锁就近派车</p>
              <p>服务承诺：服务保障计划</p>

              <div class="corp-apply">
                <el-button type="el-button el-button--warning" @click="handleCall">
                  <svg-icon icon-class="tel" class-name="card-panel-icon" /> 联系商家
                </el-button>
              </div>
            </div>
            <div class="corp-detail-metal">
              <img src="@/assets/img/diamond.png" alt="钻石商家">
              <!-- <img src="@/assets/img/gold.png" alt="黄金商家">
              <img src="@/assets/img/silver.png" alt="白银商家"> -->
            </div>
          </div>
        </div>

      </div>
      
      <div class="corp-main">
        <div class="corp-head">
          <span>服务内容</span>
        </div>
        <div class="corp-body">
          <p>2020年沈阳沈阳老兵搬家有限公司与老兵老兵网达成战略合作，在优质服务和信誉保证的前提下，老兵老兵网会员凭借电子会员凭证可享受沈阳老兵搬家有限公司优先服务，一对一专业答疑解惑，获得个性化解决方案等全面细化的专业服务，并格外享有98折搬家服务套餐优惠。</p>
          <p>『公司简介』</p>
          <p>沈阳奉天老兵搬家公司是老牌搬家搬场公司，公司每个员工上岗前都要经过严格的培训，不合格不上岗。本公司一直秉持“顾客至上”的经营理念，以服务客户为己任，追求安全、高效、及时、认真的服务宗旨，并探索出一套严格的管理制度和高效、合理的搬家运作程序，让客户省心、放心。作为一家专业的搬家搬场公司，为您提供专业快捷24小时的搬家服务。还可提供夜间服务，价格合理，无额外费用，全市均有分布，帮您节省搬家时间</p>
          <p>『服务范围』</p>
          <p>居民搬家、小型搬家、长途搬家搬迁，可承接全国各地整车、零单长途运输业务、起重吊装、钢琴搬运、家具拆装、搬家搬场、搬运人力、国际搬家、全国搬家、学生搬家、白领搬家、个人搬家、公司搬家、仓库搬迁、设备搬迁、工业搬场、空调移机、空调拆机、空调装机等业务，可服务全市区，欢迎来电咨询。</p>
          <p>『服务介绍』</p>
          <p>1、搬家服务——居民搬家，公司搬家，企事业单位搬迁，长短途搬家、搬场、搬钢琴、搬易碎物品，搬贵重物品，长途搬家搬迁，可承接全国各地整车、零单长途运输业务。</p>
          <p>2、空调服务——家用空调移机，拆装挂机空调、柜机空调、变频空调、中央空调；可以只拆，或只安装；可以做外机支架、加氟、加管、清洗，质保售后、随时上门、免费搬运、回收服务、理赔服务、上门免费。</p>
          <p>3、家具拆装——各种家具、家私拆装，专业高级技工服务。</p>
          <p>4、打包服务——贵重物品整理、提供纸箱、整理箱等各种包装材料，代打包装，整理物品。</p>
          <p>5、计时劳务——库房整理、货柜装卸、倒楼、倒库房、货物寄存等。</p>
          <p>6、运输车型——金杯、厢货（厢货带尾板），平板车、叉车、吊车、工程类、建设类、运输类机械装备和各类工具，轮式起重机、随车起重机、随车吊，平板运输车等各种型号吊车、重中型卡车、汽车式高空作业车、特种专用车辆。</p>
          <p>7、中途装卸：中途可增加装卸地点，每多装卸一个地点合理增加费用。</p>
        </div>
      </div>
    </div>
    <el-dialog
      :title="'商家：XXXXX的联系方式为：'"
      :visible.sync="dialogVisible"
      :show-close="false"
      :lock-scroll="false"
      width="500px"
    >
      <span style="font-size:30px; color:#e08714;">固定电话：4008208820</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button>关 闭</el-button> -->
        <el-button style="background-color:#e08714; border-color:#e08714;" type="primary" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
console.log("Views: /house-moving/detail is loaded");

import { LaobingUrl } from "@/api/laobing_url";
import { postData } from "@/api/common";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "HouseMovingDetail",
  components: { },
  data() {
    return {
      // article
      url: LaobingUrl.modular_articles,
      ArticleDetail: [],
      // like flag
      thumbup: true,
      dialogVisible: false
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/ma/home/index';
  },
  methods: { 
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              console.log("Get Annals Article Response:", data);
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
      // json post prop
      var params = {
        // 从url中获取文章id, sortid
        "article_id": this.$route.query.id,
        "sort_id": this.$route.query.sort_id,
        // uid用户token中获取
        // "uid": '0a44f30462e742879f5fbd15d2fda9e6'
        "uid": this.user_id
      };
      console.log(this.$route.path);
      // this.$route.path = '/annals/index'; // read only
      this.postDataFromUI(LaobingUrl.modular_articles, params)
        .then(response => {
          this.ArticleDetail = response;
        });
    },
    handleCall() {
      this.dialogVisible = true;
    }

  }
};
</script>

<style lang="scss" scoped>
.banner {
  margin: 0 auto 20px;

  img {
    width: 100%;
  }
}
.corp-detail {
  padding: 20px;
  position: relative;

  .corp-detail-ttl {
    border-bottom: 1px solid #eee;
    margin-bottom: 15px;
    padding-bottom: 20px;
    font-size: 18px;

    span {
      color: #a7a7a7;
      float: right;
      line-height: 20px;
      font-size: 12px;
    }
  }
  .corp-detail-wrapper {
    display: flex;
  
    .corp-detail-logo {
      flex-grow: 2;
    }
    .corp-detail-infos {
      flex-grow: 2;

      h1 {
        font-size: 30px;
        margin: 0 0 20px;
      }
      p {
        margin: 0 0 26px;
        font-size: 14px;
        color: #a7a7a7;

        i {
          letter-spacing: 2em;
          font-style: normal;
        }
      }
      .corp-apply {

        .el-button {
          background: #e08714;
          font-size: 24px;
        }
        svg {
          margin-right: 5px;
        }
      }
    }
    .corp-detail-metal {
      flex-grow: 1;
      align-self: center;
    }
  }  
}

.corp-main {
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;

  .corp-head {
    background: #efc289;

    span {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      background: #e08714;
      display: inline-block;
      color: #fff;
      font-size: 24px;
    }
  }
  .corp-body {
    padding: 20px 20px 0;
    margin-bottom: 50px;

    p {
      padding: 0 20px;
      text-align: justify;  
      line-height: 1.5;
      margin: 10px 0;
    }
    img {
      display: block;
      margin: 30px auto;
      max-width: 100%;
    }
  }
}
</style>
