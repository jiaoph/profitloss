<template>
  <div id="project" class="projectTable">
    <el-table :data="tableData2" height="600" border style="width: 100%" @expand="handle" :row-key="getRowKeys" :expand-row-keys="expands">
      <el-table-column type="expand" width="30">
        <template scope="scope">
          <el-table :data="in_tableData2" border :show-header="false" style="width: 100%" class="table-expand">
            <el-table-column prop="area" align="center" width="120" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_totalIncome" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="commissionEarned" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="premium" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="partyReward" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="receivedGroup" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="receivableGroup" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="in_totalCost" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="saleExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="placeExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="channelCommission" align="center" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="shareExpense" align="center" :show-overflow-tooltip="true"></el-table-column>
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
import { mapGetters } from 'vuex'
import { Message } from "element-ui";

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
      expands: [] // 要展开的行，数值的元素是row的key值
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
                Message({
                  showClose: true,
                  message: '数据为空',
                  type: 'warning'
                });
              }
              break;
            case 0:
              Message({
                showClose: true,
                message: '获取项目经营情况错误',
                type: 'error'
              });
              break;
            default:
              Message({
                showClose: true,
                message: '项目经营情况异常status',
                type: 'error'
              });
              break;
          }
        } else {
          Message({
            showClose: true,
            message: '暂无数据',
            type: 'warning'
          });
          return;
        }
      }).catch(error => {
        Message({
          showClose: true,
          // message: '项目经营情况异常错误',
          message: error,
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

            this.getData(type, area, "0");
            this.expands.push(area)
            break;
          case "0":
            break;
        }
      } else {
        this.expands = [];
        this.lastexpanded = expanded;
      };
    }
  },
  mounted() {
    this.getData("0", "0", "0"); //营运中心默认获取
    console.log(this.time_val)
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
