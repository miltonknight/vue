<template>
  <div class="components-container">
    <div>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title" />
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
          <el-input v-model="form.topShow" />
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
    <div class="editor-content" v-html="form.content" />
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";

import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  name: "ArticleEdit",
  components: { Tinymce },
  data() {
    return {
      form: {
        title: "",
        tag: "",
        categoryId: 1,
        writer: '',
        topShow: 0,
        topImage: '',
        content: `此处编辑文章`
      }
      
    };
  },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  methods: {
    onSubmit() {
      this.postDataFromUI(LaobingUrl.article_add_article, this.form)
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
              console.log("PostDataFromUI Response:", data);
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

