<template>
  <div id="app">
    <HeaderVue></HeaderVue>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
// import Home from './components/Home.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    HeaderVue,
    // Home
  }
}
</script>

<style rel="stylesheet/less" lang="less">
@import "./assets/less/reset.css";
@import "./assets/less/reset_elementui.less";
@import "./assets/less/public";

.content {
  width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  background-color: #fff;
  .boxSizing();
}

.timeselect {
  width: 76px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  >.resetSelect {
    .el-input__icon {
      color: #EC9028;
    }
    .el-input__inner {
      color: #ED9127;
      font-size: 12px;
      background-color: #FCF1E5;
      border-color: #ED9127;
    }
  }
}
</style>
