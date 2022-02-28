import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Arrow from '../arrow'
import Transition from 'react-transition-group/Transition'

/*
function AccordionItem (props) {
  const [open, setOpen] = useState(props.open)
}
AccordionItem.propTypes = {
  open: PropTypes.bool
}
AccordionItem.defaultProps = {
  open: false
}
*/

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
    this.handleOpen = this.handleOpen.bind(this)
  }
  render () {
    let {children, className, title, open, value, toClose, toOpen, ...others} = this.props
    const transitionClass = {
      entering: 'accordion-slide-enter',
      entered: 'accordion-slide-enter-active',
      exiting: 'accordion-slide-leave-active',
      exited: 'accordion-slide-leave'
    }
    return (
      <div ref="$el" className={classnames(['vx-accordion--item', {'is-open': value.indexOf(this.name)>-1}, className])} {...others}>
        <div className="vx-accordion--item-hd" onClick={this.handleOpen}>
          <div className="vx-accordion--item-title">{title}</div>
          <Arrow direction="down" />
        </div>
        <Transition timeout={300} in={value.indexOf(this.name)>-1} onEntering={this.handleEnter}>
          {state => {
            return (
              <div style={{display: state==='exited'?'none':''}} className={classnames(["vx-accordion--item-bd", transitionClass[state]])}>
                <div className="vx-accordion--item-content">{children}</div>
              </div>
            )
          }}
        </Transition>
      </div>
    );
  }
  componentWillMount () {
    this.name = Math.random().toString(36).substr(2)
    this.props.open && this.props.toOpen(this.name)
  }
  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.$handleResize, false)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.$handleResize)
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.open !== nextProps.open) {
      if (nextProps.open) {
        this.props.toOpen(this.name)
      } else {
        this.props.toClose(this.name)
      }
    }
  }
  handleResize () {
    if (this.props.value.indexOf(this.name) > -1) {
      let node = this.refs.$el.querySelector('.vx-accordion--item-bd')
      this.handleEnter(node)
    }
  }
  handleEnter (node) {
    requestAnimationFrame(() => {
      node.style.height = node.children[0].offsetHeight + 'px'
    })
  }
  handleOpen () {
    this.props.toOpen(this.name)
  }
}

export default AccordionItem;
