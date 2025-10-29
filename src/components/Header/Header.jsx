import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useTheme from '../../contexts/theme';

function Header() {
  const {theme, lightTheme, darkTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if(theme === 'dark') {
      setIsDarkMode(true);
    }
    else {
      setIsDarkMode(false);
    }
  },[theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
<header className={`sticky top-0 z-50 max-w-[1440px] w-full mx-auto mt-4 pb-1 backdrop-blur-md rounded-3xl transition-all duration-300 ${
  scrolled 
    ? 'shadow-2xl bg-[#F7F7FF]/95 dark:bg-[#2d2d2d]/95' 
    : 'shadow-lg bg-[#F7F7FF] dark:bg-[#2d2d2d]'
}`}>
  <nav className="border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-2.5 rounded-full">
    <div className="flex flex-nowrap justify-between items-center mx-auto overflow-hidden">
      <div className='flex items-center rounded-lg'>
        <button 
        className="inline-flex items-center p-2 text-sm text-gray-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => {
          const menu = document.getElementById('navbar-default');
          menu.classList.toggle('hidden');
          menu.classList.toggle('flex');
          document.getElementById('hamburger-icon').classList.toggle('hidden');
          document.getElementById('button').classList.toggle('hidden');  
          document.getElementById('close-icon').classList.toggle('hidden');
        }}
  >
  <svg className="w-6 h-6" id='hamburger-icon' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd"></path>
        </svg>
        <svg
  id="close-icon"
  className="hidden w-6 h-6"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    clipRule="evenodd"
  ></path>
      </svg>
        </button>
        </div>
      <div
        className="hidden animate-navcustom md:flex md:w-auto md:flex-row items-center top-14 left-0 md:static md:top-auto md:left-auto"
        id="navbar-default"
      >
    <ul id='navlist' className="flex md:flex-row md:space-x-8 font-medium">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg transition-all duration-300 font-medium ${
              isActive 
                ? 'text-[#EA526F] font-semibold' 
                : 'text-gray-600 dark:text-gray-300 hover:text-[#EA526F] dark:hover:text-[#EA526F]'
            } px-2 pr-2 py-2 cursor-pointer`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `rounded-lg transition-all duration-300 font-medium ${
              isActive 
                ? 'text-[#EA526F] font-semibold' 
                : 'text-gray-600 dark:text-gray-300 hover:text-[#EA526F] dark:hover:text-[#EA526F]'
            } px-2 pr-2 py-2 cursor-pointer`
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            `rounded-lg transition-all duration-300 font-medium ${
              isActive 
                ? 'text-[#EA526F] font-semibold' 
                : 'text-gray-600 dark:text-gray-300 hover:text-[#EA526F] dark:hover:text-[#EA526F]'
            } px-2 pr-2 py-2 cursor-pointer`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/connect"
          className={({ isActive }) =>
            `rounded-lg transition-all duration-300 font-medium ${
              isActive 
                ? 'text-[#EA526F] font-semibold' 
                : 'text-gray-600 dark:text-gray-300 hover:text-[#EA526F] dark:hover:text-[#EA526F]'
            } px-2 pr-2 py-2 cursor-pointer`
          }
        >
          Connect
        </NavLink>
      </li>
    </ul>
        </div>
          
          <div className="flex items-center justify-end ml-auto"
              id='button'    
          >
            <DarkModeSwitch
              style={{ marginRight: '1rem' }}
      checked={isDarkMode}
      onChange={theme === 'light' ? darkTheme : lightTheme}
      size={32}
    />
            <button className="rounded-[15px] bg-[#279AF1] dark:bg-blue-500 hover:bg-[#4492f9] dark:hover:bg-blue-600 px-4 py-2 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
              <Link 
                // to="https://drive.google.com/file/d/1-ZNWtE8rRgeYEYxBLrwP4YjrkAcueGnv/view?usp=sharing" 
                to="https://drive.google.com/file/d/1koEibgDYRp0z6lc_f53GH8bmVNcmzEej/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Resume
          </Link>
          </button>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Header