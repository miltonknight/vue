<!-- 老兵情怀 - 大病救治 -->
<template>
  <!-- <div> -->
  <el-row>
    <div class="banner">
      <img src="@/assets/img/banner-sentiment.jpg" alt="">
    </div>
    <div class="critical-box">
      <div class="critical-top">
        <img src="@/assets/img/critical-top.jpg" alt="">
        <div class="critical-top-infos">
          <span>进行中</span>老兵大病救助（第四期）
        </div>
      </div>
      <div class="critical-main">
        <!-- <div class="critical-head">
          <ul>
            <li class="is-active ">活动公告</li>
            <li>报名初核</li>
            <li>提名公示</li>
            <li>网上公投</li>
            <li>公投公示</li>
            <li>社会调查</li>
            <li>专家终审</li>
            <li>结果公示</li>
          </ul>
        </div> -->
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="活动公告" name="first">
            <div class="critical-body">
              <h1>《难忘军号声》——老兵老兵网2020年老兵救助活动</h1>
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
          <el-tab-pane label="报名初核" name="second">
            <div class="critical-body">
              <h1>申请救助信息登记</h1>
              <div class="critical-infos">
                <p>*本页所有信息均为必填</p>
                <el-form ref="form" :model="form" label-width="150px">
                  <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-radio-group v-model="form.sex">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="联系电话">
                    <el-input v-model="form.telephone"></el-input>
                  </el-form-item>
                  <el-form-item label="证件类型">
                    <el-select v-model="form.id" placeholder="证件类型">
                      <el-option label="身份证" value="110"></el-option>
                      <el-option label="军官证" value="220"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="证件号码">
                    <el-input v-model="form.idnumbers"></el-input>
                  </el-form-item>
                  <el-form-item label="申请救助简述">
                    <el-input 
                      v-model="form.desc"
                      type="textarea" 
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="证件正反面">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>

                  <el-form-item label="医疗证明信息">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>

                  <el-form-item label="医疗发票信息">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>

                  <el-form-item label="贫困证明及资产证明">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>

                  <el-form-item label="立功授奖信息证明">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>

                  <el-form-item label="申请救助的视频短片">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-form-item>

                  <el-button size="small" class="success" @click="submitUpload">确认提交</el-button>
                </el-form>
              </div>
              
            </div>

          </el-tab-pane>
          <el-tab-pane label="提名公示" name="third">
            <div class="critical-body">
              <h1>《难忘军号声》老兵大病救助初核通过名单</h1>
              <div class="critical-names">
                <ul>
                  <li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li><li>东方不亮</li><li>西方亮</li>
                </ul>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="网上公投" name="fourth">
            <div class="critical-body">
              <h1>《难忘军号声》老兵大病救助首轮网上公投</h1>
              <div class="critical-vote">
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number agree">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>

              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="公投公示" name="fifth">
            <div class="critical-body">
              <h1>《难忘军号声》老兵大病救助网络公投结果</h1>
              <div class="critical-vote">
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number agree">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                  <div class="pass"></div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                  <div class="pass"></div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                  <div class="pass"></div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>
                <div class="vote-box">
                  <div class="vote-box-video">
                    <img src="@/assets/img/vote-video.jpg" alt="">
                  </div>
                  <div class="vote-box-info">
                    <h3>老兵01 楼XX</h3>
                    <p>中国人民解放军93岁生日 湖州一群90多岁老兵含泪讲述当兵初心中国人民解放军93岁生日 湖州一群0多岁老兵含泪讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵初心讲述当兵心讲述当兵初心讲述当兵初心</p>
                  </div>
                  <div class="vote-box-number">
                    12345<svg-icon icon-class="little-heart" class-name="card-panel-icon" />
                  </div>
                </div>

              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="社会调查" name="sixth">
            <div class="critical-body">
              <h1>《难忘军号声》老兵大病救助社会调查小组</h1>
              <div class="critical-ttl">
                <span></span>救助对象及申请条件
              </div>
              <div class="critical-detail">
                <p>老兵老兵网组织专门人员对通过网络初核人员前20-50名针对以下进行实地考察，老兵老兵网组织的实地考察审核。</p>
                <p>1、救助申请人家庭人均收入在本地区月最低工资标准以下的。</p>
                <p>2、救助申请人必须经过老兵老兵网组织的实地考察审核，并获得审验通过。</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="专家终审" name="seventh">
            <div class="critical-body">
              <h1>《难忘军号声》老兵大病救助专家终审阶段</h1>
              <div class="critical-detail">
                <p>医疗专家xxx,xxx专家，xxx专家对本次参加活动人员进行综合复审。</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <br><br><br><br>
                <p>专家审核指标</p>
                <p>由专家根据以下五条对救助申请人资格进行综合审查，以确保申请人是真实有困难需要帮助的老兵。</p>
                <p>①救助申请人必须是退役老兵。</p>
                <p>②救助申请人必须是老兵老兵网的注册用户。</p>
                <p>③救助申请人必须有老部队战友的签名推荐。</p>
                <p>④救助申请人家庭人均收入在本地区月最低工资标准以下的。</p>
                <p>⑤救助申请人必须经过老兵老兵网组织的实地考察审核，并获得审验通过。</p>
              </div>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="结果公示" name="eighth" disabled> -->
          <el-tab-pane label="结果公示" name="eighth">
            <div class="critical-body">
              <h1>《难忘军号声》老兵大病救助结果公示</h1>
              <div class="critical-detail">
                <p>获得救助金50万元名单</p>
                <p>张三 188XXXX888  100万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <p>李四 188XXXX888   98万分</p>
                <p>张三 188XXXX888   97万分</p>
                <br><br><br><br>
                <p>请以上人员保持手机畅通，3个工作日内将有工作人员与您取得联系，沟通救助资金事宜。</p>
                <p>咨询热线：400 xxx 8888</p>
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
console.log("Views: /sentiment/critical-detail is loaded");
// import Pagination from "@/components/Pagination";
// import Tinymce from "@/components/Tinymce";
import { postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";

export default {
  // name: 'MaHomeHeader',
  // components: { MaHomeheader },
  name: "SentimentCriticalDetail",
  components: {
    // Tinymce
    // Pagination
  },
  data() {
    return {
      activeName: 'first', // tab active
      // 文章列表接口地址、接收数组
      url: LaobingUrl.modular_article_list,
      ArticleList: [],
      ialogImageUrl: '',
      dialogVisible: false,
      // Pagination
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        sort_id: 60, // 版块id
        page: 1,
        limit: 10
      },
      form: {
        name: '',
        sex: '',
        telephone: '',
        id: '',
        idnumbers: '',
        desc: ''
      },
      dialogImageUrl: ''
    };
  },
  computed: { },
  created: function() {
    // this.fetchData();
    this.$store.state.navactive = '/ma/sentiment/index';
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

<style lang="scss" scope>
.banner {
  margin: 0 auto 20px;

  img {
    width: 100%;
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
      width: 129.5px;
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
      &:nth-last-child(1) {
        width: 131.5px;
      }
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
</style>
