var initialState = {
  noOfChocolates: 500,
};

export var chocolateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_CHOCOLATE':
      return {
        noOfChocolates: state.noOfChocolates - 1,
      };
      break;
    default:
      return state;
  }
};
