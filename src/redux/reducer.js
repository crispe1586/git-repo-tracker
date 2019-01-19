function reducer(state, action) {
  if(state === undefined) {
    return {
      username: '',
      repos: []
    }
  }

  switch (action.type) {
    case 'UPDATE_USERNAME': {
      return {
        ...state,
        username: action.payload
      }
    }
    case 'FETCH_REPOS': {
      return {
        ...state,
        repos: action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer;
