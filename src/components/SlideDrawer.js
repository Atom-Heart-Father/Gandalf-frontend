import './../styles/SlideDrawer.css'
import Logo from './../assets/gandalf.png'
import { HiDesktopComputer } from 'react-icons/hi'
import { FaRegListAlt, FaListAlt } from 'react-icons/fa'
import { FaBeer } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

const SlideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer'
  if (show)
    drawerClasses = 'side-drawer open'

  return (
    <div className={drawerClasses}>
      <div>
        <div className='logo-row'>
          <a href='/'>
            <img src={Logo} alt='Gandalf' />
            <h2>Gandalf</h2>
          </a>
        </div>
        <div className='nav-links'>
          <div className='link'>
            <a href='/'>
              <HiDesktopComputer />
              <h3>Dashboard</h3>
            </a>
          </div>
          <div className='link'>
            <a href='/'>
              <FaListAlt />
              <h3>WhiteList</h3>
            </a>
          </div>
          <div className='link'>
            <a href='/'>
              <FaRegListAlt />
              <h3>BlackList</h3>
            </a>
          </div>
        </div>
      </div>
      <div className='link' id='settings'>
        <a href='/'>
          <FiSettings />
          <h3>Settings</h3>
        </a>
      </div>
    </div>
  )
}

export default SlideDrawer
