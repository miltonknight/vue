<template>
  <div id="main" class="chart">

  </div>
</template>

<style lang="scss" scoped>
#main {
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  margin: 20px;
}
</style>

<script>
import echarts from 'echarts';
require('echarts/theme/macarons') // echarts theme

const animationDuration = 6000

export default {
  name: 'Chart',
  components: { },
  data() {
    return {
      
    }
  },
  computed: {
  },
  created: function() {
    this.makeChart();
  },
  methods: {
    makeChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
          animationDuration
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
          animationDuration
        }]
      })

      // 调用 setOption 将 option 输入 echarts，然后 echarts 渲染图表。
      // chart.setOption(option);
    }
  }
}
</script>
