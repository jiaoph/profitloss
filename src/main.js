import Vue from 'vue'
import { Breadcrumb, BreadcrumbItem,Tabs,TabPane } from 'element-ui'
import App from './App.vue'

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)

new Vue({
  el: '#app',
  render: h => h(App)
})
