import React from 'react';
import classnames from 'classnames';

const Accordion = props => {
  let {children, className, mutex, ...others} = props
  return (
    <div className={classnames(["vx-accordion", className])} data-mutex={mutex} {...others}>
      {children}
    </div>
  );
}

export default Accordion;
