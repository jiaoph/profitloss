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
  Pagination,
  Icon  } from 'element-ui'

import "babel-polyfill"
import axiosPlugin from './axios_config/index'
import App from './App'
import filters from './filters/'
import store from './store/'
import router from './router'

Vue.config.productionTip = false // 生产环境提示

// const echarts = require('echarts/lib/echarts'); // 引入 ECharts 主模块
// require('echarts/lib/chart/pie'); // 引入饼图
// require('echarts/lib/chart/bar'); // 引入柱状图
// require('echarts/lib/component/tooltip'); // 引入提示框
// Object.defineProperty(Vue.prototype, "$echarts", { value: echarts })

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
Vue.component(Icon.name, Icon)
Object.defineProperty(Vue.prototype, "$message", { value: Message })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
