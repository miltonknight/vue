<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <h4>使用本系统，表示您知道并同意以下事项：</h4>
      <div class="tip">
        <p>
          根据《医大一院关于加强临床医疗数据保护以及第三方系统接入的管理制度》规定，同时避免使用优盘等工具可能带来的安全风险，浑南院区实行数据资产封闭管理，禁止通过本系统传输受医院保护的各项临床医疗数据。
        </p>
      </div>
      <div class="tip">
        <p>
          <strong>重要:</strong>本系统将记录您所有的文件传输记录，必要的时候，将配合医院有关职能部门审查、核对传输的文件内容。
        </p>
      </div>
      <div class="tip">
        <p>
          本系统仅提供一个文件中转和临时存储的平台，重要文件请您另行存储，避免系统故障导致数据丢失风险。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DiskDashboard',
  computed: {
    ...mapGetters([
      'full_name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 24px;
    line-height: 46px;
  }
}

.tip {
padding: 0px 10px;
background-color: #ecf8ff;
border-radius: 4px;
border-left: 5px solid #50bfff;
margin: 20px 0;
}
</style>
