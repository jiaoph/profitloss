<template>
    <div id="tabWrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="营业利润表" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="现金流量表" name="second">配置管理</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>

</style>
