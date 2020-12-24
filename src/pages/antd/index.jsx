import { Button } from 'antd';
import styles from '../../index.css'

const Antd = (props) => {
  console.log('props', props)
  return (
    <div className={styles.main}>
      <h2>button</h2>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default Antd;
