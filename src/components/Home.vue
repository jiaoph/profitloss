<template>
  <div id="contentWrap" class="content">
    <Crumbs></Crumbs>
    <div class="mainBusiness clearfix">
      <div class="tab fl clear">
        <Tabs></Tabs>
      </div>
      <div class="barChart fr">
        <BarChart></BarChart>
        <div class="timeselect">
          <el-select v-model="value" @change="change" placeholder="请选择" class="resetSelect">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>  
      </div>
    </div>
    <div class="opeIncome">
      <h2 class="subtitle">主营业务收入</h2>
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
      <h2 class="subtitle">主营业务成本</h2>
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
import { Message } from "element-ui";

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
  },
  data(){
    return {
      options: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '上月'
      }, {
        value: '2',
        label: '本月'
      }, {
        value: '3',
        label: '本年'
      }],
      value: '全部',
      timeval: '0'
    }
  },
  methods:{
    getfindAllData(){
      this.$http.post('/efangfin/financial/findAll.do',{
        xtype: "0",
        xname: '',
        xtime: this.timeval
      }).then(data=>{
        console.log(data)
      }).catch(error=>{
        Message({
          showClose: true,
          duration: 1800,
          message: '主营业数据获取异常错误',
          type: 'error'
        });
        console.log(error)
      })
    },
    change(val){
      this.timeval = val;
      this.$store.dispatch('timechange', val);
    }
  },
  mounted(){
    this.getfindAllData()
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
      position: relative;
      >.timeselect{
        width: 76px;
        height: 24px;
        position: absolute;
        top: 0;
        right: 0;
        >.resetSelect{
          .el-input__icon{
            color:#EC9028;
          }
          .el-input__inner{
            color: #ED9127;
            font-size: 12px;
            background-color: #FCF1E5;
            border-color: #ED9127;
          }
        }
      }
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
      padding: 60px 8px 0 0;
      .boxSizing();
    }
  }
  >.opeIncome:last-child{
    border-bottom: 0;
  }
}
</style>

