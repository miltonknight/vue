<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import "echarts/map/js/province/liaoning";
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
      default: "450px"
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
        /* title: { // 标题
            text: "老兵餐厅辽宁分布图",
            left: "center",
            padding: 30,
            textStyle: {
              color: "#fff",
              fontSize: "30"
            }
         },*/
        visualMap: {
          min: 0,
          max: 50,
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
          map: "辽宁",
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
              { name: "沈阳市", value: "44" },
              { name: "大连市", value: "21" },
              { name: "鞍山市", value: "22" },
              { name: "抚顺市", value: "13" },
              { name: "本溪市", value: "14" },
              { name: "丹东市", value: "25" },
              { name: "锦州市", value: "16" },
              { name: "营口市", value: "17" },
              { name: "阜新市", value: "28" },
              { name: "辽阳市", value: "9" },
              { name: "盘锦市", value: "11" },
              { name: "铁岭市", value: "12" },
              { name: "朝阳市", value: "10" },
              { name: "葫芦岛市", value: "5" }
            ]
          }
        ]
      });
    }
  }
};
</script>
