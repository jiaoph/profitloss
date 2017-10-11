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
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
import { Message } from "element-ui"
import { Event } from '../assets/eventBus'

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
  data() {
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
      value: '0', // 默认时间维度
      timeval: '0',
      homeData: ''
    }
  },
  methods: {
    getfindAllData() {
      // this.$http.post('/efangfin/financial/findAll.do',{
      this.$http.post('https://easy-mock.com/mock/59ce1fb7c5c4302238f5706f/www.caiwuyingkui.com/efangfin/financial/findAll.do', {
        xtype: "0",
        xname: '',
        xtime: this.timeval
      }).then(data => {
        let myData = data.data;
        if (JSON.stringify(myData)) {
          let status = myData.status;
          switch (status) {
            case 0:
              Message({
                showClose: true,
                message: '主营业务收入/成本错误',
                type: 'error'
              });
              break;
            case 1:
              this.homeData = myData.data;
              // console.log(this.homeData)
              Event.$emit('homejson', this.homeData);
              break;
            default:
              Message({
                showClose: true,
                message: '主营业务收入/成本异常status',
                type: 'error'
              });
              break;
          }
        } else {
          Message({
            showClose: true,
            message: '主营业务收入/成本暂无数据',
            type: 'warning'
          });
          return;
        }
      }).catch(error => {
        Message({
          showClose: true,
          duration: 1800,
          message: '主营业数据获取异常错误',
          type: 'error'
        });
        console.log(error) 
      })
    },
    change(val) {
      this.timeval = val;
      this.$store.dispatch('timechange', val);
    }
  },
  mounted() {
    this.getfindAllData();
  }
}
</script>


<style scoped lang='less'>
@import url('../assets/less/public');
.content {
  >.mainBusiness {
    width: 100%;
    padding-top: 16px;
    margin-bottom: 30px;
    >.tab {
      width: 416px;
      padding-left: 40px;
    }
    >.barChart {
      width: 510px;
      padding-right: 100px;
      position: relative;
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
        margin-right: 46px;
      }
      >.pieCosts {
        padding-top: 110px;
      }
    }
    >.inprojectMan {
      width: 100%;
      padding: 60px 8px 0 0;
      .boxSizing();
    }
  }
  >.opeIncome:last-child {
    border-bottom: 0;
  }
}
</style>

