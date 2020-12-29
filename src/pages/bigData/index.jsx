import React from 'react';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

class BigData extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      list: [],
      listSlice: []
    };
    this.handerClick = this.handerClick.bind(this);
    this.handerSlice = this.handerSlice.bind(this);
    this.sliceTime = this.sliceTime.bind(this);
  }

  // 基本渲染方法
  handerClick () {
    // const starTime = new Date().getTime()
    this.setState({
      list: new Array(40000).fill(0)
    },()=>{
      // const end =  new Date().getTime()
      // console.log( (end - starTime ) / 1000 + '秒')
    })
  }


  // 触发分片
  handerSlice() {
    this.sliceTime(new Array(40000).fill(0), 0)
  }
  // 分片渲染方法
  sliceTime(list, times) {
    if (times === 40) return
    console.log(times)
    setTimeout(() => {
      const newlist = list.slice(times, (times + 1) * 100)
      this.setState({
        listSlice: this.state.listSlice.concat(newlist)
      })
      this.sliceTime(list, times + 1)
    }, 0)
  }

  render(){
    const { list, listSlice } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="基本渲染" key="1">
            <Button type="primary" onClick={this.handerClick} >点击- 基本渲染</Button>
            {
              list.map((item,index) => (<li className="list"  key={index.toString()} >{`${item} ${index}`} Item</li>))
            }
          </TabPane>
          <TabPane tab="分片渲染" key="2">
            <Button type="primary" onClick={this.handerSlice} >点击- 分片渲染</Button>
            {
              listSlice.map((item,index) => (<li className="list"  key={index.toString()} >{`${item} ${index}`} Item</li>))
            }
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default BigData;
