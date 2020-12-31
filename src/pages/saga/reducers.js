import * as TYPES from './types';

const defaultState = {
  data: '123',
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.GET_DATA:
      return {
        ...state,
        data: action.data
      };
    case TYPES.SET_DATA:
      console.log(action)
      return {
        ...state,
        data: action.data.data.list
      };
    default:
      return state;
  }
};

export default reducers;
