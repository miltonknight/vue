<template>
  <div class="footer-main">
    <div class="footer-container">
      <div class="footer-funs">
        <el-row :gutter="24">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <div class="footer-funs-about">
                <span>关于老兵老兵网</span>
                <a href="">商务合作</a>
                <a href="">城市加盟</a>
                <a href="">联系我们</a>
                <a href="">寻求报道</a>
                <a href="">关于我们</a>
                <a href="">我要投稿</a>
                <a href="">加入我们</a>
                <a href="">投资关系</a>
              </div>
            </div>
          </el-col>
          <el-col :span="11">
            <div class="grid-content bg-purple">
              <div class="footer-funs-cooperate">
                <span>合作网站</span>
                <!-- <img v-if="logo" :src="logo"> -->
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
                <a href=""><img src="@/assets/img/coo.png" /></a>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple">
              <div class="footer-funs-publish">
                <span>微信公众号</span>
                <div class="qr-box">
                  <img src="@/assets/img/qr-longbugle.png" />
                  <p>悠远的军号声</p>
                </div>
                <div class="qr-box">
                  <img src="@/assets/img/qr-oldbugle.png" />
                  <p>老军号</p>
                </div>
                <div class="qr-box">
                  <img src="@/assets/img/qr-vision.png" />
                  <p>老兵视界</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="footer-infos">
        <a href=""><img src="@/assets/img/footer-logo.png" alt=""></a>
        <div class="footer-infos-detail">
          <span>地址：沈阳市浑南区远航中路３甲１号</span>
          <span>邮编：110000</span>
          <span>电话：024-28670808</span>
          <span>传真：024-28670808</span>
          <span>邮箱：lblbsy@163.com备案号</span>
          <p>辽ICP备20005580号-1</p>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>

console.log("@/components/CommonFooter/index is loaded~~~~~~~~~~~~~~~~~~~");

export default {
  // name: "MaHomeheader",
  name: "CommonFooter",
  props: {},
  data() {
    return {

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
.footer-main {
  width: 100%;
  min-width: 1390px;
  height: 300px;
  margin: 0 auto;
  background-color: #3b3b3b;
  clear: both;
  overflow: hidden;

  .footer-container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 1030px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
    color: #fff;

    .footer-funs {
      border-bottom: 1px solid #81858a;
      display: flex;
      height: 220px;
      padding: 30px 0 15px;

        .el-row {
          margin: 0!important;
          width: 100%;
        }
        span {
          font-size: 1.2em;
          display: block;
          margin-bottom: 20px;
        }
      .footer-funs-about {
        a {
          cursor: pointer;
          display: inline-block;
          width: 48%;
          margin-bottom: 15px;  
          color: #fefefe;
          font-size: 0.9em;
          opacity: 0.7;
        }
      }
      .footer-funs-cooperate {
        a {
          cursor: pointer;
          display: inline-block;
          width: 120px;
          height: 30px;
          margin-bottom: 15px;  
        }
      }
      .footer-funs-publish {
        .qr-box {
          float: left;
          width: 85px;
          margin-right: 10px;
          text-align: center;

          img {
            max-width: 100%;
          }
          p {
            font-size: 12px;
            margin-top: 5px;
            color: #fefefe;
          }
        }
        :last-child {
          margin-right: 0;
        }
      }
    }
    .footer-infos {
      height: 80px;
      padding: 20px 0 0;
      display: flex;

      a {
        width: 205px;
        height: 25px;
        margin-right: 20px;
      }
      .footer-infos-detail {
        flex: 1;
        margin-top: -3px;

        span, p {
          font-size: 0.5em;
          color: #aaa;
          margin: 0 10px 0 0;
        }
      }
    }
  }
  .footer-logo {
    display: inline-block;
    vertical-align: middle;
  }
  .footer-operations {
    display: inline-block;
    height: 60px;
    width: 220px;
    float: right;
    padding: 20px 0;
    text-align: right;
    
    i {
      font-size: 1.3em;
      color: #fff;
      margin: 0 0 0 10px;
      float: right;
      cursor: pointer;
    }
    span {
      font-size: 14px;
      color: #fff;
      margin: 2px 0 0 10px;
      float: right;
      cursor: pointer;
    }
  }
}
</style>
