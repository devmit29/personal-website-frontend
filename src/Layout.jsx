import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.js'
import { ThemeProvider } from './contexts/theme.js'
import { About, Contact, Projects } from './Pages/index.js';
import Home from './Pages/Home/Home.jsx';

function Layout() {
  const [theme, setTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(false);

  const lightTheme = () => {
    setTheme('light')
  }
  const darkTheme = () => {
    setTheme('dark')
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
  };
  handleResize(); // Check initial screen size
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
  },[])
  
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      {!isMobile && <div className='mx-2 h-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>}
      {/* {isMobile && <div className='mx-2 h-full'>
        <Header />
        <Home/>
        <Projects />
        <About />
        <Contact/>
        <Footer />
      </div>} */}
    </ThemeProvider>
  )
}

export default Layout