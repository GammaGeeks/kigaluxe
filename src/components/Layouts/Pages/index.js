import { Outlet } from 'react-router-dom'
import './index.scss'

const Layout = () => {
  return (
    <div className='content'>
      <Outlet />
    </div>
  )
}

export default Layout