<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import "echarts/map/js/china";
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "500px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        tooltip: {},
        visualMap: {
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          // text: ["High", "Low"],
          seriesIndex: [1],
          inRange: {
            color: ["skyblue", "yellow", "pink", "green"]
          },
          calculable: true
        },
        geo: {
          map: "china",
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            symbolSize: 20,
            symbol: "none",
            symbolRotate: 35,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#F06C00"
              }
            }
          },
          {
            name: "老兵餐厅",
            type: "map",
            geoIndex: 0,
            // tooltip: {show: false},
            data: [
              { name: "北京", value: "21" },
              { name: "天津", value: "11" },
              { name: "上海", value: "122" },
              { name: "重庆", value: "33" },
              { name: "河北", value: "44" },
              { name: "河南", value: "55" },
              { name: "云南", value: "16" },
              { name: "辽宁", value: "277" },
              { name: "黑龙江", value: "88" },
              { name: "吉林", value: "188" },
              { name: "湖南", value: "35" },
              { name: "安徽", value: "11" },
              { name: "山东", value: "10" }
            ]
          }
        ]
      });
    }
  }
};
</script>
