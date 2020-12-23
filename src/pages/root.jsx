import React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

const App = () => (
  <Router>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Product">Product</Link>
      <hr/>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/product" component={Product}/>
  </Router>
)

export default App;
