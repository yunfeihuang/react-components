import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Arrow from '../arrow'
import { Flexbox, FlexboxItem } from '../flexbox'

export default class Button extends React.Component{
  static propTypes = {
    type: PropTypes.string,
    back: PropTypes.bool,
    title: PropTypes.string,
    backText: PropTypes.string,
    onBack: PropTypes.func
  }
  static defaultProps = {
    type: 'default',
    isBack: true,
    onBack: () => {
      window.history.back()
    }
  }
  render () {
    const { className, title, isBack, backText, onBack, pull, children, type, ...others } = this.props
    return (
      <div 
        {...others}
        className={classnames(['vx-nav', `vx-nav--${type}`, className])}>
          <Flexbox className="vx-nav--inner" align="center">
          {isBack && <button type="button" className={classnames(['btn-pull','vx-nav--back'])} onClick={onBack}>
              <Arrow direction="left" color={type === 'default' ? '#999' : '#fff'} size="0.24rem" />
              {backText && <span>{backText}</span>}
          </button>}
            <FlexboxItem className={classnames(['vx-nav--title', {'vx-nav--title-center': !isBack}])}>
              <div>{title}</div>
            </FlexboxItem>
            {pull}
          </Flexbox>
          {children}
      </div>
    )
  }
}
