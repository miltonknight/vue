<!-- 老兵文化 - 比赛竞赛 -->
<template>
  <el-row>
    <div class="cmpt-main">
      <div class="cmpt-top">
        <div class="cmpt-cover">
          <img src="@/assets/img/competitions-top.jpg" alt="" />
        </div>
        <div class="cmpt-info">
          <h3>《难忘军号声》全国网络歌唱大赛</h3>
          <p>
            “老兵老兵网”传承红色基因，弘扬红色文化，坚持奏响主旋律，凝聚老兵本色正能量主阵地。现打造以加强红色主旋律，丰富退役老兵业余文化生活为主
            题的系列活动一《难忘军号声》全国网络歌唱大赛正式启动。
          </p>
          <div class="cmpt-progress">
            <img src="@/assets/img/logo-small.png" alt="" />
            活动时间：2020年10月 至 2020年12月
          </div>
        </div>
        <div class="cmpt-steps">
          <el-steps :active="2" align-center>
            <el-step title="开始活动报名" description="11.1-11.10"></el-step>
            <el-step title="投票公选" description="11.11-12.12"></el-step>
            <el-step title="线下公演PK" description="12.12-12.30"></el-step>
            <el-step title="参加年终庆典" description=""></el-step>
          </el-steps>
        </div>
      </div>

      <el-row :gutter="24">
        <!-- 左侧内容 -->
        <el-col :span="17">
          <div class="grid-content bg-purple">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="活动内容" name="first">
                <div class="cmpt-content">
                  <div class="cmpt-body">
                    <h2>《难忘军号声》全国网络歌唱大赛</h2>
                    <p>
                      “老兵老兵网”传承红色基因，弘扬红色文化，坚持奏响主旋律，凝聚老兵本色正能量主阵地。现打造以加强红色主旋律，丰富退役老兵业余文化生活为主题的系列活动一《难忘军号声》全国网络歌唱大赛正式启动。
                    </p>
                    <p>主办单位</p>
                    <p>Xxxxxxxxx</p>
                    <p>承办单位</p>
                    <p>Xxxxxxxxxx</p>
                    <p>独家网络合作单位</p>
                    <p>Xxxxxxxxxxxx</p>
                    <p>征集对象：</p>
                    <p>全体退役军人、退役军人家属、作品要求</p>
                    <p>
                      1，内容：主题鲜明，突出表现老兵热情讴歌党、讴歌祖国、讴歌人民、讴歌人民军队、讴歌老兵情怀。歌唱作品可选抒发对党的感恩之情，表达着对伟大祖国无比热爱的红色主题歌曲或内涵深刻，内容健康，格调高雅，积极向上等流行歌曲。禁止上传，关于政治，宗教，
                      涉韩，灰色等负面情绪歌曲。
                    </p>
                    <p>2，【短视频要求】</p>
                    <p>横屏录制比例16：9；</p>
                    <p>视频分辨率：1080p及以上；</p>
                    <p>视频格式：mp4；</p>
                    <p>视频时间：3-6分钟</p>
                    <p>提交的参赛视频应保证完整、清晰。</p>
                    <p>比赛视频传送到xxx app。</p>
                    <p>3，上传方式</p>
                    <p>
                      下载xx
                      app，注册账号，点上传视频，编辑一句精炼的短标题。点击上传，显示上传成功即可完成。
                    </p>
                    <img src="@/assets/img/ship.jpg" alt="" />
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="参赛视频" name="second">
                <div class="cmpt-content">
                  <div class="cmpt-body">
                    <div class="vote-box">
                      <div class="vote-box-video">
                        <img src="@/assets/img/vote-video.jpg" alt="" />
                      </div>
                      <div class="vote-box-info">
                        <h3>老兵01 楼XX</h3>
                        <p>
                          中国人民解放军93岁生日
                          湖州一群90多岁老兵含泪讲述当兵初心中国人民解放述当兵初心
                        </p>
                      </div>
                      <div class="vote-box-number">
                        12345<svg-icon
                          icon-class="little-heart"
                          class-name="card-panel-icon"
                        />
                      </div>
                    </div>
                    <div class="vote-box">
                      <div class="vote-box-video">
                        <img src="@/assets/img/vote-video.jpg" alt="" />
                      </div>
                      <div class="vote-box-info">
                        <h3>老兵01 楼XX</h3>
                        <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述</p>
                      </div>
                      <div class="vote-box-number">
                        12345<svg-icon
                          icon-class="little-heart"
                          class-name="card-panel-icon"
                        />
                      </div>
                    </div>
                    <div class="vote-box">
                      <div class="vote-box-video">
                        <img src="@/assets/img/vote-video.jpg" alt="" />
                      </div>
                      <div class="vote-box-info">
                        <h3>老兵01 楼XX</h3>
                        <p>
                          中国人民解放军93岁生日
                          湖州一群90多岁老兵含泪讲述当兵初心中国人民解放述当兵初心
                        </p>
                      </div>
                      <div class="vote-box-number">
                        12345<svg-icon
                          icon-class="little-heart"
                          class-name="card-panel-icon"
                        />
                      </div>
                    </div>
                    <div class="vote-box">
                      <div class="vote-box-video">
                        <img src="@/assets/img/vote-video.jpg" alt="" />
                      </div>
                      <div class="vote-box-info">
                        <h3>老兵01 楼XX</h3>
                        <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述</p>
                      </div>
                      <div class="vote-box-number">
                        12345<svg-icon
                          icon-class="little-heart"
                          class-name="card-panel-icon"
                        />
                      </div>
                    </div>
                    <div class="vote-box">
                      <div class="vote-box-video">
                        <img src="@/assets/img/vote-video.jpg" alt="" />
                      </div>
                      <div class="vote-box-info">
                        <h3>老兵01 楼XX</h3>
                        <p>
                          中国人民解放军93岁生日
                          湖州一群90多岁老兵含泪讲述当兵初心中国人民解放述当兵初心
                        </p>
                      </div>
                      <div class="vote-box-number">
                        12345<svg-icon
                          icon-class="little-heart"
                          class-name="card-panel-icon"
                        />
                      </div>
                    </div>
                    <div class="vote-box">
                      <div class="vote-box-video">
                        <img src="@/assets/img/vote-video.jpg" alt="" />
                      </div>
                      <div class="vote-box-info">
                        <h3>老兵01 楼XX</h3>
                        <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述</p>
                      </div>
                      <div class="vote-box-number">
                        12345<svg-icon
                          icon-class="little-heart"
                          class-name="card-panel-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <!-- 右侧内容 -->
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <div class="cmpt-side">
              <div class="cmpt-title">报名信息</div>
              <div class="side-body">
                <el-form :label-position="labelPosition" :model="form">
                  <el-form-item label="上传参赛视频">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="" />
                    </el-dialog>
                  </el-form-item>
                  <el-form-item label="作品名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="作品简介">
                    <el-input v-model="form.desc" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item size="large">
                    <el-button
                      type="el-button el-button--warning"
                      @click="onSubmit"
                    >
                      提交作品</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="cmpt-title">活动主办方</div>
              <div class="side-body">
                <img src="@/assets/img/logo-small.png" alt="" />
                <p>
                  “老兵老兵网”传承红色基因，弘扬红色文化，坚持奏响主旋律，凝聚老兵本色正能量主阵地。现打造以加强红色主旋律，丰富退役老兵业余文化生活为主题的系列活动一《难忘军号声》全国网络歌唱大赛正式启动。
                </p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
console.log("Views: /culture/competition/detail is loaded");

// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "CultureCompetitionDetail",
  components: {
    // Pagination
  },
  data() {
    return {
      activeName: "first",
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      form: {
        name: "",
        desc: "",
        dialogImageUrl: ""
      }
    };
  },
  computed: {},
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = "/culture/competition/detail";
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0;
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
    }
  }
};
</script>

<style lang="scss" scope>
.cmpt-main {
  .cmpt-top {
    clear: both;
    overflow: hidden;
    border: 1px solid #f0f0f0;
    margin-bottom: 20px;
    padding: 20px;

    .cmpt-cover {
      width: 350px;
      height: 180px;
      overflow: hidden;
      float: left;
      border-radius: 3px;
      margin-right: 20px;

      img {
        width: 350px;
        height: 180px;
      }
    }
    .cmpt-info {
      color: #262626;
      height: 180px;
      overflow: hidden;

      h3 {
        margin: 10px 0 15px;
        font-size: 18px;
      }
      p {
        line-height: 1.5;
        font-size: 14px;
        color: #a7a7a7;
        height: 99px;

        span {
          color: #e08714;
        }
      }
      .cmpt-total {
        font-size: 40px;
        margin: 20px auto;

        span {
          font-size: 18px;
          margin-right: 20px;
        }
      }
      .el-progress-bar__inner {
        background-color: #e08714;
      }
      .cmpt-progress {
        font-size: 14px;
        text-align: right;
        margin: 20px 0;
        color: #a7a7a7;

        img {
          color: #e08714;
          float: left;
          margin-top: -10px;
        }
      }
    }
    .cmpt-steps {
      margin-top: 20px;
      border-top: 1px solid #eee;
      padding: 50px 20px;

      .el-step__title.is-finish,
      .el-step__description.is-finish,
      .el-step__title.is-process,
      .el-step__description.is-process {
        color: #e08714;
      }
      .el-step__head.is-finish,
      .el-step__head.is-process,
      .el-step__line {
        color: #e08714;
        border-color: #e08714;
      }
      .is-finish {
        .el-step__line {
          background-color: #e08714;
        }
      }
    }
  }
  .cmpt-content {
    width: 100%;
    min-height: 400px;
    border-radius: 3px;
    border: 1px solid #f0f0f0;

    .cmpt-head {
      height: 50px;
      line-height: 50px;
      background: #f9f9f9;
      padding: 0 20px;
      border-bottom: 1px solid #f0f0f0;
    }
    .cmpt-body {
      padding: 20px 20px;
      margin-bottom: 50px;
      overflow: hidden;

      .cmpt-ttl {
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
      h2 {
        text-align: center;
      }
      p {
        line-height: 1.8;
        padding: 0 20px;
        text-align: justify;
      }
      img {
        display: block;
        margin: 30px auto;
        max-width: 100%;
      }
    }
  }
  .cmpt-side {
    width: 100%;
    border-radius: 3px;
    margin-bottom: 20px;

    .side-ttl {
      height: 50px;
      line-height: 50px;
      background: #fefefe;
      border-bottom: 1px solid #f0f0f0;

      span {
        float: right;
        font-size: 12px;
        color: #666;
      }
    }
    .side-body {
      border: 1px solid #f0f0f0;
      padding: 10px 20px 0px;
      margin-bottom: 20px;

      p {
        font-size: 12px;
        color: #666;
        line-height: 2;
        margin: 20px 0;
      }
      .el-form-item__label {
        width: 100% !important;
        text-align: left !important;
      }
      .el-upload--picture-card {
        width: 258px;
      }
      .el-button {
        background: #e08714;
        color: #fff;
        font-size: 16px;
        width: 100%;
      }
      .el-button[disabled] {
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }
    }
  }
  .cmpt-title {
    font-size: 20px;
    height: 40px;
    line-height: 40px;
  }
}
.el-tabs__header {
  margin: 0 0 0;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: none;
}
.el-tabs__item {
  color: #e08714;
  background: #fff;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
  // color: #e08714;
  color: #fff;
  background: #e08714;
}
.vote-box {
  width: 329px;
  height: 356px;
  float: left;
  margin: 0 20px 20px 0;
  overflow: hidden;
  border-radius: 3px;
  background: #f9f9f9;
  position: relative;

  &:nth-child(2n) {
    margin-right: 0;
  }
  .vote-box-video {
    width: 100%;
    height: 190px;

    img {
      margin: 0 !important;
      width: 100%;
    }
  }
  .vote-box-info {
    width: 100%;
    padding: 0 15px;

    h3 {
      font-size: 18px;
      line-height: 1.5;
      color: #262626;
      margin-bottom: 0;
      height: 27px;
      overflow: hidden;
    }
    p {
      font-size: 14px;
      color: #787878;
      line-height: 1.5;
      text-align: justify;
      height: 50px;
      overflow: hidden;
      padding: 0 !important;
      margin-bottom: 0;
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
    background-image: url("~@/assets/img/pass.png");
  }
}
</style>
