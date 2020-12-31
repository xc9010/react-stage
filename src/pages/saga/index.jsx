import React from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { Button } from 'antd'
import { getData } from "./actions";

class Saga extends React.PureComponent{
  render() {
    return (
      <div>
        <Button onClick={() => this.props.dispatch(getData())}>触发saga</Button>
        <div>
          {this.props.saga.data}
        </div>
      </div>
    )
  }
}
Saga.propTypes = {
  dispatch: PropTypes.func.isRequired,
  saga: PropTypes.shape({
    data: PropTypes.string
  }),
};

const mapStateToProps = state => ({
  saga: state.saga
});
export default connect(mapStateToProps)(Saga);
