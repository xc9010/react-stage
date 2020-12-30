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
      </div>
    )
  }
}
Saga.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  saga: state.saga
});
export default connect(mapStateToProps)(Saga);
