import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.js'
import { ThemeProvider } from './contexts/theme.js'
import { About, Contact, Projects } from './Pages/index.js';
import Home from './Pages/Home/Home.jsx';
import { Toaster } from 'react-hot-toast';

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
      {/* {!isMobile && <div className='mx-2 h-full'> */}
      {<div className='mx-2 h-full'>
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
      <Toaster 
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: theme === 'dark' ? '#1f2937' : '#ffffff',
            color: theme === 'dark' ? '#f9fafb' : '#111827',
            border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            zIndex: 9999,
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </ThemeProvider>
  )
}

export default Layout