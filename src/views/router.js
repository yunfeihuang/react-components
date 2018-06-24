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
    path: '/demos/popover',
    exact: true,
    component: AsyncComponent(() => import('./Popover'))
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
    path: '/demos/inputnumber',
    exact: true,
    component: AsyncComponent(() => import('./InputNumber'))
  },
  {
    path: '/demos/password',
    exact: true,
    component: AsyncComponent(() => import('./Password'))
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
  },
  {
    path: '/demos/checker',
    exact: true,
    component: AsyncComponent(() => import('./Checker'))
  },
  {
    path: '/demos/radio',
    exact: true,
    component: AsyncComponent(() => import('./Radio'))
  },
  {
    path: '/demos/select',
    exact: true,
    component: AsyncComponent(() => import('./Select'))
  },
  {
    path: '/demos/alert',
    exact: true,
    component: AsyncComponent(() => import('./Alert'))
  },
  {
    path: '/demos/prompt',
    exact: true,
    component: AsyncComponent(() => import('./Prompt'))
  },
  {
    path: '/demos/confirm',
    exact: true,
    component: AsyncComponent(() => import('./Confirm'))
  },
  {
    path: '/demos/toast',
    exact: true,
    component: AsyncComponent(() => import('./Toast'))
  },
  {
    path: '/demos/textarea',
    exact: true,
    component: AsyncComponent(() => import('./Textarea'))
  },
  {
    path: '/demos/spinner',
    exact: true,
    component: AsyncComponent(() => import('./Spinner'))
  },
  {
    path: '/demos/tab',
    exact: true,
    component: AsyncComponent(() => import('./Tab'))
  },
  {
    path: '/demos/tabbar',
    exact: true,
    component: AsyncComponent(() => import('./Tabbar'))
  },
  {
    path: '/demos/sidebar',
    exact: true,
    component: AsyncComponent(() => import('./Sidebar'))
  },
  {
    path: '/demos/buttontab',
    exact: true,
    component: AsyncComponent(() => import('./ButtonTab'))
  },
  {
    path: '/demos/rater',
    exact: true,
    component: AsyncComponent(() => import('./Rater'))
  },
  {
    path: '/demos/range',
    exact: true,
    component: AsyncComponent(() => import('./Range'))
  },
  {
    path: '/demos/ripple',
    exact: true,
    component: AsyncComponent(() => import('./Ripple'))
  },
  {
    path: '/demos/badge',
    exact: true,
    component: AsyncComponent(() => import('./Badge'))
  },
  {
    path: '/demos/accordion',
    exact: true,
    component: AsyncComponent(() => import('./Accordion'))
  },
  {
    path: '/demos/img',
    exact: true,
    component: AsyncComponent(() => import('./Img'))
  },
  {
    path: '/demos/swiper',
    exact: true,
    component: AsyncComponent(() => import('./Swiper'))
  },
  {
    path: '/demos/preview',
    exact: true,
    component: AsyncComponent(() => import('./Preview'))
  },
  {
    path: '/demos/qrcode',
    exact: true,
    component: AsyncComponent(() => import('./Qrcode'))
  },
  {
    path: '/demos/marquee',
    exact: true,
    component: AsyncComponent(() => import('./Marquee'))
  }
]
