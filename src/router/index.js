import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SupportDepartCosts from '@/components/SupportDepartCosts'
import TabsOpeProfit from '@/components/TabsOpeProfit'
import TabsCashFlow from '@/components/TabsCashFlow'
import DetailTable from '@/components/DetailTable'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          component: TabsOpeProfit
        },
        {
          path: 'tabsOpeProfit',
          component: TabsOpeProfit
        },
        {
          path: 'tabsCashFlow',
          component: TabsCashFlow
        }
      ]
    },
    {
      path: '/supportDepartCosts',
      component: SupportDepartCosts
    },
    {
      path: '/detailTable',
      component: DetailTable
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
