<template>
  <div class="components-container">
    <div>
      <H2 align='center'>文章录入（临时）入口</H2>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="文章简介">
          <el-input v-model="form.introduction" />
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="form.tag" />
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="form.categoryId" />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.writer" />
        </el-form-item>
        <el-form-item label="是否首页推荐">
          <el-switch v-model="form.top_show_flag"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存文章</el-button>
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <tinymce v-model="form.content" :height="300" />
    </div>
    <hr />
    <h2>文章预览</h2>
    <div class="editor-content" v-html="form.content" />
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  // name: "ArticleEdit",
  name: "TempUpload",
  components: { Tinymce },
  data() {
    return {
      form: {
        title: "",
        introduction:"文章简介",
        content: `请开始编辑`,
        tag: "", // 作用域？用在哪里？
        categoryId: 1, // 作用域？用在哪里？
        writer: '', // 文章作者昵称
        create_uid: 'user', // 文章作者id
        top_show_flag: false, // 是否推荐模块首页 true-是 false-否
        topImage: '', // 干啥的?
        top_img_path: "", // 模块主页图片地址
        img_path1: "" // 文章图片地址
      }
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  created: function() {
    // get user_id and set to form.create_uid
    this.form.create_uid = this.user_id;
    console.log(this.form.create_uid);
  },
  methods: {
    onSubmit() {
      this.postDataFromUI(LaobingUrl.temp_add_artical, this.form)
      .then(res => {
          const { code, msg, data } = res.data;
          if (data) {
            this.form = data;
            this.$message({
              message: msg,
              type: "success"
            });
          } else {
            this.$message({
              message: "添加文章失败",
              type: "error"
            });
          }
        })
        .catch(error => {
        });
    },
    getDataFromUI(url) {
      return new Promise((resolve, reject) => {
        getData(url)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000 && data != null) {
              console.log("GetDataFromUI Response:", data);
              resolve(data);
            } else {
              reject(msg);
              this.$message({
                message: "没有查询到数据",
                type: "success"
              });
            }
          })
          .catch(error => {
            console.log(error);
            this.$message({
              message: error,
              type: "error"
            });
          });
      });
    },
    postDataFromUI(url, data) {
      return new Promise((resolve, reject) => {
        postData(url, data)
          .then(response => {
            const { code, msg, data } = response;
            if (code === 20000) {
              console.log("Post Json Response:", data);
              resolve(data);
            }
            this.$message({
              message: msg,
              type: "success"
            });
          })
          .catch(error => {
            console.log(error);
            this.$message({
              message: error,
              type: "success"
            });
          });
      });
    }
  }
};
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>