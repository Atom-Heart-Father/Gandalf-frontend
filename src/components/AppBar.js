import './../styles/AppBar.css'

const AppBar = ({ toggle, width }) => {
  return (
    <nav id='appbar'>
      <div className='hamburger' onClick={toggle}>
        <div className='line1' />
        <div className='line2' />
        <div className='line3' />
      </div>
      <h2>Hello</h2>
    </nav>
  )
}

export default AppBar
