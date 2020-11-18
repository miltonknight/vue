<!-- 老兵文化-资料库 -->
<template>
  <div>
    <el-row :gutter="24">
      <!-- 左侧内容 -->
      <el-col :span="17">
        <div class="grid-content bg-purple">
          <!-- list -->
          <div class="list-container">
            <div class="list-main">
              <div class="list-head">
                <h3>资料库<span>Database</span></h3>
              </div>
              <div class="list-head list-head-sub-storage">
                <!-- <ul class="section-title">
                  <li class="is-active">图书</li>
                  <li>视频</li>
                  <li>音乐</li>
                  <li>书画</li>
                  <li>图片</li>
                </ul> -->
                <template>
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="图书" name="60"></el-tab-pane>
                    <el-tab-pane label="视频" name="61">
                      <div class="tab-cates" @click="searchBySort(65)">
                        <span>影视</span>
                      </div>
                      <div class="tab-cates" @click="searchBySort(66)">
                        <span>纪录片</span>
                      </div>
                      <div class="tab-cates" @click="searchBySort(67)">
                        <span>晚会</span>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="音乐" name="62"></el-tab-pane>
                    <el-tab-pane label="书画" name="63"></el-tab-pane>
                    <el-tab-pane label="图片" name="64"></el-tab-pane>
                  </el-tabs>
                </template>
              </div>
              <div class="list-body">
                <!-- book list -->
                <div v-show="books" style="padding-bottom:5px 0">
                  
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>
                  <a class="book-list">
                    <img src="@/assets/img/booklist.jpg" alt="">
                    <p>精装修订版正版DK第一次世界大战全纪录战全</p>
                  </a>

                </div>
                <div v-show="videos" style="padding-bottom:5px 0">videosvideosvideosvideosvideos</div>
                <div v-show="musics" style="padding-bottom:5px 0">musicsmusicsmusicsmusicsmusics</div>
                <div v-show="paintings" style="padding-bottom:5px 0">paintingspaintingspaintingspaintings</div>
                <div v-show="pictures" style="padding-bottom:5px 0">picturespicturespicturespicturespictures</div>

                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/courier-station/artical?id=' + item.soldier_station_id" class="list-item"> -->
                <!-- <a v-for="item in ArticalList.list" :key="item.id" :href="'/#/culture/on-tao/artical?id=' + item.article_id + '&sort_id=' + item.sort_id" class="list-item">
                  <div class="list-body-img">
                    <img :src="item.img_path" />
                    <i class="badge">{{ item.sort_name }}</i>
                  </div>
                  <div class="list-body-text">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.introduction }}</p>
                    <div class="list-text-cate">
                      <span class="tip">{{ item.sort_name }}</span>
                      <span class="time">
                        <i class="el-icon-time"></i>{{ item.create_time }}
                      </span>
                    </div>
                  </div>
                </a> -->
                <!-- 暂无数据 -->
                <div v-show="zwsj" class="zwsj">暂无数据</div>

                <pagination
                  background
                  layout="prev, pager, next"
                  v-show="total > 0"
                  :total="total"
                  :page.sync="listQuery.page"
                  :limit.sync="listQuery.limit"
                  @pagination="fetchData"
                />
                
              </div>
            </div>
            <!-- list end -->
          </div>

        </div>
      </el-col>
      <!-- 左侧内容end -->

      <!-- 右侧内容 -->
      <el-col :span="7">
        <div class="grid-content bg-purple">
          <div class="side-section">
            
            <!-- components:components/rightside -->
            <culture-right />

          </div>
        </div>
      </el-col>
      <!-- 右侧内容end -->
    </el-row>
  </div>
</template>

<script>
console.log("./views/ma/culture/index is loaded~~~~~~~~~~~~~~~~~~~~");
import CultureRight from "@/views/ma/culture/components/right"
import Pagination from "@/components/Pagination";
import StorageBooks from "@/views/ma/culture/storage/components/books"
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Culture",
  components: {
    CultureRight,
    StorageBooks,
    Pagination
  },
  data() {
    return {
      activeName: '60', // tab active
      //文章列表接口地址、接收数组
      url: LaobingUrl.modular_artical_list,
      ArticalList: [],
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 60, // 版块id
        page: 1,
        limit: 10
      },
      zwsj: false,
      // 定义五个版块显示状态v-show
      books: true,
      videos: false,
      musics: false,
      paintings: false, // 书画
      pictures: false
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
      switch(tab.name){
        case "60":
          console.log("case 60::::::::::")
          this.books = "ture"
          this.videos = false
          this.musics = false
          this.paintings = false // 书画
          this.pictures = false
          break
        case "61":
          console.log("case 61::::::::::")
          this.videos = "ture"
          this.books = false
          this.musics = false
          this.paintings = false // 书画
          this.pictures = false
          break
        case "62":
          console.log("case 62::::::::::")
          this.books = false
          this.videos = false
          this.musics = "ture"
          this.paintings = false // 书画
          this.pictures = false
          break
        case "63":
          console.log("case 63::::::::::")
          this.books = false
          this.videos = false
          this.musics = false
          this.paintings = "ture" // 书画
          this.pictures = false
          break
        case "64":
          console.log("case 64::::::::::")
          this.books = false
          this.videos = false
          this.musics = false
          this.paintings = false // 书画
          this.pictures = "ture"
          break
      }
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
      this.postDataFromUI(LaobingUrl.modular_artical_list, this.listQuery)
        .then(response => {
          this.ArticalList = response;
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
    }
  }
};
</script>

<style lang="scss" >

/******* new home page ***************/
.el-row {
  margin-right: 0 !important;

  .el-col.el-col-17 {
    padding-right: 0 !important;
  }
  .el-col.el-col-7 {
    padding-right: 0 !important;
  }
}

.list-head-sub-storage {
  border-bottom: none !important;
  margin-bottom: 10px !important;
  margin-top: -10px;
  line-height: 38px;

  .section-title {
    display: flex;
    margin: 0;
    padding: 0;

    li {
      flex-grow: 7;
      text-align: center;
      list-style: none;
      height: 38px;
      cursor: pointer;
    }
    li:hover, li.is-active {
      border-bottom: 3px solid #e08714;
    }
  }
}
.list-container .list-main .list-head {
  height: auto;
}
.list-head-sub-storage {
  .el-tabs__nav {
      display: flex;

    .el-tabs__item {
      width: 145px!important;
      flex-grow: 1;
      text-align: center;
      font-size: 16px;
    }
  }
  .el-tabs__item:hover {
    color: #e08714;
  }  
  .el-tabs__item.is-active {
    color: #e08714;
  }
  .el-tabs__active-bar {
    background-color: #e08714;
    height: 3px;
  }
  .el-tabs__item:hover {
    color: #e08714;
  }
  .el-tab-pane {
    display: flex;
  }
  .tab-cates {
    width: 225px;
    height: 45px;
    line-height: 45px;
    border-radius: 3px;
    background: #eee;
    flex-grow: 1;
    margin-right: 15px;
    text-align: center;

    &:nth-last-child(1) {
      margin-right: 0;
    }
  }
  .tab-cates.is-active {
    background-color: #e08714;
    color: #fff;
  }
}

/******** lists */
.book-list {
  display: block;
  width: 174px;
  height: 224px;
  padding: 30px 15px 0;
  margin: 0 10px 10px 0;
  float: left;
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 2px rgba(0,0,0,0.2);

  img {
    width: 134px;
    height: 134px;
  }
  p {
    font-size: 10px;
    height: 34px;
    line-height: 1.4;
    text-align: left;
  }
  &:nth-child(4n) {
    margin: 0 0px 10px 0;
  }
}
</style>
