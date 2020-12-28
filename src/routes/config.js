import Antd from '../pages/antd'
import Empty from '../pages/empty'

export default [
  {
    path: '/',
    name: 'home',
    childRoutes: [
      { path: 'empty', component: Empty },
      { path: 'antd', component: Antd },
    ]
  }
]
