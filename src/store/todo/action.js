export default { 
  add (data) {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: 'TODO_ADD',
          data
        })
      })
    }
    /*
    return {
      type: 'TODO_ADD',
      data
    }
    */
  }
}