import AsyncComponent from '../components/AsyncComponent'
/*
const requireComponent = require.context('.', false, /\.js$/) // 找到demos文件夹下以.vue命名的文件
let route = []
requireComponent.keys().forEach(fileName => {
  let path = fileName.replace('./', '/')
  let App = 'Home.js'
  if (fileName.indexOf('router.js') === -1) {
    if (fileName.indexOf('Home.js') > -1) {
      console.log(`./${App}`)
      route.push({
        exact: true,
        path: '/',
        component: () => AsyncComponent(() => import(`./${App}`))
      })
    } else {
      // console.log(`.${fileName.replace('.', '')}`)
      route.push({
        exact: true,
        path: path.toLocaleLowerCase().replace('.js', ''),
        component: () => AsyncComponent(() => import(`.${fileName.replace('.', '')}`))
      })
    }
  }
})
console.log(route)
export default route
*/

export default [
  {
    path: '/',
    exact: true,
    component: AsyncComponent(() => import('./Home'))
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
  },
  {
    path: '/demos/divider',
    exact: true,
    component: AsyncComponent(() => import('./Divider'))
  },
  {
    path: '/demos/message',
    exact: true,
    component: AsyncComponent(() => import('./Message'))
  },
  {
    path: '/demos/checkbox',
    exact: true,
    component: AsyncComponent(() => import('./Checkbox'))
  }
]
