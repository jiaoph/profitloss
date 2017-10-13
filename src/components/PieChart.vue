<template>
  <div id="pieWrap" class="pieWrap">

  </div>
</template>

<script>
import { Event } from '../assets/eventBus'
var echarts = require('echarts/lib/echarts');
// 引入饼图
require('echarts/lib/chart/pie');

export default {
  data() {
    return {
      pieChartData: [0, 0, 0, 0, 0] // 初始数据
    }
  },
  methods: {
    initPieChart(arr) {
      const self = this;
      var myChart_pie = echarts.init(document.getElementById('pieWrap'));

      myChart_pie.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#97C681', '#CAD879', '#FBB661', '#DEE598', '#4A9973'],
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['溢价', '佣金收入', '已收团购', '应收团购', '甲方奖励',]
        },
        series: [
          {
            name: '主营业务收入',
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '90%'],
            // center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'inner',
                formatter: '{d}%',
                textStyle: {
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '18',
                  fontWeight: 'normal'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: self.pieChartData
          }
        ]
      })
    }
  },
  mounted() {
    const async = new Promise((resolve, reject) => { // 子组件异步获取主页数据
      Event.$on('homejson', data => {
        resolve(data)
      })
    })

    async.then(arr => {
      this.pieChartData = [
        { value: arr[2].money, name: '溢价' },
        { value: arr[1].money, name: '佣金收入' },
        { value: arr[4].money, name: '已收团购' },
        { value: arr[5].money, name: '应收团购' },
        { value: arr[3].money, name: '甲方奖励' }
      ]
      return this.pieChartData;
    }).then(val => {
      // Array.prototype.slice.call(val)
      this.initPieChart();
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
.pieWrap {
  width: 330px;
  height: 300px;
  /*padding-top:70px;*/
}
</style>


