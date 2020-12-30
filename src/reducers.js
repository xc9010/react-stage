import { combineReducers } from "redux";
import reducers from './pages/redux1/reducers';
import sagas from './pages/saga/reducers';

const store = combineReducers({
  redux1: reducers,
  saga: sagas
});

export default store
