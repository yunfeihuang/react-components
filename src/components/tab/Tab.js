import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Tab extends React.Component {
  static propTypes = {
    active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    underlineWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func
  }
  render () {
    let {children, className, active, underlineWidth, ...others} = this.props
    let cloneChildren = React.Children.map(children, item => {
      if (item) {
        return React.cloneElement(item, {
          underlineWidth,
          active,
          onClick: this.handleClick.bind(this, item.props.name)
        })
      }
      return item
    })
    let cls = classnames(["vx-flexbox", 'vx-tab', className])
    return (
      <div className={cls} {...others} ref="$el" >
        {cloneChildren}
        <div className="vx-tab-underline"></div>
      </div>
    );
  }
  componentDidMount () {
    this.$el = this.refs.$el
    this.computedStyle()
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.active !== this.props.active) {
      requestAnimationFrame(this.computedStyle.bind(this))
    }
  }
  handleClick (value) {
    this.props.onChange && this.props.onChange(value)
  }
  computedStyle () {
    let node = this.$el.querySelector('.vx-tab-underline')
    let activeNode = this.$el.querySelector('.is-active')
    if (activeNode) {
      let activeWidth = activeNode.offsetWidth
      let width = activeWidth
      let left = activeNode.offsetLeft
      if (this.props.underlineWidth === 'auto' || this.props.underlineWidth === 0) {
        width = activeNode.children[0].offsetWidth
        left = activeNode.offsetLeft + (activeWidth - width) / 2
      } else if (this.props.underlineWidth) {
        width = this.props.underlineWidth
        left = activeNode.offsetLeft + (activeWidth - this.props.underlineWidth) / 2
      }
      requestAnimationFrame(() => {
        node.style.cssText = `width: ${width}px;left:${left}px;display:block`
      })
    }
  }
}

export default Tab;
