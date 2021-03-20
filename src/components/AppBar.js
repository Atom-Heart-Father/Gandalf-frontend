import './../styles/AppBar.css'

const AppBar = ({ toggle, active }) => {
  return (
    <nav id='appbar'>
      <div className='hamburger' onClick={toggle}>
        <div className='line1' />
        <div className='line2' />
        <div className='line3' />
      </div>
    </nav>
  )
}

export default AppBar
