import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    // <header className="shadow sticky z-auto top-3 opacity-90 pb-3">
    //   <nav className=" bg-[#F7F7FF] border-gray-200 lg:px-6 ml-72 mr-72 py-2.5 rounded-full">
    //     <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    //       <ul className="justify-start flex flex-col mt-4 font-medium collapse lg:visible lg:flex-row lg:space-x-8 lg:mt-0">
    //         <li>
    //           <NavLink
    //             to="/"
    //             className={({ isActive }) =>
    //               `rounded-lg ${isActive? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
    //               // `rounded-lg ${isActive ? 'text-white bg-blue-500/80' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
    //             }
    //           >
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/about-me"
    //             className={({ isActive }) =>
    //               `rounded-lg ${isActive? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
    //             }
    //           >
    //             About
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/Projects"
    //             className={({ isActive }) =>
    //               `rounded-lg ${isActive? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
    //             }
    //           >
    //             Projects
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/connect"
    //             className={({ isActive }) =>
    //               `rounded-lg ${isActive? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
    //             }
    //           >
    //             Connect
    //           </NavLink>
    //         </li>
    //       </ul>
    //       <button
    //             className='rounded-full bg-[#279AF1] flex justify-end px-4 pr-4 py-3 cursor-pointer'
    //           >
    //             Resume
    //           </button>
    //     </div>
    //   </nav>
    // </header>
<header className="shadow-lg top-0 bg-[#F7F7FF] opacity-90 w-3/4 mx-auto mt-4 pb-1 backdrop-blur-md rounded-3xl">
  <nav className="border-gray-200 px-4 lg:px-6 py-2.5 rounded-full">
    <div className="flex flex-wrap justify-between items-center mx-auto">
      <button 
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
        aria-controls="navbar-default" 
        aria-expanded="false"
        onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 14a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd"></path>
        </svg>
      </button>
      <div className="hidden md:flex w-16 lg:w-auto" id="navbar-default">
        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:ml-8 md:mr-8">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
              }
            >
              Projects
            </NavLink>
              </li>
              <li>
            <NavLink 
              to="/about-me" 
              className={({ isActive }) => 
                `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/connect" 
              className={({ isActive }) => 
                `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-600'} px-2 pr-2 py-2 cursor-pointer`
              }
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end lg:w-auto lg:ml-auto">
        <a 
            href="/Dev-Mittal-Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-3xl bg-[#279AF1] px-4 py-2 text-white font-semibold"
          >
            Resume
        </a>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Header