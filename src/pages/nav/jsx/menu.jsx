import React from 'react';
import { Menu } from 'antd';
import hashHistory from 'lib/history';

const {SubMenu} = Menu;

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('e', e)
    hashHistory.push(e.key)
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{width: '100%'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1', 'sub2', 'sub4']}
        mode="inline"
      >
        <SubMenu key="sub1" title="Navigation One">
          <Menu.Item key="antd">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

Slider.propTypes = {};
export default Slider;
