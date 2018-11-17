import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

const Overlay = props => {
  const { className, open, ...others } = props
  const transitionState =  {
    entering: 'popup-fade-enter',
    entered: 'popup-fade-enter-active',
    exiting: 'popup-fade-leave-active',
    exited: 'popup-fade-leave popup-fade-enter'
  }
  return (
    <Transition in={open} timeout={300}>
      {state => {
        return <div {...others} className={classnames(['vx-overlay', transitionState[state], className])}></div>
      }}
    </Transition>
  )
}

Overlay.propTypes = {
  open: PropTypes.bool
}

export default Overlay
