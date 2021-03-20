import './../styles/SlideDrawer.css'
import Logo from './../assets/gandalf.png'
import { RiComputerLine } from 'react-icons/ri'
import { FaRegListAlt, FaListAlt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'

const SlideDrawer = ({ show, active }) => {
  let drawerClasses = 'side-drawer'
  if (show)
    drawerClasses = 'side-drawer open'

  return (
    <div className={drawerClasses}>
      <div className='slide-column'>
        <div className='logo-row'>
          <a href='/'>
            <img src={Logo} alt='Gandalf' />
            <h2>Gandalf</h2>
          </a>
        </div>
        <div className='nav-links'>
          <div className={`link ${active === 'Dashboard' ? 'active' : ''}`}>
            <a href='/'>
              <RiComputerLine />
              <h3>Dashboard</h3>
            </a>
          </div>
          <div className={`link ${active === 'Whitelist' ? 'active' : ''}`}>
            <a href='/whitelist'>
              <FaListAlt />
              <h3>WhiteList</h3>
            </a>
          </div>
          <div className={`link ${active === 'Blacklist' ? 'active' : ''}`}>
            <a href='/blacklist'>
              <FaRegListAlt />
              <h3>BlackList</h3>
            </a>
          </div>
          <div className={`link ${active === 'Settings' ? 'active' : ''}`}>
            <a href='/settings'>
              <FiSettings />
              <h3>Settings</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideDrawer
