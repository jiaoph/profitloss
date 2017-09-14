<template>
  <div id="pieWrap" class="pieWrap">

  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
// 引入饼图
require('echarts/lib/chart/pie');

export default {
  mounted() {
    var myChart_pie = echarts.init(document.getElementById('pieWrap'));
    myChart_pie.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color:['#CAD879','#97C681','#4A9973','#FBB661','#DEE598'],
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['溢价','佣金收入',  '已收团购', '应收团购','甲方奖励',]
      },
      series: [
        {
          name: '主营业收入',
          type: 'pie',
          radius: ['50%', '90%'],
          center: ['50%', '50%'],
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
            { value: 310, name: '溢价' },
            { value: 335, name: '佣金收入' },
            { value: 190, name: '已收团购' },
            { value: 248, name: '应收团购' },
            { value: 234, name: '甲方奖励' }
          ]
        }
      ]
    })
  }
}
</script>

<style scoped>
.pieWrap {
  width: 350px;
  height: 300px;
  padding-top:70px;
}
</style>


