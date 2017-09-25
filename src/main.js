import Vue from 'vue'
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  Table, 
  TableColumn, 
  Tooltip,
  Select,
  Option } from 'element-ui'

import axiosPlugin from './axios_config/index'
import App from './App.vue'
import filters from './filters/'
import store from './store/'
import VueRouter from 'vue-router'
import routes from './router.config'

Vue.use(axiosPlugin)
Vue.use(VueRouter)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

const router = new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
