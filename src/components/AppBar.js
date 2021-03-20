import './../styles/AppBar.css'

const AppBar = ({ toggle, active, width }) => {
  let current = ''
  if (width < 1024) current = active
  return (
    <nav id='appbar'>
      <div className='hamburger' onClick={toggle}>
        <div className='line1' />
        <div className='line2' />
        <div className='line3' />
      </div>
      <h2>{current}</h2>
    </nav>
  )
}

export default AppBar
