const defaultState = {
  currentTheme: 'light'
}


function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        currentTheme: action.payload
      }
    default: return state;
  }
}
export default reducer;