<template>
  <div id="barWrap" class="barWrap">
    <div id="inbar" class="inbar"></div>
    <div class="mylegend clearfix">
      <div class="left_legend fl">
        <div class="intop clearfix">
          <div class="circle circle_jfyj fl">
            <div class="incircle">
              <div class="circleSolid"></div>
            </div>
          </div>
          <span class="fl">甲方佣金</span>
        </div>
        <div class="inbottom clearfix">
          <div class="circle circle_tgf fl">
            <div class="incircle">
              <div class="circleSolid"></div>
            </div>
          </div>
          <span class="fl">团购费</span>
        </div>
      </div>
      <div class="right_legend fr clearfix">
        <div class="leftContent fl">
          <div class="intop clearfix">
            <div class="circle circle_qdyj fl">
              <div class="incircle">
                <div class="circleSolid"></div>
              </div>
            </div>
            <span class="fl">渠道佣金</span>
          </div>
          <div class="inbottom clearfix">
            <div class="circle circle_xmyy fl">
              <div class="incircle">
                <div class="circleSolid"></div>
              </div>
            </div>
            <span class="fl">项目运营</span>
          </div>
        </div>
        <div class="rightContent fr">
          <div class="intop clearfix">
            <div class="circle circle_qyft fl">
              <div class="incircle">
                <div class="circleSolid"></div>
              </div>
            </div>
            <span class="fl">区域分摊</span>
          </div>
          <div class="inbottom clearfix">
            <div class="circle circle_zbft fl">
              <div class="incircle">
                <div class="circleSolid"></div>
              </div>
            </div>
            <span class="fl">总部分摊</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Event } from '../assets/eventBus'
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
// require('echarts/lib/component/legend'); 

export default {
  data() {
    return {
      groupCount: 0, // 团购费
      partyCommission: 0, // 甲方佣金
      areaApportionment: 0, // 区域分摊
      hqApportionment: 0, // 总部分摊
      projectOperation: 0, // 项目运营
      placeCommission: 0 // 渠道佣金
    }
  },
  methods: {
    initBarChart() {
      const self = this;
      var myChart = echarts.init(document.getElementById('inbar'));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color: ['#FBB661', '#F79A33', '#7FCAB3', '#DEE598', '#B4C56D', '#669940'],
        legend: {
          show: false,
          data: ['团购费', '甲方佣金', '区域分摊', '总部分摊', '项目运营', '渠道佣金'],
          x: "center",
          y: 'bottom'
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#333',
              fontSize: '14'
            }
          },
          splitLine: {
            // show: false,
            //  改变轴线颜色
            lineStyle: {
              type: 'dashed',
              // 使用深浅的间隔色
              color: '#d6d6d6',
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              type: 'dashed',
              width: 0,   //这里是坐标轴的宽度,可以去掉
            }
          },
          data: ['主营业务收入', '主营业务成本']
        },
        yAxis: {
          show: true,
          type: 'value',
          splitNumber: 4, // 坐标轴的分割段数,默认为5
          splitLine: {
            lineStyle: {
              type: 'dashed' // 设置基准线样式
            }
          },
          axisLine: {
            lineStyle: {
              color: '#908983',
              width: 0,   //这里是坐标轴的宽度,可以去掉
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#908983',
              fontSize: '14',
              fontWeight: 'normal'
            }
          },
          axisTick: { // 坐标轴刻度显示
            show: false
          }
        },
        series: [
          {
            name: '团购费',
            type: 'bar',
            stack: '总量',
            barWidth: 100,
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: function(params) { // 格式化在柱图上文字显示内容
                  return params.data === 0 ? '' : '￥ ' + params.data;
                }
              }
            },
            data: [self.groupCount, 0, 0, 0, 0, 0]
          },
          {
            name: '甲方佣金',
            type: 'bar',
            stack: '总量',
            barWidth: 100,
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: function(params) { // 格式化在柱图上文字显示内容
                  return params.data === 0 ? '' : '￥ ' + params.data;
                }
              }
            },
            data: [self.partyCommission, 0, 0, 0, 0, 0]
          },
          {
            name: '区域分摊',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: function(params) { // 格式化在柱图上文字显示内容
                  return params.data === 0 ? '' : '￥ ' + params.data;
                }
              }
            },
            data: [0, self.areaApportionment, 0, 0, 0, 0]
          },
          {
            name: '总部分摊',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: function(params) { // 格式化在柱图上文字显示内容
                  return params.data === 0 ? '' : '￥ ' + params.data;
                }
              }
            },
            data: [0, self.hqApportionment, 0, 0, 0, 0]
          },
          {
            name: '项目运营',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: function(params) { // 格式化在柱图上文字显示内容
                  return params.data === 0 ? '' : '￥ ' + params.data;
                }
              }
            },
            data: [0, self.projectOperation, 0, 0, 0, 0]
          },
          {
            name: '渠道佣金',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
              normal: {
                show: true,
                position: 'inside', // 文字在柱图上显示的位置
                formatter: function(params) { // 格式化在柱图上文字显示内容
                  return params.data === 0 ? '' : '￥ ' + params.data;
                }
              }
            },
            data: [0, self.placeCommission, 0, 0, 0, 0]
          }
        ]
      });
    }
  },
  mounted() {
    const async = () => { // 子组件异步获取主页数据
      return new Promise((resolve,reject) => {
       Event.$on('homejson', data => {
          resolve(data)
        })
      })
    }

    async().then(arr => {
      this.groupCount = arr[4].money + arr[5].money;
      this.partyCommission = arr[1].money + arr[2].money + arr[3].money - arr[12].money;
      this.areaApportionment = arr[9].money + arr[10].money;
      this.hqApportionment = arr[0].money;
      this.projectOperation = arr[6].money + arr[7].money;
      this.placeCommission = arr[8].money;
    }).then(val => {
      this.initBarChart();
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped lang="less">
@import url('../assets/less/public.less');

.barWrap {
  width: 100%;
  padding-top: 50px;
}

.inbar {
  width: 100%;
  height: 300px;
}

.mylegend {
  width: 100%;
  height: 100px;
  padding-top: 26px;
}

.mylegend .left_legend {
  width: 35%;
  height: 100%;
  border-right: 1px solid #A49C96;
}

.mylegend .right_legend {
  width: 58%;
  height: 100%;
}

.mylegend .left_legend .intop,
.mylegend .left_legend .inbottom,
.mylegend .right_legend .intop,
.mylegend .right_legend .inbottom {
  height: 50%;
  width: 100%;
  text-align: center;
  line-height: 50px;
  span {
    color: #908983;
  }
}

.mylegend .left_legend .circle {
  margin: 0 10px 0 40px;
}

.mylegend .right_legend .leftContent {
  width: 40%;
  height: 100%;
}

.mylegend .right_legend .rightContent {
  width: 60%;
  height: 100%;
}

.mylegend .right_legend .leftContent,
.mylegend .right_legend .rightContent {
  .circle {
    margin: 0 10px;
  }
}

.circle_tgf {
  .public_circle(#FAB467);
}

.circle_jfyj {
  .public_circle(#F79A33);
}

.circle_qdyj {
  .public_circle(#669940);
}

.circle_xmyy {
  .public_circle(#B4C56D);
}

.circle_qyft {
  .public_circle(#7FCAB3);
}

.circle_zbft {
  .public_circle(#DEE598);
}
</style>

