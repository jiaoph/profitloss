<template>
  <div id="detailTable" class="content">
    <Crumbs></Crumbs>
    <div class="clearfix"></div>
    <div class="title clearfix">
      <h3 class="fl">
        <span>支持部门成本</span>
        <span class="totalCount">
          <b>202088883</b>元</span>
      </h3>
      <div class="timeselect fr">
        <el-select v-model="value" @change="change" placeholder="请选择" class="resetSelect">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>

    <el-table :data="tableData3" max-height="400" border style="width: 100%">
      <el-table-column
        prop="ffeiyong"
        label="报销类型"
        align="center"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="famountfor"
        label="报销金额"
        align="center"
        :show-overflow-tooltip="true"
        :formatter="countFormatter">
      </el-table-column>
      <el-table-column
        prop="femp"
        label="报销人"
        align="center"
        width="120"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="departName"
        label="报销部门"
        align="center"
        width="250"
        :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column
        prop="fdate"
        label="报销时间"
        align="center"
        :show-overflow-tooltip="true"
        :formatter="timeFormatter">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        align="center"
        :show-overflow-tooltip="true"
        :formatter="remarkFormatter">
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="20"
        layout="total, prev, pager, next, jumper"
        :total="pageCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Crumbs from './Crumbs'
import { mapGetters } from 'vuex'

export default {
  name: 'detailTable',
  computed: mapGetters([
    'time_val',
    'fzixnumber_id'
  ]),
  components: {
    Crumbs
  },
  data() {
    return {
      currentPage: 1,
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
      pageCount: 0, // 总页数
      tableData3: [], // 表格数据
      fzixnumber: '' // 费用id
    }
  },
  methods: {
    change(val) {
      if(this.currentPage !== 1) {
        this.currentPage = 1;
        this.value = val;
      }else{
        this.getData('0','',val,this.fzixnumber,'0');
        // this.getData('0', '', val, '5001', '0'); // 测试用
      }
    },
    handleCurrentChange(val) {
      console.log(this.currentPage)
      this.getData('0','',this.value,this.fzixnumber,(val-1).toString());
      // this.getData('0', '', this.value, '5001', (val-1).toString()); // 测试用
    },
    getData() {
      if (arguments.length !== 5) {
        this.$message({
          showClose: true,
          message: '支持部门成本参数异常错误',
          type: 'error'
        });
        return;
      }

      this.$http.post('/efangfin/outgoing/twoLevelCostView.do', {
        xtype: arguments[0],
        xname: arguments[1],
        xtime: arguments[2],
        xnumber: arguments[3],
        pageNum: arguments[4],
        pageSize: 20
      }).then(data => {
        console.log(data)
        let myData = data.data;
        if (JSON.stringify(myData)) {
          let status = myData.status;
          switch (status) {
            case 1:
              this.pageCount = myData.data.pageCount;
              let inData = myData.data.page;
              if (inData.length) {
                this.tableData3 = inData;
              } else {
                this.tableData3 = [];
                return;
              }
              break;
            case 0:
              this.$message({
                showClose: true,
                message: '支持部门成本数据获取错误',
                type: 'error'
              });
              break;
            default:
              break;
          }
        } else {
          this.$message({
            showClose: true,
            message: '支持部门成本暂无数据',
            type: 'warning'
          });
          return;
        }
      }).catch(err => {
        this.$message({
          showClose: true,
          duration: 2000,
          message: '支持部门成本数据获取异常',
          type: 'error'
        });
        console.log(err)
      })
    },
    countFormatter(row, column, cellValue) { // 格式化金额
      return Number.parseFloat(cellValue).toLocaleString('en-US');
    },
    timeFormatter(row, column, cellValue) { // 格式化时间
      let oDate = new Date(cellValue);
      return oDate.getFullYear()+"-"+(oDate.getMonth()+1)+"-"+oDate.getDate();
    },
    remarkFormatter(row, column, cellValue) { // 格式化备注
      return cellValue == '' ? '无' : cellValue;
    }
  },
  mounted() {
    this.value = this.time_val;
    this.fzixnumber = this.fzixnumber_id;
    this.getData('0','',this.value,this.fzixnumber,'0');
    // this.getData('0', '', this.value, '5001', '0'); // 测试用
  },
  deactivated(){
    this.$destroy(true)
  }
}
</script>

<style scoped>
.pagination {
  padding-top: 28px;
  text-align: center;
}

.title {
  line-height: 70px;
  position: relative;
}

.title h3 {
  font-size: 20px;
  font-weight: normal;
}

.title h3 .totalCount {
  /*font-family: 'Helvetica';*/
  color: #EF9128;
  margin-left: 20px;
}

.title h3 .totalCount b {
  font-weight: normal;
}
</style>

