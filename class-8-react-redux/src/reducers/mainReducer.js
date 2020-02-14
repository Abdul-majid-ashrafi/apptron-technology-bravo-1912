const MainReducer = (
  state = {
    result: 3,
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        result: state.result + action.value,               //   this is muteable
        lastValues: [...state.lastValues, action.value]
      }
      break;
    case "REMOVE":
      state = {
        result: state.result - action.value,               //   this is muteable
        lastValues: [...state.lastValues, action.value]
      }
      break;
  }
  return state
}

export default MainReducer