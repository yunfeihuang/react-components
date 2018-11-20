import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    underlineWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    layout: PropTypes.string,
    onChange: PropTypes.func
  }
  static defaultProps = {
    layout: 'default'
  }
  render () {
    let {children, className, active, underlineWidth, layout, ...others} = this.props
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          underlineWidth,
          active,
          layout,
          onClick: this.handleClick.bind(this, item.props.name)
        })
      }
      return item
    })
    let cls = classnames(['vx-tab', `vx-tab--type-${layout}`, className])
    return (
      <div className={cls} {...others} ref="$el" >
        <div className="vx-tab--scroller">
        	<div className={classnames([{'vx-flexbox': layout === 'default'} ,"vx-tab--inner"])}>
            {cloneChildren}
          </div>
          <div className="vx-tab--underline"></div>
        </div>
      </div>
    );
  }
  componentDidMount () {
    this.$el = this.refs.$el
    this.computedStyle()
    this.$ComputedStyle = this.computedStyle.bind(this)
    window.addEventListener('resize', this.$ComputedStyle, false)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.active !== this.props.active) {
      requestAnimationFrame(this.computedStyle.bind(this))
      
    }
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.$ComputedStyle)
  }
  handleClick (value) {
    this.props.onChange && this.props.onChange(value)
  }
  computedStyle () {
    let node = this.$el.querySelector('.vx-tab--underline')
    let activeNode = this.$el.querySelector('.is-active')
    if (activeNode) {
      let activeWidth = activeNode.offsetWidth
      let width = activeWidth
      let left = activeNode.offsetLeft
      if (this.props.underlineWidth === 'auto' || this.props.underlineWidth === 0) {
        width = activeNode.children[0].offsetWidth
        if (width > activeWidth) {
          width = activeWidth
        }
        left = activeNode.offsetLeft + (activeWidth - width) / 2
      } else if (this.props.underlineWidth) {
        width = this.props.underlineWidth
        left = activeNode.offsetLeft + (activeWidth - this.props.underlineWidth) / 2
      }
      requestAnimationFrame(() => {
        node.style.cssText = `width: ${width}px;left:${left}px;display:block`
      })
    }
    if (this.props.layout === 'scroll') {
      let target = activeNode
      let node = this.$el.querySelector('.vx-tab--scroller')
      requestAnimationFrame(() => {
        let width = target.offsetWidth
        let innerWidth = window.innerWidth
        let rect = target.getBoundingClientRect()
        let offsetLeft = target.nextElementSibling ? target.nextElementSibling.offsetLeft : 0
        if (rect.right + width > innerWidth && target.nextElementSibling) {
          requestAnimationFrame(() => {
            node.scrollLeft = offsetLeft + target.nextElementSibling.offsetWidth - innerWidth
          })
        }
      })
    }
  }
}

export default Tab;
