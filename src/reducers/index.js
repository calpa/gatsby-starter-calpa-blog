const initialState = { count: 0 };

// Root reducer
const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  return state;
};

export default reducer;
