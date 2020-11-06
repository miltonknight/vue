<template>
  <div class="components-container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="添加用户">
        <el-input v-model="username" placeholder="用户手机号" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" placeholder="密码" />
      </el-form-item>
      <el-form-item>
        <el-button-group>
          <el-button type="primary" @click="addUser()">添加</el-button>
          <el-button type="primary" @click="addUser()">删除</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>
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
            <el-table-column label="序号" type="index" width="50"></el-table-column>

            <el-table-column label="用户手机号" prop="username" align="center" sortable width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.username }}</span>
              </template>
            </el-table-column>

            <el-table-column label="角色" prop="weekgem" align="center" sortable width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.role }}</span>
              </template>
            </el-table-column>

            <el-table-column label="启用" prop="todaymop" align="center" sortable width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.enabled }}</span>
              </template>
            </el-table-column>

            <el-table-column label="锁定" prop="weekmop" align="center" sortable width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.locked }}</span>
              </template>
            </el-table-column>

            <el-table-column label="操作" prop="weekmop" align="center" sortable width="150">
              <template slot-scope="scope">
                <el-button type="primary" plain @click="onUserDetail( scope.row.id )">查看</el-button>
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

export default {
  name: "UserManage",
  components: { Pagination },
  data() {
    return {
      form: {
        id: "",
        avatar: "",
        introduction: "",
        fullName: "",
        soldierCode: "",
        uid: "",
        soldierCardPath: "",
        idCard: "",
        idCardPath: "",
        score: 0,
        address: "",
        soldierCard: ""
      },
      srcList: [],
      fit: "fit",
      username: "",
      password: "123456",
      userId: "",
      tableKey: 0,
      total: 0,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    resize() {
      console.log("resize");
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
      var page = {
        page: this.listQuery.page,
        limit: this.listQuery.limit
      };
      this.$store
        .dispatch("user/queryAllByLimit", page)
        .then(response => {
          const { code, msg, data } = response;
          this.total = data.total;
          this.list = data.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          this.$message({
            message: "操作失败",
            type: "success"
          });
        });
    },
    addUser() {
      var params = {
        username: this.username,
        password: this.password
      };
      this.postDataFromUI(LaobingUrl.admin_add_user, params);
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
  height: 100%;
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
