import * as TYPES from './types';

const defaultState = {
  data: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.GET_DATA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default reducers;
