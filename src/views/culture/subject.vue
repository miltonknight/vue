<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="栏目名称">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="栏目介绍">
        <el-input v-model="form.introduction" type="textarea" />
      </el-form-item>
      <el-form-item label="上级栏目ID">
        <el-input v-model="form.parentSubject" />
      </el-form-item>
      <el-form-item label="显示层级">
        <el-input v-model="form.level" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button type="success" @click="onSubmit">修改</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      :default-sort="{ prop: 'overall_score', order: 'descending' }"
      style="width: 100%;"
            @current-change="handleCurrentChange"
    >
      <el-table-column label="序号" type="index" width="50" />

      <el-table-column label="栏目" prop="title" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="栏目介绍" prop="introduction" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.introduction }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上级栏目" prop="parentSubject" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.parentSubject }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { get, post } from "@/api/common";
import { LaobingUrl } from "@/api/laobing_url";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tableKey: 0,
      total: 0,
      list: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10
      },
      currentRow: null,
      form: {
        title: "",
        parentSubject: "",
        level: 1,
        introduction: "",
        userId: ""
      }
    };
  },
  computed: {
    ...mapGetters(["user_id"])
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSubmit() {
      this.form.userId = this.user_id;
      post(LaobingUrl.admin_add_culture_subject, this.form).then(res => {});
    },
    fetchData() {
      post(LaobingUrl.admin_list_culture_subject, this.listQuery)
        .then(response => {
          this.total = response.total;
          this.list = response.list;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleCurrentChange(val) {
      if (val != null) {
        this.currentRow = val;
        this.form = val
      }
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

