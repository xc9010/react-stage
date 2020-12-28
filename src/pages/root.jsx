import React from 'react';
import Proptypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
// import 'antd/dist/antd.css';
import Nav from './nav/view'
import Antd from '../pages/antd'
import Empty from '../pages/empty'

const App = ({history}) => {
  console.log(history)
  return (
    <Router history={history}>
      <Nav>
        <Switch>
          <Route exact path="/" component={Empty} />
          <Route exact path="/antd" component={Antd} />
          <Route exact path="/empty" component={Empty} />
        </Switch>
      </Nav>
    </Router>
  )
}

App.propTypes = {
  history: Proptypes.shape(),
};

export default App;
