import React from 'react'
import {connect} from "react-redux";
import { Button } from 'antd'
import { getData } from "./actions";

class Saga extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Button onClick={() => this.props.dispatch(getData())}>触发saga</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  saga: state.saga
});
export default connect(mapStateToProps)(Saga);
