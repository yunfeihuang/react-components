import AsyncComponent from '../components/AsyncComponent'

const Home = AsyncComponent(() => import('./Home'))
const Mine = AsyncComponent(() => import('./Mine'))

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
  }
]