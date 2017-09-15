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
    <div class="opeIncome">
      <h2 class="subtitle">主营业收入</h2>
      <div class="content clearfix">
        <div class="pie fl">
          <PieChart></PieChart>
        </div>
        <div class="tableIncome fl">
          <TableIncome></TableIncome>
        </div>
      </div>
    </div>
    <div class="opeIncome opeCosts">
      <h2 class="subtitle">主营业成本</h2>
      <div class="content clearfix">
        <div class="pie pieCosts fl">
          <PieChartCosts></PieChartCosts>
        </div>
        <div class="tableIncome fl">
          <TableCosts></TableCosts>
        </div>
      </div>
    </div>
    <div class="opeIncome projectMan">
      <h2 class="subtitle">项目经营情况</h2>
        <div class="inprojectMan">
          <ProjectMan></ProjectMan>
        </div>
    </div>
  </div>
</template>

<script>
import Crumbs from './Crumbs.vue'
import Tabs from './Tabs.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'
import TableIncome from './TableIncome.vue'
import PieChartCosts from './PieChartCosts.vue'
import TableCosts from './TableCosts.vue'
import ProjectMan from './ProjectMan.vue'

export default {
  name: 'contentWrap',
  components: {
    Crumbs,
    Tabs,
    BarChart,
    PieChart,
    TableIncome,
    PieChartCosts,
    TableCosts,
    ProjectMan
  }
}
</script>


<style lang='less'>
@import url('../assets/less/public');
.content {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  background-color: #fff;
  .boxSizing();
  >.mainBusiness {
    width: 100%;
    padding-top: 16px;
    >.tab {
      width: 416px;
      padding-left: 40px;
    }
    >.barChart {
      width: 510px;
      padding-right: 100px;
    }
  }
  >.opeIncome {
    width: 100%;
    padding: 40px 0 70px 40px;
    border-bottom: 1px solid #dddddd;
    .boxSizing();
    >.subtitle {
      font-size: 20px;
      font-weight: normal;
    }
    >.content {
      padding-top: 20px;
      width: 100%;
      >.pie {
        padding-top: 40px;
        margin-right:46px;
      }
      >.pieCosts{
        padding-top: 110px;
      }
    }
    >.inprojectMan{
      width: 100%;
      padding: 60px 50px 0 0;
      .boxSizing();
    }
  }
  >.opeIncome:last-child{
    border-bottom: 0;
  }
}
</style>

