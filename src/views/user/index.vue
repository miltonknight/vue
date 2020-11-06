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
          <el-button type="primary" @click="onPassword()">修改密码</el-button>
          <el-button type="primary" @click="onDisable()">启用/禁用</el-button>
          <el-button type="primary" @click="onDelete()">删除</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>

    <split-pane split="vertical" :default-percent="50" @resize="resize">
      <template slot="paneL">
        <div class="left-container">
          <el-table
            :key="tableKey"
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            :default-sort="{ prop: 'overall_score', order: 'descending' }"
            style="width: 100%;"
            @current-change="handleCurrentChange"
          >
            <el-table-column type="index" align="center" width="50" />

            <el-table-column label="用户手机号" prop="username" align="center" sortable width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.username }}</span>
              </template>
            </el-table-column>

            <el-table-column label="角色" prop="role" align="center" sortable width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.role | role_filter }}</span>
              </template>
            </el-table-column>

            <el-table-column label="注册时间" prop="createTime" align="center" sortable width="150">
              <template slot-scope="scope">
                <span>{{ scope.row.createTime | date_filter }}</span>
              </template>
            </el-table-column>

            <el-table-column label="状态" prop="enabled" align="center" sortable width="100">
              <template slot-scope="scope">
                <span>{{ scope.row.enabled | enabled_filter }}</span>
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
      <template slot="paneR">
        <div class="top-container">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="UID" prop="uid">
              <el-input v-model="form.uid" />
            </el-form-item>
            <el-form-item label="姓名" prop="fullName">
              <el-input v-model="form.fullName" />
            </el-form-item>
            <el-form-item label="介绍" prop="introduction">
              <el-input v-model="form.introduction" />
            </el-form-item>
            <el-form-item label="积分" prop="score">
              <el-input v-model="form.score" />
            </el-form-item>
            <el-form-item label="老兵码" prop="soldierCode">
              <el-input v-model="form.soldierCode" />
            </el-form-item>
            <el-form-item label="退役证号" prop="soldierCard">
              <el-input v-model="form.soldierCard" />
            </el-form-item>
            <el-form-item label="身份证号" prop="idCard">
              <el-input v-model="form.idCard" />
            </el-form-item>

            <el-form-item label="申请资料">
              <el-image style="width: 100px; height: 100px" :src="form.avatar" :fit="fit" />
              <el-image
                style="width: 100px; height: 100px"
                :src="form.soldierCardPath"
                :preview-src-list="srcList"
              />
              <el-image
                style="width: 100px; height: 100px"
                :src="form.idCardPath"
                :preview-src-list="srcList"
              />
            </el-form-item>
            <el-form-item label="地址" prop="address">
              <el-input v-model="form.address" />
            </el-form-item>
            <el-form-item>
              <el-button-group>
                <el-button type="success" @click="onAccept()">审核通过</el-button>
                <el-button type="success" @click="onShowCode()">查看老兵码</el-button>
                <el-button type="success" @click="onReject()">拒绝</el-button>
                <el-button type="success" @click="onModify()">修改</el-button>
              </el-button-group>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from "vue-splitpane";
import Pagination from "@/components/Pagination";
import { getData, postData } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { formatSimpleTime } from "@/utils/index";

export default {
  name: "UserManage",
  components: { Pagination, splitPane },
  filters: {
    role_filter: function(value) {
      if (value === "ROLE_ADMIN") {
        return "管理员";
      } else {
        return "普通用户";
      }
    },
    date_filter: function(value) {
      if (!value) return "";
      return formatSimpleTime(new Date(value), "{y}-{m}-{d}");
    },
    enabled_filter: function(value) {
      return value ? "" : "已禁用";
    }
  },
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
      currentRow: null,
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
      this.getDataFromUI(
        LaobingUrl.admin_getUserByPage +
          "/" +
          this.listQuery.page +
          "/" +
          this.listQuery.limit
      )
        .then(response => {
          this.total = response.total;
          this.list = response.list;
          this.listLoading = false;
        })
        .catch(error => {
          this.listLoading = false;
          console.log(error);
        });
    },
    addUser() {
      var params = {
        username: this.username,
        password: this.password
      };
      this.postDataFromUI(LaobingUrl.admin_add_user, params);
    },
    onUserDetail(id) {
      this.getDataFromUI(LaobingUrl.user_getProfile + "/" + id)
        .then(res => {
          this.form = res;
          this.srcList = [];
          this.srcList.push(res.idCardPath);
          this.srcList.push(res.soldierCardPath);
        })
        .catch(error => {
          console.log(this.$refs["form"]);
          this.$refs["form"].resetFields();
        });
    },
    onAccept() {
      if (this.form.uid === "") {
        return;
      } else {
        this.getDataFromUI(LaobingUrl.admin_generate_code + "/" + this.form.uid)
          .then(res => {
            console.log(res);
            this.form.soldierCode = res;
          })
          .catch(error => {
            console.log(this.$refs["form"]);
            this.$refs["form"].resetFields();
          });
      }
    },
    onShowCode() {
      if (this.form.soldierCode !== "") {
        this.getDataFromUI(
          LaobingUrl.user_show_soldier_code + "/" + this.currentRow.id + "/1"
        )
          .then(res => {
            window.open(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    onPassword() {
      if (this.currentRow != null) {
        this.postDataFromUI(
          LaobingUrl.admin_new_password +
            "/" +
            this.currentRow.id +
            "/" +
            this.password
        );
      }
    },
    onDelete() {
      if (this.currentRow != null) {
        this.postDataFromUI(
          LaobingUrl.admin_delete_user + "/" + this.currentRow.id
        )
          .then(res => {
            this.fetchData();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    onDisable() {
      if (this.currentRow != null) {
        const enabled = this.currentRow.enabled ? 0 : 1;
        this.postDataFromUI(
          LaobingUrl.admin_disable_user +
            "/" +
            this.currentRow.id +
            "/" +
            enabled
        )
          .then(res => {
            this.fetchData();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    onModify() {
      if (this.form.id !== "") {
        this.postDataFromUI(LaobingUrl.admin_profile_update, this.form);
      }
    },
    handleCurrentChange(val) {
      if (val != null) {
        console.log(val);
        this.currentRow = val;
        this.onUserDetail(this.currentRow.id);
      }
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
