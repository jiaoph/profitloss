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

<style>
@import "./assets/less/reset.css";
#app{
  padding-bottom: 40px;
}
</style>
