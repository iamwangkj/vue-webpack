<template>
  <div class="page">
    <div class="box" id="chart"></div>
    <div class="box" id="chartHouse"></div>
    <div class="box" id="huizhou-house"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import data_baoan from '../json/宝安区.json'
import data_huizhou from '../json/zs-ershoufang.json'
import _ from 'lodash'
export default {
  mounted () {
    this.drawChartUserInfo()
    this.drawChartHouse()
    this.drawChartHouseHuizhou()
  },
  methods: {
    drawChartUserInfo () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('chart'))
      console.log(myChart)
      // 指定图表的配置项和数据
      const option = {
        title: {
          text: '用户男女比例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['男', '女', '保密']
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'bar',
          data: [98, 26, 757]
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    drawChartHouse () {
      const arr = data_baoan.map((item) => {
        const { show_price, longitude, latitude, title } = item
        return {
          show_price, longitude, latitude, title
        }
      })
      const priceList = arr.map((item) => {
        return item.show_price
      })
      const xAxisData = arr.map((item) => {
        return item.title
      })
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('chartHouse'))
      console.log(myChart)
      // 指定图表的配置项和数据
      const option = {
        title: {
          text: '楼盘价格对比'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'bar',
          data: priceList
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    drawChartHouseHuizhou () {
      let arr = _.sortBy(data_huizhou, [function (o) { return o.unitPrice }])
      arr = _.slice(arr, 0, 100)
      const xAxisData = arr.map((item) => {
        return item.position
      })
      const yAxisData = arr.map((item) => {
        return item.unitPrice
      })
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('huizhou-house'))
      console.log(myChart)
      // 指定图表的配置项和数据
      const option = {
        title: {
          text: '二手房价格对比'
        },
        tooltip: {},
        legend: {
          data: []
        },
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [{
          name: '元/每平方',
          type: 'bar',
          data: yAxisData
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
  height: 100vh;
}
</style>
