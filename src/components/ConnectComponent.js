import { connect } from 'react-redux';
import rootAction from '@/store/root/action';

export default function connectComponent(component, mapStateToProps, mapDispatchToProps) {
  const _mapStateToProps = mapStateToProps ? mapStateToProps : (state, ownProps) => {
    return {
      state,
      ownProps
    }
  }

  const _mapDispatchToProps = mapDispatchToProps ? mapDispatchToProps : (dispatch) => {
    return {
      dispatch (action, data) {
        let lastIndex = action.lastIndexOf('/')
        let name = lastIndex ? action.substring(lastIndex + 1) : action
        let path = lastIndex ? action.substring(0, lastIndex) : ''
        if (path) {
          data.$$module = path
          import(`../store/${path}/action`).then(res => {
            if (res.default && res.default[name]) {
              dispatch(res.default[name](data))
            }
          }).catch(() => {
            console.log(`not find store module "${name}"`)
          })
        } else {
          if (rootAction[action]) {
            dispatch(rootAction[action](data))
          } else {
            console.log(`not find store module "${action}"`)
          }
        }
      }
    }
  }
  return connect(_mapStateToProps, _mapDispatchToProps)(component)
}