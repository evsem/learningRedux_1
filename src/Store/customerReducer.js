let defaultState = {
  customers: [],
}

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return { ...state, counter: state.counter - action.payload }
    case 'GET_USERS':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state
  }
}
