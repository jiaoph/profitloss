<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <Home></Home>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeaderVue,
    Home
  }
}
</script>

<style rel="stylesheet/less" lang="less">
@import "./assets/less/reset.css";
@import "./assets/less/reset_elementui.less";
</style>
