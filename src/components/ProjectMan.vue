<template>
  <div id="project" class="projectTable">
    <el-table :data="tableData2" border style="width: 100%" @expand="handle">
      <el-table-column type="expand" width="30">
        <template scope="scope">
          <el-table :data="in_tableData2" border :show-header="false" style="width: 100%" class="table-expand">
            <el-table-column prop="in_area" align="center" width="120" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_totalIncome" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_commisionIncome" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_premium" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_award" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_receivedGroupon" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_accountsGroupon" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_totalCost" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_acExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_ldExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_channelCom" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_apportion" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_allcount" align="center" :show-overflow-tooltip="true" class-name="special"></el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="area" align="center" label="区域" width="120" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column align="center" label="主营业务收入" :show-overflow-tooltip="true">
        <el-table-column align="center" prop="totalIncome" label="总计" :show-overflow-tooltip="true">
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
        <el-table-column align="center" prop="totalCost" label="总计" :show-overflow-tooltip="true">
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
      <el-table-column align="center" prop="allcount" label="总计" :show-overflow-tooltip="true">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData2: [
        // {
        //   area: '第一事业部第一事业部333',
        //   totalIncome: 300000000,
        //   commisionIncome: 2324234234234,
        //   premium: 239,
        //   award: 987,
        //   receivedGroupon: 67,
        //   accountsGroupon: 591,
        //   totalCost: 670,
        //   acExpense: 45,
        //   ldExpense: 190,
        //   channelCom: 98705,
        //   apportion: 7554,
        //   allcount: 12314
        // }
      ],
      in_tableData2: [
        {
          in_area: '第一事业部第一事业部',
          in_totalIncome: 300000000,
          in_commisionIncome: 23,
          in_premium: 239,
          in_award: 987,
          in_receivedGroupon: 67,
          in_accountsGroupon: 591,
          in_totalCost: 670,
          in_acExpense: 45,
          in_ldExpense: 190,
          in_channelCom: 98705,
          in_apportion: 7554,
          in_allcount: 123090149999
        },
        {
          in_area: '第一事业部第一事业部',
          in_totalIncome: 300000000,
          in_commisionIncome: 23,
          in_premium: 239,
          in_award: 987,
          in_receivedGroupon: 67,
          in_accountsGroupon: 591,
          in_totalCost: 670,
          in_acExpense: 45,
          in_ldExpense: 190,
          in_channelCom: 98705,
          in_apportion: 7554,
          in_allcount: 12314
        }
      ]
    }
  },
  methods: {
    getData() {
      this.$http.post('/efangfin/outgoing/table.do', {
        xtype: 0,
        xname: 0,
        xtime: 0
      }).then(data => {
        console.log(data)
        let myData = data.data;
        if (JSON.stringify(myData)) {
          let status = myData.status;
          switch (status) {
            case 1:
              let inData = myData.data;
              if (inData.length) {
                this.tableData2 = inData;
              } else {
                this.$message({
                  showClose: true,
                  message: '项目经营情况数据为空',
                  type: 'warning'
                });
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
                message: '获取项目经营情况异常status',
                type: 'error'
              });
              break;
          }
        } else {
          this.$message({
            showClose: true,
            message: '暂无数据',
            type: 'warning'
          });
          return;
        }
      }).catch(error => {
        console.log(error)
      })
    },
    handle(row, expanded) {
      console.log(row, expanded)
    },
  },
  mounted() {
    this.getData();
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
