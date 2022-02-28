import ReactDOM from 'react-dom'
import React, {useState, useEffect} from 'react'
import Arrow from './arrow'
import Button from './button'
import Nav from './nav'
import {Actionsheet, ActionsheetItem} from './actionsheet'
import {Accordion, AccordionItem} from './accordion'
import {Flexbox, FlexboxItem} from './flexbox'
import {Swiper, SwiperItem} from './swiper'
import {Marquee, MarqueeItem} from './marquee'
import Popup from './popup'
import Popover from './popover'
import Switch from './switch'
import Layout from './layout'
import Body from './body'
import Cell from './cell'
import Group from './group'
import Divider from './divider'
import Message from './message'
import Input from './input'
import InputNumber from './input-number'
import {Checkbox, CheckboxGroup} from './checkbox'
import {Checker, CheckerGroup} from './checker'
import {Radio, RadioGroup} from './radio'
import {Select, Option} from './select'
import Confirm from './confirm'
import Alert from './alert'
import Prompt from './prompt'
import Toast from './toast'
import Password from './password'
import Textarea from './textarea'
import Spinner from './spinner'
import {Tab, TabItem} from './tab'
import {Tabbar, TabbarItem} from './tabbar'
import {Sidebar, SidebarItem} from './sidebar'
import {ButtonTab, ButtonTabItem} from './button-tab'
import Rater from './rater'
import Range from './range'
import Ripple from './ripple'
import Badge from './badge'
import Img from './img'
import Preview from './preview'
import Qrcode from './qrcode'
import Sticky from './sticky'
import Swipeout from './swipeout'
import IndexList from './index-list'
import ListView from './list-view'
import Picker from './picker'
import PopupPicker from './popup-picker'

Alert.open = props => {
  let {onConfirm, onClose, message, ...others} = props
  let node = document.createElement('div')
  document.body.appendChild(node)
  let handleClose = () => {
    ReactDOM.unmountComponentAtNode(node)
    node.parentNode && document.body.removeChild(node)
    onClose && onClose()
  }
  function Wrapper () {
    let [open, setOpen] = useState(false)
    const handleConfirm = () => {
      setOpen(false)
      onConfirm && onConfirm()
    }
    useEffect(() => {
      setOpen(true)
    }, [])
    return <Alert {...others} open={open} onConfirm={handleConfirm} onClose={handleClose}>{message}</Alert>
  }
  ReactDOM.render(
    <Wrapper/>,
    node
  )
}

Confirm.open = props => {
  let {onConfirm, onClose, message, ...others} = props
  let node = document.createElement('div')
  document.body.appendChild(node)
  let handleClose = () => {
    ReactDOM.unmountComponentAtNode(node)
    node.parentNode && document.body.removeChild(node)
    onClose && onClose()
  }
  function Wrapper () {
    let [open, setOpen] = useState(false)
    const handleConfirm = () => {
      setOpen(false)
      onConfirm && onConfirm()
    }
    useEffect(() => {
      setOpen(true)
    }, [])
    return <Confirm {...others} open={open} onConfirm={handleConfirm} onClose={handleClose}>{message}</Confirm>
  }
  ReactDOM.render(
    <Wrapper/>,
    node
  )
}

Prompt.open = props => {
  let {onConfirm, onClose, ...others} = props
  let node = document.createElement('div')
  document.body.appendChild(node)
  let handleClose = () => {
    ReactDOM.unmountComponentAtNode(node)
    node.parentNode && document.body.removeChild(node)
    onClose && onClose()
  }
  function Wrapper () {
    let [open, setOpen] = useState(false)
    const handleConfirm = (value) => {
      setOpen(false)
      onConfirm && onConfirm(value)
    }
    useEffect(() => {
      setOpen(true)
    }, [])
    return <Prompt {...others} open={open} onConfirm={handleConfirm} onClose={handleClose}></Prompt>
  }
  ReactDOM.render(
    <Wrapper/>,
    node
  )
}
let $setOpen = null
Toast.open = props => {
  let {onClose, message, ...others} = props
  let node = document.createElement('div')
  document.body.appendChild(node)
  let handleClose = () => {
    ReactDOM.unmountComponentAtNode(node)
    node.parentNode && document.body.removeChild(node)
    onClose && onClose()
  }
  function Wrapper () {
    let [open, setOpen] = useState(false)
    $setOpen = setOpen
    const _handleClose = () => {
      setOpen(false)
    } 
    useEffect(() => {
      setOpen(true)
    }, [])
    return <Toast {...others} open={open} onClose={_handleClose} onAfterClose={handleClose}>{message}</Toast>
  }
  ReactDOM.render(
    <Wrapper/>,
    node
  )
}

Toast.close = () => {
  $setOpen && $setOpen(false)
}

Actionsheet.open = props => {
  let {onAction, onClose, options, ...others} = props
  let node = document.createElement('div')
  document.body.appendChild(node)
  let handleClose = () => {
    ReactDOM.unmountComponentAtNode(node)
    node.parentNode && document.body.removeChild(node)
    onClose && onClose()
  }
  function Wrapper () {
    let [open, setOpen] = useState(false)
    $setOpen = setOpen
    const _handleClose = () => {
      setOpen(false)
    }
    const handleAction = (value) => {
      setOpen(false)
      onAction && onAction(value)
    }
    useEffect(() => {
      setOpen(true)
    }, [])
    return (
      <Actionsheet {...others} open={open} onAction={handleAction} onClose={_handleClose} onAfterClose={handleClose}>
        {options.map(item => {
          let {label, ...others} = item
          return <ActionsheetItem {...others} key={item.value}>{label}</ActionsheetItem>
        })}
      </Actionsheet>
    )
  }
  ReactDOM.render(
    <Wrapper/>,
    node
  )
}

export {
  Arrow,
  Button,
  Nav,
  Actionsheet,
  ActionsheetItem,
  Accordion,
  AccordionItem,
  Flexbox,
  FlexboxItem,
  Swiper,
  SwiperItem,
  Marquee,
  MarqueeItem,
  Popup,
  Popover,
  Switch,
  Layout,
  Body,
  Cell,
  Group,
  Divider,
  Message,
  Input,
  InputNumber,
  Checkbox,
  CheckboxGroup,
  Checker,
  CheckerGroup,
  Radio,
  RadioGroup,
  Select,
  Option,
  Confirm,
  Alert,
  Prompt,
  Toast,
  Password,
  Textarea,
  Spinner,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  ButtonTab,
  ButtonTabItem,
  Rater,
  Range,
  Ripple,
  Badge,
  Img,
  Preview,
  Qrcode,
  Sticky,
  Swipeout,
  IndexList,
  ListView,
  Picker,
  PopupPicker
}