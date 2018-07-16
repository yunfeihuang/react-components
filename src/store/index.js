import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer, { initialState } from './root/reducer';
import DevTools from '../devtools'

let rootReducer = reducer

const AsyncReducer = store => next => action => {
  let module = action.$$module
  if (module) {
    import(`@/store/${module}/reducer`).then(res => {
      injectReducer({key: module, reducer: res.default})
      next(action)
    }).catch(() => {
      return next(action)
    })
  } else {
    return next(action)
  }
}

let enhancer = applyMiddleware(AsyncReducer, thunk)
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    applyMiddleware(AsyncReducer, thunk, createLogger()),
    DevTools.instrument()
  )
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers
  })
}

let store = createStore(makeRootReducer(), initialState, enhancer);

store.asyncReducers = {}

export const injectReducer = ({ key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./root/reducer', () => {
      rootReducer = require('./root/reducer').default;
      store.replaceReducer(makeRootReducer(store.asyncReducers))
    })
  }
}


export default store