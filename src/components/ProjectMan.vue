<template>
  <div id="project" class="projectTable">
    <el-table  border style="width: 100%">
      <el-table-column prop="area" align="center" label="区域" width="120">
      </el-table-column>
      <el-table-column align="center" label="主营业务收入">
        <el-table-column align="center" prop="totalIncome" label="总计" width="70">
        </el-table-column>
        <el-table-column align="center" prop="commisionIncome" label="佣金收入">
        </el-table-column>
        <el-table-column align="center" prop="premium" label="溢价">
        </el-table-column>
        <el-table-column align="center" prop="award" label="甲方奖励">
        </el-table-column>
        <el-table-column align="center" prop="receivedGroupon" label="已收团购">
        </el-table-column>
        <el-table-column align="center" prop="accountsGroupon" label="应收团购">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="主营业务成本">
        <el-table-column align="center" prop="totalCost" label="总计">
        </el-table-column>
        <el-table-column align="center" prop="acExpense" label="案场费用">
        </el-table-column>
        <el-table-column align="center" prop="ldExpense" label="联动费用">
        </el-table-column>
        <el-table-column align="center" prop="channelCom" label="渠道佣金">
        </el-table-column>
        <el-table-column align="center" prop="apportion" label="分摊">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" prop="allcount" label="总计" width="66">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  }
}
</script>

<style scoped lang="less">
// @import url('../assets/less/public');
.projectTable{
  width: 100%;
}
</style>
