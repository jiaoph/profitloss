<template>
  <div id="pieConstsWrap" class="pieWrap">

  </div>
</template>

<script>
import { Event } from '../assets/eventBus'

export default {
  data() {
    return {
      pieChartCostsData: [0, 0, 0, 0, 0, 0, 0]
    }
  },
  name: 'pieConstsWrap',
  methods: {
    initPieChartCosts() {
      const self = this;
      // var myChart_pie = this.$echarts.init(document.getElementById('pieConstsWrap'));
      var myChart_pie = echarts.init(document.getElementById('pieConstsWrap'));

      myChart_pie.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color: ['#9ECCE8', '#489ED3', '#6AB7CC', '#32A5A2', '#AAE5D9', '#9DACD4', '#5665C1'],
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['案场费用', '联动费用', '渠道佣金', '开发费用', '管理费用(区域成本)', '管理费用(总部分摊)', '财务费用']
        },
        series: [
          {
            name: '主营业务成本',
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
            data: self.pieChartCostsData
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
      this.pieChartCostsData = [
        { value: arr[6].money, name: '案场费用' },
        { value: arr[7].money, name: '联动费用' },
        { value: arr[8].money, name: '渠道佣金' },
        { value: arr[9].money, name: '开发费用' },
        { value: arr[10].money, name: '管理费用(区域成本)' },
        { value: arr[0].money, name: '管理费用(总部分摊)' },
        { value: arr[11].money, name: '财务费用' }
      ]
      return this.pieChartCostsData;
    }).then(val => {
      // Array.prototype.slice.call(val)
      this.initPieChartCosts();
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


