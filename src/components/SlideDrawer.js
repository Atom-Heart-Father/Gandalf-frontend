import './../styles/SlideDrawer.css'

const SlideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer'
  if (show)
    drawerClasses = 'side-drawer open'

  return (
    <div className={drawerClasses}>
      <h1>Hello, I am slider</h1>
    </div>
  )
}

export default SlideDrawer
