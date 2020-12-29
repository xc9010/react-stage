import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import hashHistory from '../web_modules/lib/history';
import store from './createStore';


import Routes from './pages/root';

const root = (
  <Provider store={store}>
    <Routes history={hashHistory} innerStore={store} />
  </Provider>
)

reactDom.render(
  root,
  document.getElementById('root')
);
