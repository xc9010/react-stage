import React from 'react';
import {Menu} from 'antd';
import hashHistory from '../../../../web_modules/lib/history';

const {SubMenu} = Menu;

class Slider extends React.Component {
  static handleClick(e) {
    hashHistory.push(e.key)
  }

  constructor(props) {
    super(props)
    this.state = {
      menu: [
        {
          name: '展示',
          pid: 1,
          children: [
            {name: 'antd', path: '/antd'},
            {name: 'antd', path: '/antd/1'},
            {name: 'bigdata', path: '/bigdata'},
          ]
        },
        {
          name: '异步',
          pid: 2,
          children: [
            {name: 'redux', path: '/redux'},
            {name: 'redux-saga', path: '/saga'},
          ]
        },
        {
          name: 'empty',
          pid: 3,
          children: [
            {name: 'loading', path: '/loading'},
            {name: 'empty', path: '/empty'},
          ]
        }
      ]
    }
    Slider.handleClick = Slider.handleClick.bind(this)
  }

  render() {
    const {menu} = this.state

    return (
      <Menu
        onClick={Slider.handleClick}
        style={{width: '100%'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1', '2', '3']}
        mode="inline"
      >
        {
          menu.map(v => (
            <SubMenu key={v.pid} title={v.name}>
              {
                v.children.map(i => (
                  <Menu.Item key={i.path}>{i.name}</Menu.Item>
                ))
              }
            </SubMenu>
            )
          )
        }
      </Menu>
    );
  }
}

Slider.propTypes = {};
export default Slider;
