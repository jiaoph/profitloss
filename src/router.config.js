import Home from './components/Home'
import SupportDepartCosts from './components/SupportDepartCosts'
import TabsOpeProfit from './components/TabsOpeProfit'
import TabsCashFlow from './components/TabsCashFlow'
import DetailTable from './components/DetailTable'
import Error from './components/Error'

export default [
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