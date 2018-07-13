let initialState = {
  counter: 0
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD': 
      state.counter++
      return {
        ...state
      }
    default:
      return state
  }
}

export default todo;
