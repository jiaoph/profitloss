import Home from './components/Home'
import SupportDepartCosts from './components/SupportDepartCosts'
import Error from './components/Error'

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
    component: Error
  }
]