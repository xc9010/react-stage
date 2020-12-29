import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

class Redux1 extends React.PureComponent{
  render(){
    const { redux1, dispatch } = this.props;
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="触发redux" key="1">
            <Button
              type="primary"
              onClick={() => dispatch({type: 'ADD'})}
            >add
            </Button>
            <Button
              type="primary"
              onClick={() => dispatch({type: 'MIN'})}
            >min
            </Button>
            <Button
              type="primary"
              onClick={() => dispatch({type: 'RESET'})}
            >reset
            </Button>
            {redux1.total1}
          </TabPane>
          <TabPane tab="2" key="2">
            123
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
