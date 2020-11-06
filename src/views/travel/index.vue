<template>
  <div class="components-container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addOrder()">测试添加订单</el-button>
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

      <el-table-column label="用户" prop="zhName" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.zhName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="电话" prop="username" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column label="订单时间" prop="createTime" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | date_filter}}</span>
        </template>
      </el-table-column>

      <el-table-column label="订单内容" prop="title" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="参加活动" prop="activity" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.activity }}</span>
        </template>
      </el-table-column>

      <el-table-column label="金额" prop="bill" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bill }}</span>
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
import { formatTime } from '@/utils/index'

export default {
  name: "TravelManage",
  components: { Pagination },
  filters: {
    date_filter: function(value) {
      if (!value) return ''
      return formatTime(new Date(value))
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
      }
    };
  },
  created() {
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
        LaobingUrl.admin_get_orderlist +
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
    addOrder() {
      var params = {
        uid: "4500d4bb02624f1a8053848f66096b11",
        username: "13555800207",
        zh_name: "高玉宝",
        title: "井冈山七日游",
        bill: 2000,
        activity: "9折团"
      };
      this.$store
        .dispatch("travel/addOrder", params)
        .then(response => {
          const { code, msg, data } = response;
          if (code === 20000) {
            console.log("ADD ORDER:", data);
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
    },
    onDetail(user) {
      this.userId = user.id;
      this.username = user.username;
      this.form.uid = user.id;
      var url = "profile/adminapi/profile/" + this.userId;
      this.$store
        .dispatch("user/getAuthData", url)
        .then(response => {
          const { code, msg, data } = response;
          if (data) {
            this.form = data;
            this.$message({
              message: msg,
              type: "success"
            });
          } else {
            this.$message({
              message: "用户未提交资料",
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
    },
    onAccept(uid) {},
    onReject(uid) {},
    onModify(form) {}
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
