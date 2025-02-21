import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index.js'
import { ThemeProvider } from './contexts/theme.js'

function Layout() {
  const [theme, setTheme] = useState('dark');

  const lightTheme = () => {
    setTheme('light')
  }
  const darkTheme = () => {
    setTheme('dark')
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
  },[theme])

  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme}}>
      <div className='mx-2 h-full'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout