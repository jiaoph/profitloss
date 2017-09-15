<template>
  <div id="pieConstsWrap" class="pieWrap">

  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
// 引入饼图
require('echarts/lib/chart/pie');

export default {
  name:'pieConstsWrap',
  mounted() {
    var myChart_pie = echarts.init(document.getElementById('pieConstsWrap'));
    myChart_pie.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color:['#9ECCE8','#489ED3','#6AB7CC','#32A5A2','#AAE5D9','#9DACD4','#5665C1'],
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['案场费用','联动费用',  '渠道佣金', '开发费用','管理费用1','管理费用2','财务费用']
      },
      series: [
        {
          name: '主营业务成本',
          type: 'pie',
          radius: ['50%', '90%'],
          // center: ['50%', '50%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              // formatter: '{d}%' 
              position: 'center'
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
          data: [
            { value: 310, name: '案场费用' },
            { value: 335, name: '联动费用' },
            { value: 190, name: '渠道佣金' },
            { value: 248, name: '开发费用' },
            { value: 204, name: '管理费用1' },
            { value: 114, name: '管理费用2' },
            { value: 594, name: '财务费用' }
          ]
        }
      ]
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


