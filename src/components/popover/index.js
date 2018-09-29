import React from 'react'
import ReactDOM from 'react-dom'
import Popup from '../popup'
import PropTypes from 'prop-types'
import classnames from 'classnames'

let Popover = function (props) {
  let {children, className, overlayOpacity, popoverClass, trigger, open,...others} = props
  let vnode = null
  let handleClose = () => {
    let node = ReactDOM.findDOMNode(vnode).parentNode
    node.parentNode && node.parentNode.removeChild(node)
  }
  let handleClick = (e) => {
    vnode = ReactDOM.render(
      <Popup
        open={true}
        className={classnames([popoverClass])}
        opacity={overlayOpacity}
        onClose={handleClose}
        inner={<div
          className={classnames(['vx-popover--content', popoverClass])}
          style={{visibility: 'hidden',position: 'absolute'}}
          onClick={handleClose}>
            {children}
          </div>}>
      </Popup>,
      document.createElement('div')
    )
    let target = e.currentTarget
    let node = ReactDOM.findDOMNode(vnode).querySelector('.vx-popover--content')
    let rect = target.getBoundingClientRect()
    let left = rect.left + 'px'
    let isRight = false
    let isBottom = false
    if (rect.left > window.innerWidth / 2) {
      isRight = true
      left = rect.right - node.offsetWidth + 'px'
    }
    let top = rect.top + rect.height + 'px'
    if (rect.top > window.innerHeight / 2) {
      isBottom = true
      top = rect.bottom - node.offsetHeight - rect.height - 24 + 'px'
    }
    requestAnimationFrame(() => {
      node.style.top = top
      node.style.left = left
      node.style.visibility = ''
      isRight && node.classList.add('vx-popover--content-right')
      isBottom && node.classList.add('vx-popover--content-bottom')
    })
  }
  return (
    <div className={classnames(["vx-popover", className])} {...others} onClick={handleClick}>
      {trigger}
    </div>
  )
}

Popover.propTypes = {
  open: PropTypes.bool,
  overlayOpacity: PropTypes.number,
  popoverClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Popover;
