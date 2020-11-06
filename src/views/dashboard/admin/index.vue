<template>
  <div class="dashboard-editor-container">

    <h2>板块数据总览</h2>
    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    
    <h2>老兵餐厅加盟图(全国)</h2>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <map-chart :chart-data="lineChartData" />
    </el-row>
    <h2>老兵餐厅加盟图（辽宁）</h2>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <liaoning-map-chart :chart-data="lineChartData" />
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import MapChart from './components/MapChart'
import LiaoningMapChart from './components/LiaoningMapChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160],
    actualData: [120, 82, 91, 154, 162, 140]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130],
    actualData: [180, 160, 151, 106, 145, 150]
  },
  purchases: {
    expectedData: [2000, 1000, 2121, 5104, 2105, 5100],
    actualData: [1200, 2290, 5100, 3138, 3130, 4130]
  },
  shoppings: {
    expectedData: [13, 11, 14, 15, 15, 16],
    actualData: [12, 12, 15, 16, 24, 13]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    MapChart,
    LiaoningMapChart
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
h2{
font-size: 1.65rem;
padding-bottom: .3rem;
border-bottom: 1px solid #eaecef;
}
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
