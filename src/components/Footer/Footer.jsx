import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
//     <footer className="bg-[#000] text-gray-200 py-8 z-50">
//   <div className="container mx-auto px-4 lg:px-8">
//     <div className="flex flex-col lg:flex-row justify-between items-center">
//       <div className="text-center lg:text-left mb-6 lg:mb-0">
//         <h2 className="text-2xl font-bold text-white mb-4">Dev Mittal</h2>
//         <p className="text-gray-400">I love to explore and learn new things quickly.</p>
//       </div>
//       <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-6 lg:mb-0">
//         {/* <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
//           <li>
//             <NavLink 
//               to="/" 
//               className={({ isActive }) => 
//                 `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/about-me" 
//               className={({ isActive }) => 
//                 `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/projects" 
//               className={({ isActive }) => 
//                 `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
//               }
//             >
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/connect" 
//               className={({ isActive }) => 
//                 `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
//               }
//             >
//               Connect
//             </NavLink>
//           </li>
//         </ul> */}
//       </div>
//       <div className="flex space-x-4">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//           <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M22.675 0h-21.35c-.733 0-1.325.591-1.325 1.325v21.351c0 .733.591 1.325 1.325 1.325h11.497v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.893-4.789 4.659-4.789 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.762v2.314h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.325v-21.351c0-.733-.591-1.325-1.325-1.325z"/>
//           </svg>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
//           <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.61 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.926 2.204-4.926 4.923 0 .386.043.763.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.574-.666 2.475 0 1.709.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.388 1.697 4.379 3.946 4.832-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.6 3.418-1.684 1.32-3.808 2.106-6.115 2.106-.398 0-.79-.023-1.177-.068 2.179 1.394 4.768 2.209 7.548 2.209 9.057 0 14.009-7.502 14.009-14.007 0-.213-.005-.426-.014-.637.961-.693 1.796-1.56 2.457-2.548l-.047-.02z"/>
//           </svg>
//         </a>
//         <a href="https://www.linkedin.com/in/devmit29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer">
//           <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path d="M22.225 0h-20.451c-.978 0-1.774.796-1.774 1.774v20.451c0 .978.796 1.774 1.774 1.774h20.451c.978 0 1.774-.796 1.774-1.774v-20.451c0-.978-.796-1.774-1.774-1.774zm-15.265 20.451h-3.034v-10.4h3.034v10.4zm-1.517-11.82c-1.03 0-1.864-.834-1.864-1.865 0-1.03.834-1.864 1.864-1.864 1.03 0 1.864.834 1.864 1.864 0 1.03-.834 1.865-1.864 1.865zm13.782 11.82h-3.034v-5.293c0-1.261-.025-2.884-1.758-2.884-1.759 0-2.028 1.376-2.028 2.792v5.385h-3.034v-10.4h2.911v1.421h.042c.406-.768 1.398-1.576 2.877-1.576 3.074 0 3.643 2.023 3.643 4.653v6.901z"/>
//           </svg>
//         </a>
//       </div>
//     </div>
//     <div className="mt-8 text-start text-gray-400 text-sm">
//       © 2024 My Website. All rights reserved.
//     </div>
//   </div>
    // </footer>
    <footer className=" text-gray-200 mt-8 pt-1 pb-2">
      <hr className="h-px my-2 bg-[#55626c] border-0"/>
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 sm:mb-0 w-full sm:w-auto">
          <h2 className="text-2xl font-bold text-white mb-2 mt-2">Dev Mittal</h2>
          <p className="text-gray-400">I love to explore and learn new things quickly.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-6 md:mb-0 w-full md:w-auto">
          {/* <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-me" 
                className={({ isActive }) => 
                  `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/connect" 
                className={({ isActive }) => 
                  `rounded-lg ${isActive ? 'text-[#EA526F]' : 'text-gray-400'} px-2 pr-2 py-2 cursor-pointer`
                }
              >
                Connect
              </NavLink>
            </li>
          </ul> */}
        </div>
        <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-start">
            <a href="https://github.com/DevMit29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.482.5.093.682-.218.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.154-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.532 2.34 1.09 2.91.833.092-.647.35-1.09.635-1.34-2.22-.252-4.555-1.11-4.555-4.936 0-1.09.39-1.983 1.03-2.682-.103-.253-.448-1.268.098-2.642 0 0 .837-.268 2.742 1.022A9.59 9.59 0 0112 8.422c.86 0 1.725.116 2.536.34 1.905-1.29 2.74-1.022 2.74-1.022.548 1.374.203 2.39.1 2.642.64.699 1.03 1.592 1.03 2.682 0 3.835-2.338 4.68-4.565 4.927.36.31.682.92.682 1.852 0 1.337-.012 2.417-.012 2.745 0 .267.18.578.688.48C19.136 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>      
          <a href="https://instagram.com/devmit29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.057 1.97.24 2.411.405.586.223 1.003.492 1.447.936.445.444.713.861.936 1.447.165.441.348 1.241.405 2.411.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.057 1.17-.24 1.97-.405 2.411-.223.586-.492 1.003-.936 1.447-.444.445-.861.713-1.447.936-.441.165-1.241.348-2.411.405-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.057-1.97-.24-2.411-.405-.586-.223-1.003-.492-1.447-.936-.445-.444-.713-.861-.936-1.447-.165-.441-.348-1.241-.405-2.411-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.057-1.17.24-1.97.405-2.411.223-.586.492-1.003.936-1.447.444-.445.861-.713 1.447-.936.441-.165 1.241-.348 2.411-.405 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.67.014-4.947.072-1.281.059-2.163.27-2.919.573-.793.318-1.467.745-2.133 1.411-.666.666-1.093 1.34-1.411 2.133-.303.756-.514 1.638-.573 2.919-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.059 1.281.27 2.163.573 2.919.318.793.745 1.467 1.411 2.133.666.666 1.34 1.093 2.133 1.411.756.303 1.638.514 2.919.573 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.281-.059 2.163-.27 2.919-.573.793-.318 1.467-.745 2.133-1.411.666-.666 1.093-1.34 1.411-2.133.303-.756.514-1.638.573-2.919.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.281-.27-2.163-.573-2.919-.318-.793-.745-1.467-1.411-2.133-.666-.666-1.34-1.093-2.133-1.411-.756-.303-1.638-.514-2.919-.573-1.277-.058-1.688-.072-4.947-.072z"/>
              <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.76-6.162-6.162-6.162zm0 10.175c-2.21 0-4.013-1.802-4.013-4.013s1.802-4.013 4.013-4.013 4.013 1.802 4.013 4.013-1.802 4.013-4.013 4.013zm6.406-11.845c-.796 0-1.441.646-1.441 1.441s.646 1.441 1.441 1.441 1.441-.646 1.441-1.441-.646-1.441-1.441-1.441z"/>
            </svg>
          </a>

          <a href="https://x.com/DevMitt29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.61 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.926 2.204-4.926 4.923 0 .386.043.763.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.574-.666 2.475 0 1.709.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.388 1.697 4.379 3.946 4.832-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.6 3.418-1.684 1.32-3.808 2.106-6.115 2.106-.398 0-.79-.023-1.177-.068 2.179 1.394 4.768 2.209 7.548 2.209 9.057 0 14.009-7.502 14.009-14.007 0-.213-.005-.426-.014-.637.961-.693 1.796-1.56 2.457-2.548l-.047-.02z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/devmit29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.225 0h-20.451c-.978 0-1.774.796-1.774 1.774v20.451c0 .978.796 1.774 1.774 1.774h20.451c.978 0 1.774-.796 1.774-1.774v-20.451c0-.978-.796-1.774-1.774-1.774zm-15.265 20.451h-3.034v-10.4h3.034v10.4zm-1.517-11.82c-1.03 0-1.864-.834-1.864-1.865 0-1.03.834-1.864 1.864-1.864 1.03 0 1.864.834 1.864 1.864 0 1.03-.834 1.865-1.864 1.865zm13.782 11.82h-3.034v-5.293c0-1.261-.025-2.884-1.758-2.884-1.759 0-2.028 1.376-2.028 2.792v5.385h-3.034v-10.4h2.911v1.421h.042c.406-.768 1.398-1.576 2.877-1.576 3.074 0 3.643 2.023 3.643 4.653v6.901z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4 text-center md:text-start text-gray-400 text-sm">
        © 2024 My Website. All rights reserved.
      </div>
    </div>
  </footer>
  

  )
}

export default Footer