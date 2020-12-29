
const defaultState = {
  init: false,
  total1: 10
}

const redux1 = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        total1: state.total1 + 1
      };
    case 'MIN':
      return {
        ...state,
        total1: state.total1 - 1
      };
    case 'RESET':
      return {
        ...state,
        total1: defaultState.total1
      };
    default:
      return state;
  }
};

export default redux1;
