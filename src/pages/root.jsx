import React from 'react';
import Proptypes from 'prop-types';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import 'antd/dist/antd.css';
import Nav from './nav/view'


const NavWrapper = props => (
  <Nav {...props}>
    <Switch>
      <Route exact path="/" />
    </Switch>
  </Nav>
);


const App = ({history}) => {
  console.log(history)
  return (
    <Router history={history}>
      <main style={{ minWidth: 0, flex: 1, display: 'block',height:'100%' }}>
        <Switch>
          <Route path="/" component={NavWrapper} />
        </Switch>
      </main>
    </Router>
  )
}

App.propTypes = {
  history: Proptypes.shape(),
};

export default App;
