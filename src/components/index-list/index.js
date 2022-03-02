import React, {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function IndexList (props) {
  const random = Math.random().toString(36).substr(2)
  const el = useRef(null)
  const [navList, setNavList] = useState(props.data.map(item => {
    return item.label.charAt(0)
  }))
  const [currentCharAt, setCurrentCharAt] = useState(navList[0] || null)
  let scrollTimer = null
  const handleScroll = () => {
    scrollTimer && clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      const top = el.current.getBoundingClientRect().top
      const nodes = el.current.querySelectorAll('.vx-index-list--title')
      if (nodes.length) {
        for(let i = 0; i < nodes.length; i++) {
          if (nodes[i].getBoundingClientRect().top === top) {
            setCurrentCharAt(nodes[i].innerText)
          }
        }
      }
    }, 200)
  }
  function handleGroup (value) {
    const node = document.getElementById(random + '-' + value)
    node && node.scrollIntoView({behavior: 'smooth'})
    setCurrentCharAt(value)
  }
  function handleClick (value) {
    props.onClick && props.onClick(value)
  }
  useEffect(() => {
    window.addEventListener('resize', handleScroll, false)
    return () => {
      window.removeEventListener('resize', handleScroll, false)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setNavList(props.data.map(item => {
      return item.label.charAt(0)
    }))
    setCurrentCharAt(navList[0])
  }, [props.data])
  const { className, style, data } = props
  
  return (
    <div className={classnames(['vx-index-list', className])} style={style}>
      <div className="vx-index-list--each" ref={el} onScroll={handleScroll}>
        {data.map((group,i) => {
          return (
            <div className="vx-index-list--group" key={i} id={random + '-' + group.label}>
              <div className="vx-index-list--title" style={{position: 'sticky', top: '0', zIndex: '1'}}  key={group.label} >{group.label}</div>
              {group.items.map((item,index) => {
                return (<div className="vx-index-list--item" key={index}  onClick={handleClick.bind(null, item.value)}>{item.label}</div>)
              })}
            </div>
          )
        })}
      </div>
      <div className="vx-index-list--nav" style={{zIndex: '2'}}>
        {navList.map((item, index) => {
          return (<div key={index} className={classnames({'is-active': item === currentCharAt})} onClick={handleGroup.bind(null, item)}>{item}</div>)
        })}
      </div>
    </div>
  )
}
IndexList.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func
}
IndexList.defaultProps = {
  data: []
}
export default IndexList
