import { useState, useEffect } from 'react'
import Dashboard from './pages/Dashboard.js'
import SlideDrawer from './components/SlideDrawer.js'
import Backdrop from './components/Backdrop.js'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [backdrop, setBackdrop] = useState(null)
  const [width, setWidth] = useState(0)
  const drawerToggleClickHandler = () => setDrawerOpen(!drawerOpen)
  const backdropClickHandler = () => setDrawerOpen(false)

  useEffect(() => {
    if (width > 1024) {
      setDrawerOpen(true)
      let sections = document.getElementsByTagName('section')
      Array.from(sections).forEach((section) => {
        section.style.marginLeft = '15rem'
      })
    }
    if (drawerOpen && width < 1024)
      setBackdrop(<Backdrop close={backdropClickHandler} />)
    else setBackdrop(null)
  }, [drawerOpen, width])

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    onResize()
  }, [width])

  return (
    <>
      <SlideDrawer show={drawerOpen} />
      {backdrop}
      <Dashboard toggle={drawerToggleClickHandler} />
    </>
  );
}

export default App
