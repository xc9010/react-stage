import React from 'react';
import reactDom from 'react-dom';
import hashHistory from '../web_modules/lib/history';


import Routes from './pages/root';

reactDom.render(
  <Routes history={hashHistory} />,
  document.getElementById('root')
);
