import AsyncComponent from '../components/AsyncComponent'
import ConnectComponent from '../components/ConnectComponent'
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
    component: ConnectComponent(AsyncComponent(() => import('./Home')))
  },
  {
    path: '/demos/button',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Button')))
  },
  {
    path: '/demos/actionsheet',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Actionsheet')))
  },
  {
    path: '/demos/popup',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Popup')))
  },
  {
    path: '/demos/popover',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Popover')))
  },
  {
    path: '/demos/flexbox',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Flexbox')))
  },
  {
    path: '/demos/layout',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Layout')))
  },
  {
    path: '/demos/nav',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Nav')))
  },
  {
    path: '/demos/switch',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Switch')))
  },
  {
    path: '/demos/input',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Input')))
  },
  {
    path: '/demos/inputnumber',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./InputNumber')))
  },
  {
    path: '/demos/password',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Password')))
  },
  {
    path: '/demos/group',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Group')))
  },
  {
    path: '/demos/cell',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Cell')))
  },
  {
    path: '/demos/divider',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Divider')))
  },
  {
    path: '/demos/message',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Message')))
  },
  {
    path: '/demos/checkbox',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Checkbox')))
  },
  {
    path: '/demos/checker',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Checker')))
  },
  {
    path: '/demos/radio',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Radio')))
  },
  {
    path: '/demos/select',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Select')))
  },
  {
    path: '/demos/alert',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Alert')))
  },
  {
    path: '/demos/prompt',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Prompt')))
  },
  {
    path: '/demos/confirm',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Confirm')))
  },
  {
    path: '/demos/toast',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Toast')))
  },
  {
    path: '/demos/textarea',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Textarea')))
  },
  {
    path: '/demos/spinner',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Spinner')))
  },
  {
    path: '/demos/tab',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Tab')))
  },
  {
    path: '/demos/tabbar',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Tabbar')))
  },
  {
    path: '/demos/sidebar',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Sidebar')))
  },
  {
    path: '/demos/buttontab',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./ButtonTab')))
  },
  {
    path: '/demos/rater',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Rater')))
  },
  {
    path: '/demos/range',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Range')))
  },
  {
    path: '/demos/ripple',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Ripple')))
  },
  {
    path: '/demos/badge',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Badge')))
  },
  {
    path: '/demos/accordion',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Accordion')))
  },
  {
    path: '/demos/img',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Img')))
  },
  {
    path: '/demos/swiper',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Swiper')))
  },
  {
    path: '/demos/preview',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Preview')))
  },
  {
    path: '/demos/qrcode',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Qrcode')))
  },
  {
    path: '/demos/marquee',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Marquee')))
  },
  {
    path: '/demos/sticky',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Sticky')))
  },
  {
    path: '/demos/indexlist',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./IndexList')))
  },
  {
    path: '/demos/swipeout',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./Swipeout')))
  },
  {
    path: '/demos/listview',
    exact: true,
    component: ConnectComponent(AsyncComponent(() => import('./ListView')))
  }
]
