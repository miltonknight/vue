<!-- 老兵政策 -->
<template>
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-telecom.jpg" alt="">
    </div>
    <div class="telecom-box">
      <div class="telecom-head">选号中心</div>
      <div class="telecom-numbody">
        <div class="number-box">
          <div class="nums is-active">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
          <div class="nums">
            <p><span>靓</span>176 42080047</p>
            <span>预存: 500元</span>
          </div>
        </div>
        <div class="operate-box">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="真实姓名">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="formLabelAlign.tel"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码">
              <el-input v-model="formLabelAlign.id"></el-input>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="formLabelAlign.address"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-radio-group v-model="formLabelAlign.rules" size="medium">
                <el-radio label="我同意《老兵救助申请线上协议》"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="el-button el-button--warning" @click="onSubmit">确定申请</el-button>
            </el-form-item>
          </el-form>

        </div>
      </div>
    </div>
    <div class="telecom-box">
      <div class="telecom-head">移动业务产品</div>
      <div class="telecom-body">
        <div class="telecom-ttl"><span></span>5G冰激凌套餐</div>
        <p>推出高速率的系列5G冰激凌套餐，提供包括500Mbps的5G优享服务、1Gbps的5G极速服务和2Gbps的5G尊享服务和联通PLUS黄金会员的沃视频、沃阅读、沃云盘、沃助理、视频彩铃、优惠购等权益服务。中国联通采用世界先进的NSA/SA的5G组网技术，5G/4G网络覆盖良好，高铁实现连续覆盖，为用户提供了更加完善的5G/4G网络服务，让用户感受语音、视频的极致体验。</p>
        <div class="telecom-ttl"><span></span>流量王套餐、互联网套餐、校园套餐等系列产品</div>
        <p>流量王套餐、互联网套餐、本地个性化套餐、校园套餐、农村产品，提供300Mbps的5G基础服务，面向不同用户群体，套餐设置灵活，结构简单，内容丰富，满足用户个性化，多样性需求。</p>
      </div>
      <div class="telecom-head">港澳台、国际漫游业务产品</div>
      <div class="telecom-body">
        <div class="telecom-ttl"><span></span>数据漫游包天产品</div>
        <p>在194个国家和地区推出数据漫游费用日封顶，当日达到25元、35元或55元后不再收取数据漫游费用，包含至少200MB、100MB或60MB高速流量，达量限速至 384kbps。无需订购，无忧使用。</p>
        <div class="telecom-ttl"><span></span>1GB漫游高速流量月叠加包</div>
        <p>分为港澳台（29元1GB）和其他20个方向（39元1GB），高速流量在产品覆盖方向共享，当月流量超出1GB自动叠加订购，不使用不收费。</p>
      </div>
      <div class="telecom-head">创新的2I2C业务</div>
      <div class="telecom-body">
        <p>2I2C（To Internet To Customer）业务由中国联通首创，聚焦年轻的互联网用户，与知名互联网企业深度合作，以流量经营为特色，开发物美价廉的2I2C产品，通过合作方触点直接触达最终用户，通过互联网化的手段满足了客户的个性化信息通信服务需求。</p>
        <p>2I2C产品针对不同互联网用户群的特点进行了针对性设计，比如腾讯王卡的定向免流、蚂蚁宝卡线下支付送流量、滴滴王卡的司机乘客隐私号等，通过超值的价格，带给用户 “告别WIFI，想用就用”的畅玩体验。</p>
      </div>
      <div class="telecom-head">固定通信业务</div>
      <div class="telecom-body">
        <p>中国联通固定通信业务包括：宽带、IPTV、固定电话等。同时为满足家庭用户的“宽带、移动通信、语音、高清电视、家庭组网”等家庭信息化服务需求，中国联通为家庭用户提供家庭融合套餐。</p>
        <div class="telecom-ttl"><span></span>宽带业务</div>
        <p>中国联通作为宽带一级运营商，有能力、有信心为广大客户提供优质的宽带服务，并具有三方面优势：一是速度优势：中国联通光纤网络已覆盖2.4亿家庭，为用户提供高达千兆的宽带接入服务；二是品质优势：借助丰富的骨干传输资源和国际互连出口，中国联通宽带网络体验居于国内领先地位。三智能优势：中国联通能够为用户提智慧家庭、高清视频用智能应用服务。</p>
        <div class="telecom-ttl"><span></span>固定固话</div>
        <p>中国联通固话业务具有语音清晰、绿色环保、通话保密等特点，适合家庭用户日常通信使用。</p>
      </div>
      <div class="telecom-head">丰富的各类创新增值业务</div>
      <div class="telecom-body">
        <p>基于4/5G网络、人工智能、VR等等技术推出丰富多彩的创新增值业务，相继推出了沃助理、视频材料、沃学习、沃畅游、沃阅读、畅视权益、沃家影视、沃家应用、5G沃视频和VR业务等增值业务。</p>
      </div>
      <div class="telecom-head">全覆盖的业务办理渠道</div>
      <div class="telecom-body">
        <p>中国联通各项业务用户可以通过联通实体营业厅、网上营业厅、手机营业厅及10010客服电话、短信营业厅、微信公众号等多种渠道咨询、办理。</p>
      </div>
    </div>
    
  </el-row>
</template>

<script>
console.log("Views: /telecom/index is loaded");
// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Telecom",
  components: {
    // Pagination
  },
  data() {
    return {
      navselected: '/ma/telecom/index',
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
      },
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        tel: '',
        id: '',
        address: '',
        rules: ''
      }
    };
  },
  computed: { 
    ...mapGetters(["user_id", "access_token", "navactive"])
  },
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = '/ma/telecom/index';
  },
  mounted() { },
  methods: { 
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
    onSubmit() {
      console.log('submit!');
    },
    numberSelect() {

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
.telecom-box {
  margin-bottom: 20px;
  clear: both;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-radius: 3px;

  .telecom-head {
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    color: #262626;
    background: #f9f9f9;
  }
  .telecom-numbody {
    clear: both;
    overflow: hidden;
    height: 440px;
    width: 100%;

    .number-box {
      float: left;
      width: 780px;

      .nums {
        float: left;
        width: 260px;
        height: 110px;
        padding: 25px 20px;
        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        border-color: #cfd7d8;

        &.is-active {
          border-width: 2px;
          border-color: #e08714;
        }
        p {
          font-size: 28px;
          margin: 0 0 10px 0;

          span {
            font-size: 12px;
            color: #fff;
            padding: 4px;
            margin: 0 10px 0 0;
            background: #4696a3;
            position: relative;
            top: -5px;
          }
        }
        span {
          font-size: 16px;
          color: #939393;
          margin-left: 32px;
        }
      }
    }
    .operate-box {
      float: left;
      width: 258px;
      padding: 10px;

      .el-form-item {
        margin-bottom: 0;
      }
      .el-form--label-top .el-form-item__label {
        padding: 0 0 7px;
        line-height: 30px;
      }
      .el-input__inner {
        height: 35px;
        line-height: 35px;
      }
      .el-form-item__content {
        margin-bottom: 5px;
      }
      .el-radio__input.is-checked .el-radio__inner {
        border-color: #e08714;
        background: #e08714;
      }
      .el-radio__input.is-checked+.el-radio__label {
        color: #e08714;
      }
      .el-button {
        width: 100%;
      }
      .el-form--label-top .el-form-item__label {
        padding: 0 0 3px;
      }
    }
  }
  .telecom-body {
    padding: 0px 20px;
    margin-bottom: 20px;

    .telecom-ttl {
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
    p {
      padding: 0 20px;
      text-align: justify;  
      line-height: 1.5;
    }
  }
}

</style>
