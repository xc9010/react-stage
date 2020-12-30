import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Tabs, Button } from 'antd';
import hashHistory from '../../../web_modules/lib/history';


const { TabPane } = Tabs;

const Tab1 = (props) => (
  <div>
    <Button
      type="primary"
      onClick={() => props.dispatch({type: 'ADD'})}
    >add
    </Button>
    <Button
      type="primary"
      onClick={() => props.dispatch({type: 'MIN'})}
    >min
    </Button>
    <Button
      type="primary"
      onClick={() => props.dispatch({type: 'RESET'})}
    >reset
    </Button>
    {props.redux1.total1}
  </div>
);

const Tab2 = (props) => (
  <div>
    <Button onClick={() => hashHistory.push('/saga')}>触发saga</Button>
  </div>
);

class Redux1 extends React.PureComponent{
  render(){
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="触发redux" key="1">
            <Tab1 {...this.props} />
          </TabPane>
          <TabPane tab="触发redux-saga" key="2">
            <Tab2 {...this.props} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

Redux1.propTypes = {
  dispatch: PropTypes.func.isRequired,
  redux1: PropTypes.shape({
    total1: PropTypes.number
  }),
};

const mapStateToProps = state => ({
  redux1: state.redux1
});
export default connect(mapStateToProps)(Redux1);
