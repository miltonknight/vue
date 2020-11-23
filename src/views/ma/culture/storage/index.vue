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
                <div v-show="books" class="storage-list">
                  <div class="list-serach">
                    <el-input v-model="inputBook" placeholder="输入您想要查询的书籍名称" class="input-with-select">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </div>

                  <a class="book-list" href="/#/">
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
                <!-- book list end -->

                <!-- video list -->
                <div v-show="videos" class="storage-list">

                  <a class="video-list" href="/#/culture/storage/articleVideo">
                    <div class="video-box">
                      <img src="@/assets/img/videolist.jpg" alt="">
                      <div class="video-box-play"></div>
                      <i class="video-box-time">1:32</i>
                    </div>
                    <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                    <div class="video-info">
                      <!-- <span class="tip">{{ item.sort_name }}</span>
                      <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span> -->
                      <span class="source">老兵老兵网</span>
                      <span class="time"><i class="el-icon-time"></i>2020-11-19</span>
                    </div>
                  </a>
                  <a class="video-list" href="/#/culture/storage/articleVideo">
                    <div class="video-box">
                      <img src="@/assets/img/videolist.jpg" alt="">
                      <div class="video-box-play"></div>
                      <i class="video-box-time">1:32</i>
                    </div>
                    <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                    <div class="video-info">
                      <!-- <span class="tip">{{ item.sort_name }}</span>
                      <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span> -->
                      <span class="source">老兵老兵网</span>
                      <span class="time"><i class="el-icon-time"></i>2020-11-19</span>
                    </div>
                  </a>
                  <a class="video-list" href="/#/culture/storage/articleVideo">
                    <div class="video-box">
                      <img src="@/assets/img/videolist.jpg" alt="">
                      <div class="video-box-play"></div>
                      <i class="video-box-time">1:32</i>
                    </div>
                    <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                    <div class="video-info">
                      <!-- <span class="tip">{{ item.sort_name }}</span>
                      <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span> -->
                      <span class="source">老兵老兵网</span>
                      <span class="time"><i class="el-icon-time"></i>2020-11-19</span>
                    </div>
                  </a>
                  <a class="video-list" href="/#/culture/storage/articleVideo">
                    <div class="video-box">
                      <img src="@/assets/img/videolist.jpg" alt="">
                      <div class="video-box-play"></div>
                      <i class="video-box-time">1:32</i>
                    </div>
                    <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                    <div class="video-info">
                      <!-- <span class="tip">{{ item.sort_name }}</span>
                      <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span> -->
                      <span class="source">老兵老兵网</span>
                      <span class="time"><i class="el-icon-time"></i>2020-11-19</span>
                    </div>
                  </a>
                  <a class="video-list" href="/#/culture/storage/articleVideo">
                    <div class="video-box">
                      <img src="@/assets/img/videolist.jpg" alt="">
                      <div class="video-box-play"></div>
                      <i class="video-box-time">1:32</i>
                    </div>
                    <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                    <div class="video-info">
                      <!-- <span class="tip">{{ item.sort_name }}</span>
                      <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span> -->
                      <span class="source">老兵老兵网</span>
                      <span class="time"><i class="el-icon-time"></i>2020-11-19</span>
                    </div>
                  </a>
                  <a class="video-list" href="/#/culture/storage/articleVideo">
                    <div class="video-box">
                      <img src="@/assets/img/videolist.jpg" alt="">
                      <div class="video-box-play"></div>
                      <i class="video-box-time">1:32</i>
                    </div>
                    <h3>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心</p>
                    <div class="video-info">
                      <!-- <span class="tip">{{ item.sort_name }}</span>
                      <span class="time"><i class="el-icon-time"></i>{{ item.create_time }}</span> -->
                      <span class="source">老兵老兵网</span>
                      <span class="time"><i class="el-icon-time"></i>2020-11-19</span>
                    </div>
                  </a>

                </div>
                <!-- video list end -->

                <!-- music list -->
                <div v-show="musics" class="storage-list">
                  <div class="list-serach">
                    <el-input v-model="inputMusic" placeholder="输入您想要查询的音乐名称" class="input-with-select">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </div>
                  <ul class="music-list">
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">1</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称作者名称作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">2</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称作者名称作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">3</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称音乐作品名称音乐作品名称音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">4</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">5</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">6</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">7</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">8</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">9</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称</div>
                      </router-link>  
                    </li>
                    <li>
                      <router-link to="/culture/storage/articleMusic">
                        <div class="music-order">10</div>
                        <div class="music-operate">
                          <i class="el-icon-video-play"></i>
                        </div>
                        <div class="music-name">音乐作品名称音乐作品名称音乐作品名称</div>
                        <div class="music-time">7:15</div>
                        <div class="music-writer">作者名称作者名称作者名称</div>
                      </router-link>  
                    </li>
                  </ul>

                </div>
                <!-- music list end -->
                
                <!-- paintings -->
                <div v-show="paintings" class="storage-list">
                  
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                  <a class="painting-list" href="/#/culture/storage/articlePainting">
                    <img src="@/assets/img/paintinglist.jpg" alt="">
                    <p>丁谦，字浩文，斋号万籁草堂，1958年生，河南周口人。中国书法家协会理事，中国硬笔书法协会副主席，中国文化艺术界慈善志愿者主席团主席。</p>
                  </a>
                </div>
                <!-- paintings end -->

                <div v-show="pictures" class="storage-list">
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                  <a class="piciure-list" href="/#/culture/storage/articlePicture">
                    <div class="piciure-box"></div>
                    <p>这个地方是个图片的描述</p>
                    <p class="tip">老兵老兵网</p>
                  </a>
                </div>

                <!-- 列表循环 -->
                <!-- <a v-for="item in ArticleList.list" :key="item.id" :href="'/courier-station/article?id=' + item.soldier_station_id" class="list-item"> -->
                <!-- <a v-for="item in ArticleList.list" :key="item.id" :href="'/#/culture/on-tao/article?id=' + item.article_id + '&sort_id=' + item.sort_id" class="list-item">
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
                  v-show="total > 0"
                  background
                  layout="prev, pager, next"
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
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "Culture",
  components: {
    CultureRight,
    Pagination
  },
  data() {
    return {
      activeName: '60', // tab active
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
      zwsj: false,
      // 定义五个版块显示状态v-show
      books: true,
      videos: false,
      musics: false,
      paintings: false, // 书画
      pictures: false,
      inputBook: '',
      inputMusic: ''
    };
  },
  // computed: { },
  created: function() {
    this.fetchData();
    this.$store.state.navactive = '/culture/storage/index';
  },
  mounted() {
  },
  methods: { 
    handleClick(tab, event) {
      console.log(tab, event);
      switch (tab.name) {
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
      width: 144px!important;
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
.storage-list {
  clear: both;
  overflow: hidden;
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
.book-list {
  display: block;
  width: 172px;
  height: 224px;
  padding: 15px 15px 10px;
  margin: 0 10px 10px 0;
  float: left;
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 2px rgba(0,0,0,0.2);

  img {
    width: 150px;
    height: 150px;
  }
  p {
    font-size: 10px;
    height: 34px;
    line-height: 1.4;
    text-align: left;
  }
  &:nth-child(4n+1) {
    margin: 0 0px 10px 0;
  }
}
.video-list {
  width: 340px;
  height: auto;
  float: left;
  margin: 0 40px 40px 0;

  .video-box {
    width: 343px;
    height: 190px;
    position: relative;
    margin-bottom: 10px;

    img {
      width: 343px;
      height: 190px;
    }
    .video-box-play {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -25px 0 0 -25px;
      background: url('~@/assets/img/play.png');

      &:hover {
        opacity: 0.8;
      }
    }
    .video-box-time {
      position: absolute;
      right: 5px;
      bottom: 5px;
      background: rgba(55,55,55,0.8);
      color: #fff;
      padding: 4px 7px;
      font-style: normal;
      font-size: 12px;
      border-radius: 3px;
    }
  }
  .video-info {
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #a7a7a7;

    // span.source {
    //   // color: #a7a7a7;
    // }
    span.time {
      float: right;
      // color: #a7a7a7;
      margin-right: 10px;

      i {
        margin-right: 5px;
      }
    }
  }
  h3 {
    font-size: 18px;
    line-height: 1.4;
    margin: 10px auto;
    height: 50px;
  }
  p {
    font-size: 14px;
    height: 42px;
    line-height: 1.4;
    margin: 0 0 10px 0;
  }
  &:nth-child(2n) {
    margin: 0 0px 40px 0;
  }
}
.music-list {
  margin: 0;
  padding: 0;

  li {
    list-style:none;
    margin: 0;
    clear: both;
    overflow: hidden;
    background-color: #f8f7f8;

    &:nth-child(2n) {
      background-color: #fff;
    }

    div {
      float: left;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      font-size: 14px;
    }
  }
  .music-order {
    width: 40px;
    text-align: center;
  }
  .music-operate {
    width: 40px;
    text-align: center;
    padding: 2px 10px;

    i {
      font-size: 16px;
    }
  }
  .music-name {
    width: 330px;
  }
  .music-time {
    width: 60px;
    text-align: center;
  }
  .music-writer {
    width: 250px;
  }
}
.painting-list {
  display: block;
  width: 226px;
  height: 368px;
  overflow: hidden;
  background: #edf1f4;
  float: left;
  margin: 0 20px 20px 0;
  border-radius: 3px;

  img {
    width: 226px;
    height: 248px;
  }
  p {
    font-size: 13px;
    line-height: 1.4;
    padding: 15px;
    margin: 0;
    height: 120px;
    color: #787878;
  }
  &:nth-child(3n) {
    margin: 0 0 20px 0;
  }
}
.piciure-list {
  display: block;
  width: 226px;
  height: 305px;
  overflow: hidden;
  float: left;
  margin: 0 20px 20px 0;
  border-radius: 3px;
  border: 1px solid #edf1f4;
  box-shadow: 0.5px 0.5px 2px rgba(0,0,0,0.2);
  
  .piciure-box {
    width: 226px;
    height: 226px;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-image: url('~@/assets/img/picturelist.jpg');
  }
  p {
    font-size: 13px;
    line-height: 1.4;
    padding: 15px;
    margin: 0;
    color: #787878;
  }
  p.tip {
    border-top: 1px solid #edf1f4;
    padding: 5px 15px;
  }
  &:nth-child(3n) {
    margin: 0 0 20px 0;
  }
}

</style>
