import { createStore } from 'redux';
import storeIndex from './reducers/index';

const store = createStore(
  storeIndex,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store
