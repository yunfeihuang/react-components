import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class Img extends React.Component{
  static propTypes = {
    data: PropTypes.array,
    onClick: PropTypes.func
  }
  static defaultProps = {
    data: []
  }
  constructor (props) {
    super(props)
    let navList = this.props.data.map(item => {
      return item.label.charAt(0)
    })
    this.state = {
      navList,
      currentCharAt: navList[0]
    }
    this.handleScroll = this.handleScroll.bind(this)
  }
  render () {
    const { className, style, data } = this.props
    return (
      <div ref="$el" className={classnames(['vx-index-list', className])} style={style}>
        <div className="vx-index-list-each" onScroll={this.handleScroll}>
          {data.map((group,i) => {
            return (
              <div className="vx-index-list-group" key={i}>
                <div className="vx-index-list-title">{group.label}</div>
                {group.items.map((item,index) => {
                  return (
                    <div className="vx-index-list-item" key={index}  onClick={this.handleClick.bind(this, item.value)}>
                      {item.label}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="vx-index-list-nav">
          {this.state.navList.map((item, index) => {
            return (
              <div key={index} className={{'is-active': index === 0}} onClick={this.handleGroup.bind(this, index)}>{item}</div>
            )
          })}
        </div>
        <div className="vx-index-list-fixed">{this.state.currentCharAt || ' '}</div>
      </div>
    )
  }
  componentDidMount () {
    this.$el = this.refs.$el
    this.init()
    this.$handleResize = this.handleResize.bind(this)
    window.addEventListener('resize', this.$handleResizem, false)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.$handleResizem)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.data !== nextProps.data) {
      let navList = nextProps.data.map(item => {
        return item.label.charAt(0)
      })
      this.setState({
        navList,
        currentCharAt: navList[0]
      })
    }
  }
  init () {
    this.$$scrollNode = this.$el.querySelector('.vx-index-list-each')
    this.$$titleNodes = Array.from(this.$el.querySelectorAll('.vx-index-list-title'))
    this.$$titleNodes.forEach(node => {
      node._offsetTop = node.offsetTop
    })
    this.$$navNodes = Array.from(this.$el.querySelectorAll('.vx-index-list-nav div'))
    this.$$fixedNode = this.$el.querySelector('.vx-index-list-fixed')
    this.$$Y = this.$$fixedNode.offsetHeight
  }
  activeNavItem (index) {
    let _node = this.$$navNodes[index]
    this.$$navNodes.forEach(node => {
      if (_node === node) {
        requestAnimationFrame(() => {
          node.classList.add('is-active')
        })
      } else {
        requestAnimationFrame(() => {
          node.classList.remove('is-active')
        })
      }
    })
  }
  handleScroll (e) {
    let scrollTop = this.$$scrollNode.scrollTop
    this.$$titleNodes.forEach((node, index) => {
      let position = node._offsetTop - scrollTop
      if (position < this.$$Y && position > 0) {
        requestAnimationFrame(() => {
          this.$$fixedNode.style.top = `-${this.$$Y - position - 1}px`
        })
      } else if (position <= 0) {
        requestAnimationFrame(() => {
          this.$$fixedNode.style.top = ''
          this.$$fixedNode.innerHTML = node.innerHTML.charAt(0)
          this.activeNavItem(index)
        })
      }
    })
  }
  handleResize () {
    this.init()
    this.handleScroll()
  }
  handleGroup (index) {
    let node = this.$$titleNodes[index]
    node.offsetParent.scrollTop = node._offsetTop
  }
  handleClick (value) {
    this.props.onClick && this.props.onClick(value)
  }
}
