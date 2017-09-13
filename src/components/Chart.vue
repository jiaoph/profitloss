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
                data: ['主营业收入', '主营业成本']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data:['主营业收入', '主营业成本']
            },
            yAxis: {
                type: 'value'
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
                    data: [320, 3024]
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
                    data: [120, 132]
                }
            ]
        });
    }
}
</script>

<style scoped>
.barWrap {
    width: 100%;
    height: 500px;
}
</style>

