import * as TYPES from './types';

const defaultState = {
  data: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.GET_DATA:
      console.log(333)
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default reducers;
