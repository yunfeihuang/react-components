import AsyncComponent from '../components/AsyncComponent'

const Home = AsyncComponent(() => import('./Home'))
const Button = AsyncComponent(() => import('./Button'))
const Mine = AsyncComponent(() => import('./Mine'))
const Actionsheet = AsyncComponent(() => import('./Actionsheet'))

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/mine',
    exact: true,
    component: Mine
  },
  {
    path: '/demos/button',
    exact: true,
    component: Button
  },
  {
    path: '/demos/actionsheet',
    exact: true,
    component: Actionsheet
  }
]