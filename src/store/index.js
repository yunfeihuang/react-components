import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers, { initialState } from './reducers';
import DevTools from '../devtools'

let enhancer = applyMiddleware(thunk)
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    applyMiddleware(thunk, createLogger()),
    DevTools.instrument()
  )
}

let store = createStore(reducers, initialState, enhancer);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }
}

export default store