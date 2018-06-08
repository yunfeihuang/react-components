import AsyncComponent from '../components/AsyncComponent'

export default [
  {
    path: '/',
    exact: true,
    component: AsyncComponent(() => import('./Home'))
  },
  {
    path: '/mine',
    exact: true,
    component: AsyncComponent(() => import('./Mine'))
  },
  {
    path: '/demos/button',
    exact: true,
    component: AsyncComponent(() => import('./Button'))
  },
  {
    path: '/demos/actionsheet',
    exact: true,
    component: AsyncComponent(() => import('./Actionsheet'))
  },
  {
    path: '/demos/popup',
    exact: true,
    component: AsyncComponent(() => import('./Popup'))
  },
  {
    path: '/demos/flexbox',
    exact: true,
    component: AsyncComponent(() => import('./Flexbox'))
  },
  {
    path: '/demos/layout',
    exact: true,
    component: AsyncComponent(() => import('./Layout'))
  },
  {
    path: '/demos/nav',
    exact: true,
    component: AsyncComponent(() => import('./Nav'))
  },
  {
    path: '/demos/switch',
    exact: true,
    component: AsyncComponent(() => import('./Switch'))
  },
  {
    path: '/demos/input',
    exact: true,
    component: AsyncComponent(() => import('./Input'))
  },
  {
    path: '/demos/group',
    exact: true,
    component: AsyncComponent(() => import('./Group'))
  },
  {
    path: '/demos/cell',
    exact: true,
    component: AsyncComponent(() => import('./Cell'))
  }
]