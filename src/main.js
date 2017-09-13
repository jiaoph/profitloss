import Vue from 'vue'
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
import App from './App.vue'

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)  

new Vue({
  el: '#app',
  render: h => h(App)
})
