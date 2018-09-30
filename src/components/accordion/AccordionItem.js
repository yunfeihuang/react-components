import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Arrow from '../arrow'

class AccordionItem extends React.Component {
  static propTypes = {
    open: PropTypes.bool
  }
  static defaultProps = {
    open: false
  }
  constructor (props) {
    super(props)
    this.state = {
      open: this.props.open
    }
  }
  render () {
    let {children, className, title, open, ...others} = this.props
    return (
      <div ref="$el" className={classnames(['vx-accordion--item', {'is-open': this.state.open}, className])} {...others}>
        <div className="vx-accordion--item-hd" onClick={this.handleClick.bind(this,!this.state.open)}>
          <div className="vx-accordion--item-title">
            {title}
          </div>
          <Arrow direction="down" />
        </div>
        <div className="vx-accordion--item-bd">
          <div className="vx-accordion--item-content">
          {children}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount () {
    if (this.props.open) {
      let node = this.refs.$el.querySelector('.vx-accordion--item-bd')
      node.style.height = 'auto'
      this.handleClick(true)
    }
    this.$handleResize = this.handleResize.bind(this)
    window.addEventListener('resize', this.$handleResize, false)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.open !== this.props.open) {
      this.handleClick(this.props.open)
    }
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.$handleResize)
  }
  handleResize () {
    let node = this.refs.$el.querySelector('.vx-accordion--item-bd')
    if (node.style.height) {
      node.style.height = 'auto'
      let height = node.offsetHeight
      requestAnimationFrame(() => {
        node.style.height = height + 'px'
      })
    }
  }
  handleClick (open) {
    let node = this.refs.$el.querySelector('.vx-accordion--item-bd')
    let height = ''
    if (open) {
      height = node.children[0].offsetHeight + 'px'
    }
    let self = this
    this.setState({
      open: open
    }, () => {
      let parentNode = self.refs.$el.parentNode
      if (parentNode && parentNode.children && parentNode.dataset.mutex === 'true') {
        Array.from(parentNode.children).forEach(item => {
          if (item.classList.contains('vx-accordion--item') && item !== self.refs.$el) {
            item.querySelector('.vx-accordion--item-bd').style.height  = ''
          }
        })
      }
      node.style.height = height
    })
  }
}

export default AccordionItem;
