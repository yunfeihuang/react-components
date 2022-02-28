import React, {useState} from 'react'
import classnames from 'classnames'
import Input from '../input'

function Password (props) {
  const [type, setType] = useState(props.type || 'password')
  const handleSwitch = () => {
    setType(type === 'password' ? 'text' : 'password')
  }
  let {children, className, style, icons, ...others} = props
  return (
    <div className={classnames(['vx-password', className])} style={style}>
      <Input {...others} type={type} append={
        <button
          className="vx-password--switch"
          type="button"
          onClick={handleSwitch}>
          <i style={{display: type === 'password' ? '' : 'none'}} dangerouslySetInnerHTML={{__html: icons[0]}}></i>
          <i style={{display: type === 'password' ? 'none' : ''}} dangerouslySetInnerHTML={{__html: icons[1]}}></i>
        </button>
      }/>
    </div>
  )
}
Password.defaultProps = {
  autoComplete: 'new-password',
  icons: [
    '<span class="vx-password--pwd-icon"></span>',
    '<span class="vx-password--text-icon">abc</span>'
  ]
}
export default Password
