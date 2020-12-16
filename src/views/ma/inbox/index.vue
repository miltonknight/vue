<!-- 站内信 -->
<template>
  <div>
    <el-row :gutter="24">
      <div class="grid-content bg-purple setting-box">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="站内信" name="first">
            <div class="setting-body">

              <!-- <div class="inbox-msg unread" @click="dialogVisible = true"> -->
              <div class="inbox-msg unread" @click="getMsg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-close.png" alt="">
                  <i>NEW</i>
                </div>
                <div class="inbox-msg-content">
                  <h3 ref="msgTitle">老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div ref="msgContent" class="msg-content">1亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div>

              <div class="inbox-msg unread" @click="getMsg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-close.png" alt="">
                  <i>NEW</i>
                </div>
                <div class="inbox-msg-content">
                  <h3 ref="msgTitle">老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">2亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div>
              <div class="inbox-msg unread" @click="getMsg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-close.png" alt="">
                  <i>NEW</i>
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">3亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div><div class="inbox-msg" @click="getMsg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-open.png" alt="">
                  <i>NEW</i>
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">4亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div><div class="inbox-msg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-open.png" alt="">
                  <i>NEW</i>
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">5亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div><div class="inbox-msg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-open.png" alt="">
                  <i>NEW</i>
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">6亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div><div class="inbox-msg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-open.png" alt="">
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div><div class="inbox-msg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-open.png" alt="">
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div><div class="inbox-msg">
                <div class="inbox-msg-avatar">
                  <img src="@/assets/img/envelope-open.png" alt="">
                </div>
                <div class="inbox-msg-content">
                  <h3>老兵老兵网啊</h3>
                  <div class="inbox-msg-bm">
                    <div class="msg-content">亲爱的老兵老兵网用户，您好！为打造“老兵老兵网”持续影响力，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络，确保网络开通前基础构设精准落地，确保网络</div>
                    <div class="time">
                      <i class="el-icon-time"></i>2020-20-20 15:16
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <el-dialog
              :title="'来自：' + dialogMsg.title + ' 的消息'"
              :visible.sync="dialogVisible"
              :show-close="false"
              :open="getMsg"
              :lock-scroll="false"
              width="600px"
            >
              <span>{{ dialogMsg.content }}</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="readDone">关 闭</el-button>
                <!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
              </span>
            </el-dialog>
          </el-tab-pane>
          
        </el-tabs>

      </div>

    </el-row>
  </div>
</template>

<script>
console.log("Views: /inbox/index is loaded");

import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Inbox",
  components: {
    
  },
  data() {
    return {
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      dialogVisible: false,
      dialogMsg: {
        title: '老兵老兵网',
        content: '456'
      },
      // readingObj: new Object()
      readingObj: {
        type: Object
      }
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
    // this.$store.state.navactive = '/setting/index';
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 获取站内信内容，存入变量
    getMsg(e) {
      console.log(e.currentTarget);
      this.readingObj = e.currentTarget;
      console.log("🚀-msgTitle ", this.$refs.msgTitle.innerHTML);
      console.log("🚀-msgContent ", this.$refs.msgContent.innerHTML);
      this.dialogMsg.title = this.$refs.msgTitle.innerHTML;
      this.dialogMsg.content = this.$refs.msgContent.innerHTML;
      this.dialogVisible = true;
    },
    readDone() {
      // console.log(this.readingObj);
      this.dialogVisible = false;
      this.readingObj.classList.remove("unread");
      console.log("还需要请求后台方法，改变站内信阅读状态 ");
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            // const { code, msg, data } = response;
            const { code, data } = response;
            if (code === 20000) {
              if (data.code === 50003) {
                // console.log("::::::::::data.data.code" + response.data.code)
                response.data.total = 0
                // console.log(response.data.total)
                this.zwsj = true
              }  
              console.log("Get Inbox-Msg List Response:", data);
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

<style lang="scss" scoped>
.setting-box {

  .el-tabs>>>.el-tabs__header {
    padding: 10px 50px;
    background: #f5f7f9;
  }
  .el-tabs--card>>>.el-tabs__header .el-tabs__item,
  .el-tabs--card>>>.el-tabs__header .el-tabs__nav {
    border: none;
    transition: none;
  }
  .el-tabs>>>.el-form-item__label {
    padding-right: 20px;
  }
  /**** color fix */
  /** tab header */
  .el-tabs--card>>>.el-tabs__header .el-tabs__item.is-active,
  .el-tabs--card>>>.el-tabs__header .el-tabs__item:hover {
    border-bottom: none;
    color: #fff;
    background: #e08714;
  }
 
  .setting-body {
    min-height: 700px;
    border: 1px solid #f2f2f2;
    padding: 0px 20px;
    margin-bottom: 50px;
  }
  .inbox-msg {
    margin: 20px 0;

    .inbox-msg-avatar {
      width: 80px;
      height: 80px;
      margin-right: 20px;
      float: left;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
      i {
        position: absolute;
        right: 0;
        top: 0;
        color: #ff0000;
        font-size: 10px;
        display: none;
      }
    }
    .inbox-msg-content {
      // float: left;
      width: 100%;

      h3 {
        font-size: 18px;
        margin: 0 0 5px;
        font-weight: normal;
      }
      .inbox-msg-bm {
        overflow: hidden;
        display: flex;
        height: 54px;

        .msg-content {
          font-size: 14px;
          line-height: 1.5;
          color: #787878;
          width: 760px;
          height: 54px;
          flex-grow: 1;
        }
        .time {
          color: #a7a7a7;
          font-size: 14px;
          flex-grow: 2;
          align-self: flex-end;
          text-align: right;

          i {
            margin-right: 5px;
          }
        }
      }
    }
  }
  .inbox-msg.unread {
     
    h3 {
      font-weight: bold;
    }
    .inbox-msg-avatar i {
      display: block;
    }
  }
}
.el-button--default {
  color: #e08714;

  &:focus {
    color: #fff;
    border-color: #ebcba2;
    background-color: #ebcba2;
  }
  &:hover {
    color: #fff;
    border-color: #ebcba2;
    background-color: #ebcba2;
  }
}
.el-button--primary {
  background: #e08714;
  border-color: #e08714;

  &:focus {
    color: #fff;
    border-color: #ecc18a;
    background-color: #ecc18a;
  }
  &:hover {
    color: #fff;
    border-color: #ecc18a;
    background-color: #ecc18a;
  }
}
.el-dialog__body span {
  line-height: 2;
}
.dialog-footer .el-button--default {
  color: #fff;
  background: #e08714;
  border-color: #e08714;

  &:focus {
    color: #fff;
    border-color: #ecc18a;
    background-color: #ecc18a;
  }
  &:hover {
    color: #fff;
    border-color: #ecc18a;
    background-color: #ecc18a;
  }
}
</style>
