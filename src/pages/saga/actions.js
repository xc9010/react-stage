

import * as TYPES from './types';


export const getData = (data) => ({
  type: TYPES.GET_DATA,
  data,
});

export const setData = (data) => ({
  type: TYPES.SET_DATA,
  data
});
