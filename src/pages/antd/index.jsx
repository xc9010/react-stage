import { Button } from 'antd';

const Antd = (props) => {
  console.log('props', props)
  return (
    <div>
      <h2>button</h2>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default Antd;
