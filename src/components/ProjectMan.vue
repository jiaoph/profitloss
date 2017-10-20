<template>
  <div id="project" class="projectTable">
    <el-table :data="tableData2" max-height="600" border style="width: 100%" @expand="handle" @cell-click="cellClick" :row-key="getRowKeys" :expand-row-keys="expands">
      <el-table-column type="expand" width="30">
        <template scope="scope">
          <el-table :data="in_tableData2" border :show-header="false" style="width: 100%" class="table-expand">
            <el-table-column prop="area" align="center" width="115" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="totalIncome" align="center" :formatter="formatter_totalIncome" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="commissionEarned" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="premium" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="partyReward" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="receivedGroup" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="receivableGroup" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="totalCost" align="center" :formatter="formatter_totalCost" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="saleExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="placeExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="channelCommission" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="shareExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="allcount" align="center" :formatter="formatter_allcount" :show-overflow-tooltip="true" class-name="special"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="area" align="center" label="区域" width="115" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column align="center" label="主营业务收入" :show-overflow-tooltip="true">
        <el-table-column align="center" prop="totalIncome" :formatter='formatter_totalIncome' label="总计" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="commissionEarned" label="佣金收入" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="premium" label="溢价" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="partyReward" label="甲方奖励" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="receivedGroup" label="已收团购" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="receivableGroup" label="应收团购" :show-overflow-tooltip="true">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="主营业务成本">
        <el-table-column align="center" prop="totalCost" :formatter="formatter_totalCost" label="总计" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="saleExpense" label="案场费用" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="placeExpense" label="联动费用" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="channelCommission" label="渠道佣金" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column align="center" prop="shareExpense" label="分摊" :show-overflow-tooltip="true">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" prop="allcount" :formatter="formatter_allcount" label="总计" :show-overflow-tooltip="true">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'project',
  computed: mapGetters([
    'time_val'
  ]),
  data() {
    return {
      tableData2: [],
      in_tableData2: [],
      lastarea: '',
      lastexpanded: '',
      expands: [], // 要展开的行，数值的元素是row的key值
      time:'0' //默认时间维度
    }
  },
  watch:{ //监听time_val
    time_val(val, oldval){
      this.time = val;
      this.expands = [];
      this.getData("0", "0", this.time);
    }
  },
  methods: {
    getData(xtype, xname, xtime) {
      this.$http.post('/efangfin/outgoing/table.do', {
        xtype: xtype,
        xname: xname,
        xtime: xtime
      }).then(data => {
        // console.log(data)
        let myData = data.data;
        if (JSON.stringify(myData)) {
          let status = myData.status;
          switch (status) {
            case 1:
              let inData = myData.data;
              if (inData.length) {
                switch (xtype) {
                  case "0":
                    this.tableData2 = inData;
                    break;
                  case "1":
                    this.in_tableData2 = inData;
                    break;
                  case "2":
                    break;
                  default:
                    break;
                }

              } else {
                switch (xtype) {
                  case "0":
                    this.tableData2 = [];
                    break;
                  case "1":
                    this.in_tableData2 = [];
                    break;
                  case "2":
                    break;
                  default:
                    break;
                }
              }
              break;
            case 0:
              this.$message({
                showClose: true,
                message: '获取项目经营情况错误',
                type: 'error'
              });
              break;
            default:
              this.$message({
                showClose: true,
                message: '项目经营情况异常status',
                type: 'error'
              });
              break;
          }
        } else {
          this.$message({
            showClose: true,
            message: '项目经营情况暂无数据',
            type: 'warning'
          });
          return;
        }
      }).catch(error => {
        this.$message({
          showClose: true,
          duration: 1800,
          message: '项目经营情况异常错误',
          type: 'error'
        });
        console.log(error)
      })
    },
    getRowKeys(row) {
      return row.area;
    },
    handle(row, expanded) {
      let type = row.type,
        area = row.area;

      if (area !== this.lastarea) {
        // console.log('点击的不是同一个');
        if (this.lastexpanded) {
          // console.log('之前的应该关闭');
          this.expands = [];
        }
      }

      if (expanded) {
        switch (type) {
          case "2":
            this.expands = [];
            break;
          case "1":
            this.lastarea = area;
            this.lastexpanded = expanded;

            this.getData(type, area, this.time);
            this.expands.push(area)
            break;
          case "0":
            break;
        }
      } else {
        this.expands = [];
        this.lastexpanded = expanded;
      };
    },
    cellClick(row, column){
      let label = column.label;
      if(label === "区域") {
        console.log('应该进入事业部主页')
      }
    },
    formatter_totalIncome(row){
      let totalIncome = row.commissionEarned + row.premium + row.partyReward + row.receivedGroup + row.receivableGroup;
      return totalIncome === 0 ? 0 : totalIncome.toFixed(2);
    },
    formatter_totalCost(row){
      let totalCost = row.saleExpense + row.placeExpense + row.channelCommission + row.shareExpense;
      return totalCost === 0 ? 0 : totalCost.toFixed(2);
    },
    formatter_allcount(row){
      let totalIncome = row.commissionEarned + row.premium + row.partyReward + row.receivedGroup + row.receivableGroup;
      let totalCost = row.saleExpense + row.placeExpense + row.channelCommission + row.shareExpense;
      let allcount = totalIncome - totalCost;
      return allcount === 0 ? 0 : allcount.toFixed(2);
    }
  },
  mounted() {
    this.getData("0", "0", this.time); //营运中心默认获取
  }
}
</script>

<style scoped lang="less">
// @import url('../assets/less/public');
.projectTable {
  width: 100%;
}

.table-expand {
  background-color: #FCF1E5;
  border-color: #F5C691;
}
</style>
