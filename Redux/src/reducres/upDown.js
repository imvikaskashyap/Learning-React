const initialState = 10;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payloadInc;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
