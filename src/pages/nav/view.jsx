import React from 'react';
import { Layout } from 'antd';
import Proptypes from 'prop-types';
import Slider from './jsx/menu'

const { Header, Footer, Sider, Content } = Layout;

class Frame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('this.props', this.props)
    const {
      children,
    } = this.props;
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{ lineHeight: '64px', color: '#fff', textAlign: 'center' }}>
            logo
          </div>
          <Slider />
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

Frame.propTypes = {
  children: Proptypes.shape({}),
};
export default Frame;
