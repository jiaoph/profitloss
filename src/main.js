import Vue from 'vue'
import { Breadcrumb, 
  BreadcrumbItem, 
  Table, 
  TableColumn, 
  Tooltip,
  Select,
  Option } from 'element-ui'

import axiosPlugin from './axios_config/index'
import App from './App.vue'
import filters from './filters/'

Vue.use(axiosPlugin);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

new Vue({
  el: '#app',
  render: h => h(App)
})
