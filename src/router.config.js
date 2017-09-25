import Home from './components/Home'
import SupportDepartCosts from './components/SupportDepartCosts'

export default [
  {
    path: '/home',
    component: Home
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
    redirect: '/home'
  }
]