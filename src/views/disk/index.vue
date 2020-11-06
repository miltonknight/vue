<template>
  <div class="components-container">
    <el-upload
      class="upload-demo"
      :action="actionUrl"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSucess"
      multiple
      :limit="10"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :show-file-list="false"
    >
      <el-button size="small" type="primary">上传文件<i class="el-icon-upload el-icon--right"></i></el-button>
      <div slot="tip" class="el-upload__tip">一次最多上传10个文件，单个文件大小不超过10Mb。</div>
    </el-upload>

    <div style="height: 20px"></div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      :default-sort="{ prop: 'overall_score', order: 'descending' }"
      style="width: 100%;"
    >
      <el-table-column label="序号" type="index" width="50" />

      <el-table-column label="文件名" prop="fileName" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.fileName }}</span>
        </template>
      </el-table-column>

      <!--el-table-column label="目录" prop="username" align="center" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.parentPath }}</span>
        </template>
      </el-table-column-->

      <el-table-column label="上传时间" prop="createTime" align="center" width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | date_filter }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" prop="weekmop" align="center" width="220">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="warning" @click="onDelete( scope.row.id )">删除</el-button>
            <!--el-button type="primary" @click="onDownloadCode( scope.row.id )">生成提取码</el-button-->
            <el-button type="success" @click="onDownload( scope.row.filePath )">下载</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { formatSimpleTime } from "@/utils/index";
import { mapGetters } from "vuex";

export default {
  name: "DiskFileManage",
  components: { Pagination },
  computed: {
    ...mapGetters(["user_id", "access_token"])
  },
  filters: {
    date_filter: function(value) {
      if (!value) return "";
      return formatSimpleTime(new Date(value));
    }
  },
  data() {
    return {
      tableKey: 0,
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      fileList: [],
      actionUrl: ""
    };
  },
  created() {
    this.actionUrl = "http://localhost:8181/diskFile/authapi/uploads/" + this.user_id + "?access_token=" + this.access_token;
    this.fetchData();
  },
  methods: {
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
              type: "success"
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
    },
    fetchData() {
      this.listLoading = true;
      this.getDataFromUI(
        LaobingUrl.disk_query_all_files +
          "/" +
          this.user_id +
          "/" +
          this.listQuery.page.toString() +
          "/" +
          this.listQuery.limit
      )
        .then(res => {
          this.total = res.total;
          this.list = res.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
        });
    },
    handleHeaderSuccess(res, file) {
      console.log("res", res)
      // this.loginForm.headerPath = res.data
      // this.imageHeader = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = (file.type === "image/jpeg" || file.type === "image/png");
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error("上传文件大小不能超过 10MB!");
      }
      return isLt2M;
    },
    onDownloadCode(id) {
      this.postDataFromUI(
        LaobingUrl.disk_generate_download_code +
          "/" +
          this.user_id +
          "/" +
          id
      )
        .then(res => {
         this.fetchData()
        })
        .catch(error => {
        });
    },
    onDelete(id) {
      this.postDataFromUI(
        LaobingUrl.disk_delete_file +
          "/" +
          this.user_id +
          "/" +
          id
      )
        .then(res => {
         this.fetchData()
        })
        .catch(error => {
        });
    },
    onDownload(path) {
      window.open(path)
    },
    handleSucess(res, file) {
      this.fetchData();
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      }
  }
};
</script>

<style  scoped>
.components-container {
  padding: 30px;
  position: relative;
  height: 100%;
}

.left-container {
  height: 100%;
}

.right-container {
  background-color: #fce38a;
  height: 200px;
}

.top-container {
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95e1d3;
  height: 100%;
}
</style>
