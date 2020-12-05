<!-- 老兵搬家 -->
<template>
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-moving.jpg" alt="">
    </div>

    <div class="list-serach">
      <el-input v-model="inputArea" placeholder="输入您想要查询的服务区域，点击搜索进行查询" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <div class="service-position">
      <span>服务范围：</span>
      <v-distpicker
        :province="address.province"
        :city="address.city"
        @province="onChangeProvince"
        @city="onChangeCity"
      >
      </v-distpicker>
    </div>
    <div class="service-sort">
      服务类别：
      <span class="is-active">公司搬家</span>
      <span>居民搬家</span>
      <span>搬厂搬货</span>
      <span>空调移机</span>
      <span>钢琴搬运</span>
      <span>异地搬家</span>
    </div>

    <div class="corp-list">

      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>
      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>
      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>
      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>
      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>
      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>
      <div class="corp-box">
        <div class="corp-img">
          <img src="@/assets/img/list-corp.jpg" alt="">
        </div>
        <div class="corp-info">
          <a href="/#/ma/house-moving/detail"><h3>提供长途搬家、拆装服务、设备搬运等服务 | 响应及时、态度好</h3></a>
          <p>沈阳双福搬家服务中心与沈阳大兵搬家公司强强联合共同打造沈阳搬</p>
          <p>二十一世纪广场-沈阳市皇姑区双福搬家服务中心</p>
          <div class="corp-tip">
            <span>响应及时</span><span>活儿好</span><span>细致不糊弄</span>
            <i class="el-icon-time"></i>2020-10-26
          </div>
          <div class="corp-btn">
            <el-button type="el-button el-button--warning">
              <svg-icon icon-class="tel" class-name="card-panel-icon" />联系商家
            </el-button>
          </div>
        </div>
      </div>

    </div>
    
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
  name: "HouseMoving",
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
      inputArea: ''
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
.list-serach {
  width: 80%;
  margin: 0 auto 20px;

  .el-button {
    background-color: #e08714!important;
    color: #fff!important;
    border: 1px solid #e08714!important;
  }
}
.service-position {
  margin-bottom: 20px;
  overflow: hidden;

  span {
    float: left;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
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
.service-sort {
  height: 30px;
  line-height: 30px;
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 14px;

  span {
    height: 30px;
    line-height: 30px;
    margin-left: 5px;

    &.is-active {
      color: #e08714;
      font-weight: bold;
    }
  }
} 
.corp-list {
  
  .corp-box {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    height: 145px;
    border-radius: 3px;
    overflow: hidden;

    .corp-img {
      width: 220px;
      height: 145px;
      float: left;

      img {
        width: 220px;
        height: 145px;
      }
    }
    .corp-info {
      flex-grow: 2;
      padding: 15px;
      position: relative;
     
      h3 {
        font-size: 18px;
        margin: 0 0 10px;
        line-height: 1.5;
      } 
      p {
        font-size: 14px;
        line-height: 1.5;
        margin: 0 0 10px;
      }
      .corp-tip {
        text-align: right;
        color: #a7a7a7;
        font-size: 14px;

        span {
          color: #e08714;
          margin-right: 10px;
          float: left;
        }
        i {
          margin-right: 5px;
        }
      }
    }
    .corp-btn {
      flex-grow: 2;
      align-self: center;
      color: #fff;
      position: absolute;
      top: 15px;
      right: 15px;

      .el-button {
        width: 150px;
        background: #e08714;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
}

</style>
