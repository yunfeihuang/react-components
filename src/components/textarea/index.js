import React, {useState, useEffect, useRef} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function Textarea (props) {
  const [focus, setFocus] = useState(false)
  const textarea = useRef(null)
  const inner = useRef(null)
  const shadow = useRef(null)

  function renderAutoHeight (value) {
    requestAnimationFrame(() => {
      shadow.current.innerHTML = value.replace(/(\r|\n)$/, '<br/><span style="color:transparent">s</span>').replace(/(\r|\n)/g, '<br/>')
      inner.current.style.height = shadow.current.offsetHeight + 'px'
    })
  }
  
  function handleChange (e) {
    props.onChange && props.onChange (e.target.value)
  }
  function handleInput (e) {
    renderAutoHeight(e.target.value)
    props.onInput && props.onInput (e.target.value)
  }
  function handleFocus () {
    setFocus(true)
  }
  function handleBlur () {
    setFocus(false)
  }
  useEffect(() => {
    function handleResize () {
      renderAutoHeight(textarea.current.value)
    }
    renderAutoHeight(textarea.current.value)
    window.addEventListener('resize', handleResize, false)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  let {children, className, style, enterNumber, ...others} = props
  return (
    <label
      style={style}
      className={classnames(['vx-textarea--wrapper',{'is-focus': focus,'vx-textarea--enter-number': enterNumber}, className])}
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <div className="vx-textarea--inner" ref={inner}>
        <div className="vx-textarea--shadow" ref={shadow}></div>
        <textarea ref={textarea} {...others} onChange={handleChange} onInput= {handleInput}/>
        {enterNumber && others.maxLength && <em>
          {others.value.length}/{others.maxLength}
        </em>}
      </div>
    </label>
  )
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  enterNumber: PropTypes.bool,
}
Textarea.defaultProps = {
  enterNumber: false
}
export default Textarea
