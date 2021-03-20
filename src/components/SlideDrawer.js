import './../styles/SlideDrawer.css'
import Logo from './../assets/gandalf.png'
import { RiComputerLine } from 'react-icons/ri'
import { FaRegListAlt, FaListAlt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { Link } from "react-router-dom";

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
              <RiComputerLine />
              <h3>Dashboard</h3>
            </a>
          </div>
          <div className='link'>
            <a href='/whitelist'>
              <FaListAlt />
              <h3>WhiteList</h3>
            </a>
          </div>
          <div className='link'>
            <a href='/blacklist'>
              <FaRegListAlt />
              <h3>BlackList</h3>
            </a>
          </div>
        </div>
      </div>
      <div className='link' id='settings'>
        <a href='/settings'>
          <FiSettings />
          <h3>Settings</h3>
        </a>
      </div>
    </div>
  )
}

export default SlideDrawer
