import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Antd from './antd/index';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

const App = () => (
  <Router>
      <Link style={{ margin: '10px' }} to="/">Home</Link>
      <Link style={{ margin: '10px' }} to="/Antd">Antd</Link>
      <Link style={{ margin: '10px' }} to="/Product">Product</Link>
      <hr/>
      <Route path="/" exact component={Home}/>
      <Route path="/Antd" component={Antd}/>
      <Route path="/product" component={Product}/>
  </Router>
)

export default App;
