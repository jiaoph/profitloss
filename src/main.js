// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Tooltip,
  Select,
  Option,
  Message,
  Pagination  } from 'element-ui'

import "babel-polyfill"
import axiosPlugin from './axios_config/index'
import App from './App'
import filters from './filters/'
import store from './store/'
import router from './router'

Vue.config.productionTip = false

Vue.use(axiosPlugin)
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Pagination.name, Pagination)
Vue.component(Message.name, Message)
Object.defineProperty(Vue.prototype, "$message", { value: Message })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
