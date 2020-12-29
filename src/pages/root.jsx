import React from 'react';
import Proptypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import Nav from './nav/view'
import Antd from '../pages/antd'
import Empty from '../pages/empty'
import Loading from '../pages/loading'
import BigData from '../pages/bigData'
import Redux1 from '../pages/redux1'

const App = ({history}) => (
  <Router history={history}>
    <Nav>
      <Switch>
        <Route exact path="/" component={Empty} />
        <Route exact path="/antd" component={Antd} />
        <Route exact path="/antd/:id" component={Antd} />
        <Route exact path="/empty" component={Empty} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/bigdata" component={BigData} />
        <Route exact path="/redux1" component={Redux1} />
      </Switch>
    </Nav>
  </Router>
)

App.propTypes = {
  history: Proptypes.shape(),
};

export default App;
