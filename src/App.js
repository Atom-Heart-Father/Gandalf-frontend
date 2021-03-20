import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SlideDrawer from './components/SlideDrawer.js'
import Backdrop from './components/Backdrop.js'
import AppBar from './components/AppBar.js'
import Dashboard from './pages/Dashboard.js'
import Whitelist from './pages/Whitelist.js'
import Blacklist from './pages/Blacklist.js'
import Settings from './pages/Settings.js'

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [backdrop, setBackdrop] = useState(null)
  const [width, setWidth] = useState(0)
  const [active, setActive] = useState('')
  const drawerToggleClickHandler = () => setDrawerOpen(!drawerOpen)
  const backdropClickHandler = () => setDrawerOpen(false)

  useEffect(() => {
    if (width > 1024) {
      setDrawerOpen(true)
      let sections = document.getElementsByTagName('section')
      document.getElementById('appbar').style.marginLeft = '15rem'
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

  useEffect(() => {
    const path = window.location.pathname
    if (path === '/') setActive('Dashboard')
    if (path === '/whitelist') setActive('Whitelist')
    if (path === '/blacklist') setActive('Blacklist')
    if (path === '/settings') setActive('Settings')
  }, [setActive])

  return (
    <Router>
      <SlideDrawer show={drawerOpen} active={active} />
      {backdrop}
      <AppBar toggle={drawerToggleClickHandler} active={active}/>
      <Switch>
        <Route exact path='/' >
          <Dashboard />
        </Route>
        <Route exact path="/whitelist">
          <Whitelist />
        </Route>
        <Route exact path="/blacklist">
          <Blacklist />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
