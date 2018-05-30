import { combineReducers } from 'redux'
import todo from './todo'

export let initialState = {
  global: {id: 'fdsafds'}
}

let reducers = combineReducers({
  todo,
  global (state = {}, action) {
    return state
  }
})

export default reducers