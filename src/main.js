import Vue from 'vue'
import { Breadcrumb, BreadcrumbItem,Table,TableColumn,Tooltip } from 'element-ui'
import App from './App.vue'

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tooltip.name, Tooltip)

new Vue({
  el: '#app',
  render: h => h(App)
})
