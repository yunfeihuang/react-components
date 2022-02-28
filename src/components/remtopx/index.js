import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function RemToPx (props) {
  const [size, setSize] = useState({})
  function computedSize () {
    let fontSize = document.documentElement.style.fontSize
    let width = ''
    let height = ''
    if (fontSize) {
      fontSize = parseInt(fontSize, 10)
      if (props.width) {
        width = Math.round(fontSize * props.width)
        if (props.even && width % 2) {
          width++
        }
      }
      if (props.height) {
        height = Math.round(fontSize * props.height)
        if (props.even && height % 2) {
          height++
        }
      }
    }
    return {
      width: `${width}px`,
      height: `${height}px`
    }
  }
  function handleResize () {
    setSize(computedSize())
  }
  useEffect(() => {
    setSize(computedSize())
    window.addEventListener('resize', handleResize, false)
    return () => {
      window.removeEventListener('resize', handleResize, false)
    }
  }, [])
  const { style, width, height, even, component, children, ...others} = props
    let Component = component
    return (
      <Component style={this.state.style} {...others}>
        {children}
      </Component>
    )
}
RemToPx.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  even: PropTypes.bool,
  component: PropTypes.string
}
RemToPx.defaultProps = {
  component: 'div',
    even: false
}
export default RemToPx
