import './../styles/SlideDrawer.css'
import Logo from './../assets/gandalf.png'

const SlideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer'
  if (show)
    drawerClasses = 'side-drawer open'

  return (
    <div className={drawerClasses}>
      <div className='logo-row'>
        <img src={Logo} alt='Gandalf' />
        <h2>Gandalf</h2>
      </div>
    </div>
  )
}

export default SlideDrawer
