import React from 'react';
import classnames from 'classnames';

let Accordion = (props) => {
  let {children, className, ...others} = props
  return (
    <div className={classnames(["vx-accordion", className])} {...others}>
      {children}
    </div>
  );
}

export default Accordion;
