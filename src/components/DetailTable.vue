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

    <el-table :data="tableData3" height="250" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>

    <div class="pagination">
      <el-pagination 
        @current-change="handleCurrentChange" 
        :current-page="currentPage" 
        :page-size="20" 
        layout="total, prev, pager, next, jumper" 
        :total="400">
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
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    change(val) {
      console.log(val)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getData() {
      if (arguments.length !== 5) {
        Message({
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
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.value = this.time_val;
    // this.getData('0','',this.value,this.fzixnumber_id,'0');
    this.getData('0','',this.value,'5002','0'); // 测试用
  }
}
</script>

<style scoped>
.pagination{
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

