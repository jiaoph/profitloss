<template>
  <div id="app">
    <HeaderVue></HeaderVue>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    HeaderVue
  }
}
</script>

<style>
@import "./assets/less/reset.css";
</style>
