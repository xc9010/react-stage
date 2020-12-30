import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk';

import storeIndex from './reducers';
import rootSaga from './main-saga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  storeIndex,
  compose(
    applyMiddleware(sagaMiddleware, thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
);
sagaMiddleware.run(rootSaga);

export default store
