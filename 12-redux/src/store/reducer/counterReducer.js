const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return (state = state + 1);
    }
    case "decrease": {
      return (state = state - 1);
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
