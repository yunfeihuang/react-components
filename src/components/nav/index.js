import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Arrow from '../arrow'
import { Flexbox, FlexboxItem } from '../flexbox'

export default class Button extends React.Component{
  static propTypes = {
    back: PropTypes.bool,
    title: PropTypes.string,
    onBack: PropTypes.func
  }
  static defaultProps = {
    isBack: true,
    onBack: () => {
      window.history.back()
    }
  }
  render () {
    const { className, title, isBack, onBack, pull, children, ...others } = this.props
    const cls = classnames(['vx-nav', className])
    return (
      <div 
        {...others}
        className={cls}>
          <Flexbox className="vx-nav-inner" align="center">
          {isBack && <button type="button" className={classnames(['btn-pull','vx-nav-back'])} onClick={onBack}>
              <Arrow direction="left" color="#fff" size="0.24rem" />
          </button>}
            <FlexboxItem className={classnames(['vx-nav-title', {'vx-nav-title-center': !isBack}])}>
              <div>{title}</div>
            </FlexboxItem>
            {pull}
          </Flexbox>
          {children}
      </div>
    )
  }
}
