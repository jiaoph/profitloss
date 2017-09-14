<template>
  <div id="contentWrap" class="content">
    <Crumbs></Crumbs>
    <div class="mainBusiness clearfix">
      <div class="tab fl clear">
        <Tabs></Tabs>
      </div>
      <div class="barChart fr">
        <BarChart></BarChart>
      </div>
    </div>
    <div class="OpeIncome clearfix">
      <h2 class="subtitle">主营业收入</h2>
      <div class="pie fl">
        <PieChart></PieChart>
      </div>
      <div class="tableIncome fl"></div>
    </div>
  </div>
</template>

<script>
import Crumbs from './Crumbs.vue'
import Tabs from './Tabs.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'

export default {
  name: 'contentWrap',
  components: {
    Crumbs,
    Tabs,
    BarChart,
    PieChart
  }
}
</script>


<style lang='less'>
@import url('../assets/less/public');
.content{
    width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    .boxSizing();
    >.mainBusiness{
      width: 100%;
      padding-top: 16px;
      >.tab{
        width: 416px;
        padding-left: 40px;
      }
      >.barChart{
        width: 510px;
        padding-right: 100px;
      }
    }
    >.OpeIncome{
      width: 100%;
      padding:40px 0 0 40px;
      >.subtitle{
        font-size: 20px;
        font-weight: normal;
      }
      >.pie{
        margin-left: 40px;
        padding: 20px;
      }
    }
}
</style>

