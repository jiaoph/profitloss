import Home from './components/Home'
import SupportDepartCosts from './components/SupportDepartCosts'
import TabsOpeProfit from './components/TabsOpeProfit'
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
      }
    ]
  },
  {
    path: '/supportDepartCosts',
    component: SupportDepartCosts
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