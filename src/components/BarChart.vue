<template>
    <div id="barWrap" class="barWrap">

    </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');

export default {
    mounted() {
        var myChart = echarts.init(document.getElementById('barWrap'));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['主营业收入', '主营业成本', '', '', '', ''],
                x: "center",
                y: 'bottom'
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '4%',
                // bottom: '3%',
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
                        // 使用深浅的间隔色
                        color: '#d6d6d6',
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        width: 3,   //这里是坐标轴的宽度,可以去掉
                    }
                },
                data: ['主营业收入', '主营业成本', ' ', ' ', ' ', ' ']
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: '主营业收入',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 304, 0, 0, 0, 0]
                },
                {
                    name: '主营业成本',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [240, 123, 0, 0, 0, 0]
                },
                {
                    name: '3',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [0, 234, 0, 0, 0, 0]
                },
                {
                    name: '4',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [0, 456, 0, 0, 0, 0]
                },
                {
                    name: '5',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [0, 0, 0, 0, 0, 0]
                },
                {
                    name: '6',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [0, 0, 0, 0, 0, 0]
                }
            ]
        });
    }
}
</script>

<style scoped>
.barWrap {
    width: 100%;
    height: 420px;
}
</style>

