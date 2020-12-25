<!-- 创就业 -->
<template>
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-job.jpg" alt="">
    </div>
    <div class="job-position">
      <span>服务范围：</span>
      <v-distpicker
        :province="address.province"
        :city="address.city"
        @province="onChangeProvince"
        @city="onChangeCity"
      >
      </v-distpicker>
    </div>
    <div class="job-list">
      <div class="job-box" @click="handleCall">
        <a class="box-info" href="/#/ma/jobs/job-detail">
          <h3>苏家屯区 | 二手车金融销售代表</h3>
          <div class="box-info-money"><span>6000-9000</span>元/月</div>
          <p><span>五险一金</span><span>交通补助</span><span>话补</span></p>
        </a>
        <div class="box-posotion">
          <p>上海曌扬汽车服务有限公司 </p>
          销售代表  |  不限  |  不限
        </div>
        <div class="box-btn">
          <el-button type="el-button el-button--warning"><svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家</el-button>
        </div>
        <div class="box-time">
          <span class="time"><i class="el-icon-time"></i>2020-11-30</span>
        </div>
      </div>

      <div class="job-box" @click="handleCall">
        <a class="box-info" href="/#/ma/jobs/job-detail">
          <h3>苏家屯区 | 二手车金融销售代表</h3>
          <div class="box-info-money"><span>6000-9000</span>元/月</div>
          <p><span>五险一金</span><span>交通补助</span><span>话补</span></p>
        </a>
        <div class="box-posotion">
          <p>上海曌扬汽车服务有限公司 </p>
          销售代表  |  不限  |  不限
        </div>
        <div class="box-btn">
          <el-button type="el-button el-button--warning"><svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家</el-button>
        </div>
        <div class="box-time">
          <span class="time"><i class="el-icon-time"></i>2020-11-30</span>
        </div>
      </div>

      <div class="job-box" @click="handleCall">
        <a class="box-info" href="/#/ma/jobs/job-detail">
          <h3>苏家屯区 | 二手车金融销售代表</h3>
          <div class="box-info-money"><span>6000-9000</span>元/月</div>
          <p><span>五险一金</span><span>交通补助</span><span>话补</span></p>
        </a>
        <div class="box-posotion">
          <p>上海曌扬汽车服务有限公司 </p>
          销售代表  |  不限  |  不限
        </div>
        <div class="box-btn">
          <el-button type="el-button el-button--warning"><svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家</el-button>
        </div>
        <div class="box-time">
          <span class="time"><i class="el-icon-time"></i>2020-11-30</span>
        </div>
      </div>

      <div class="job-box" @click="handleCall">
        <a class="box-info" href="/#/ma/jobs/job-detail">
          <h3>苏家屯区 | 二手车金融销售代表</h3>
          <div class="box-info-money"><span>6000-9000</span>元/月</div>
          <p><span>五险一金</span><span>交通补助</span><span>话补</span></p>
        </a>
        <div class="box-posotion">
          <p>上海曌扬汽车服务有限公司 </p>
          销售代表  |  不限  |  不限
        </div>
        <div class="box-btn">
          <el-button type="el-button el-button--warning"><svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家</el-button>
        </div>
        <div class="box-time">
          <span class="time"><i class="el-icon-time"></i>2020-11-30</span>
        </div>
      </div>

      <div class="job-box" @click="handleCall">
        <a class="box-info" href="/#/ma/jobs/job-detail">
          <h3>苏家屯区 | 二手车金融销售代表</h3>
          <div class="box-info-money"><span>6000-9000</span>元/月</div>
          <p><span>五险一金</span><span>交通补助</span><span>话补</span></p>
        </a>
        <div class="box-posotion">
          <p>上海曌扬汽车服务有限公司 </p>
          销售代表  |  不限  |  不限
        </div>
        <div class="box-btn">
          <el-button type="el-button el-button--warning"><svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家</el-button>
        </div>
        <div class="box-time">
          <span class="time"><i class="el-icon-time"></i>2020-11-30</span>
        </div>
      </div>

      <div class="job-box" @click="handleCall">
        <a class="box-info" href="/#/ma/jobs/job-detail">
          <h3>苏家屯区 | 二手车金融销售代表</h3>
          <div class="box-info-money"><span>6000-9000</span>元/月</div>
          <p><span>五险一金</span><span>交通补助</span><span>话补</span></p>
        </a>
        <div class="box-posotion">
          <p>上海曌扬汽车服务有限公司 </p>
          销售代表  |  不限  |  不限
        </div>
        <div class="box-btn">
          <el-button type="el-button el-button--warning"><svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家</el-button>
        </div>
        <div class="box-time">
          <span class="time"><i class="el-icon-time"></i>2020-11-30</span>
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
console.log("Views: /jobs/index is loaded");
// import Pagination from "@/components/Pagination";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";
import VDistpicker from 'v-distpicker'

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Jobs",
  components: {
    VDistpicker 
    // Pagination
  },
  data() {
    return {
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
      address: {
        "province": "辽宁省",
        "city": "沈阳市"
      },
      dialogVisible: false
    };
  },
  computed: { 
    ...mapGetters(["user_id", "access_token", "navactive"])
  },
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = '/ma/home/index';
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

    },
    onSelected(data) {
      alert(data.province + ' | ' + data.city)
      console.log(data)
    },
    choose() {
      this.show = !this.show
    },
    onChangeProvince(a) {
      console.log(a) 
      // this.txt1 = a.value + '-'
    },    
    onChangeCity(a) {
      console.log(a)    
      // this.txt2 = a.value + '-'    
    },
    handleCall() {
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
  }
}
.job-position {
  margin-bottom: 20px;
  overflow: hidden;

  span {
    float: left;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }

  .distpicker-address-wrapper {
    width: 800px;
    float: left;
    color: #3b3b3b;
  }
  .distpicker-address-wrapper select {
    border: 1px solid #e08714;
    box-shadow: none;
    transition: none;
    margin-right: 5px;
    font-size: 14px;
    padding: 2px 5px;
    height: 30px;
    line-height: 30px;
    color: #3b3b3b;
    
  }
} 
.job-list {
  
  .job-box {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    height: 105px;

    .box-info {
      flex-grow: 3;

      h3 {
        margin: 0 ;
      }
      .box-info-money {
        color: #e08714;
        font-size: 12px;
        margin: 20px 0;
        font-weight: normal;

        span {
          font-weight: bold;
          font-size: 18px;
          margin-right: 5px;
        }
      }
      p {
        color: #e08714;
        font-size: 10px;

        span {
          margin-right: 5px;
        }
      }
    }
    .box-posotion {
      flex-grow: 2;
      font-size: 12px;
      // padding: 20px 0;
      color: #a7a7a7;
      align-self: center;
    }
    .box-btn {
      flex-grow: 2;
      align-self: center;
      color: #fff;

      .el-button {
        width: 150px;
        background: #e08714;
      }
      svg {
        margin-right: 5px;
      }
    }
    .box-time { 
      flex-grow: 1;
      align-self: center;
      font-size: 12px;

      span i {
        margin-right: 5px;
      }
    }
  }
}

</style>
