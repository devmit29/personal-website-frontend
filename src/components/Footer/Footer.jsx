import React from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../../contexts/theme'

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="mt-8 pt-1 pb-2 text-gray-800 dark:text-gray-200 animate-fadeIn">
      <hr className="h-px my-2 bg-gradient-to-r from-transparent via-gray-300 dark:via-[#55626c] to-transparent border-0"/>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="text-center md:text-left mb-6 md:mb-0 w-full sm:w-auto animate-slideInLeft">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 mt-2 transition-colors duration-300 hover:text-[#279AF1] dark:hover:text-[#279AF1]">
              Dev Mittal
            </h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              I love to explore and learn new things quickly.
            </p>
          </div>
          <div className="flex space-x-6 w-full md:w-auto justify-center md:justify-start animate-slideInRight">
            <Link 
              to="https://github.com/DevMit29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill={theme==='dark'?'currentColor':'dark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.482.5.093.682-.218.682-.482 0-.237-.009-.866-.014-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.154-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.532 2.34 1.09 2.91.833.092-.647.35-1.09.635-1.34-2.22-.252-4.555-1.11-4.555-4.936 0-1.09.39-1.983 1.03-2.682-.103-.253-.448-1.268.098-2.642 0 0 .837-.268 2.742 1.022A9.59 9.59 0 0112 8.422c.86 0 1.725.116 2.536.34 1.905-1.29 2.74-1.022 2.74-1.022.548 1.374.203 2.39.1 2.642.64.699 1.03 1.592 1.03 2.682 0 3.835-2.338 4.68-4.565 4.927.36.31.682.92.682 1.852 0 1.337-.012 2.417-.012 2.745 0 .267.18.578.688.48C19.136 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </Link>      
            <Link 
              to="https://instagram.com/devmit29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill={theme==='dark'?'currentColor':'dark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.057 1.97.24 2.411.405.586.223 1.003.492 1.447.936.445.444.713.861.936 1.447.165.441.348 1.241.405 2.411.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.057 1.17-.24 1.97-.405 2.411-.223.586-.492 1.003-.936 1.447-.444.445-.861.713-1.447.936-.441.165-1.241.348-2.411.405-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.057-1.97-.24-2.411-.405-.586-.223-1.003-.492-1.447-.936-.445-.444-.713-.861-.936-1.447-.165-.441-.348-1.241-.405-2.411-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.057-1.17.24-1.97.405-2.411.223-.586.492-1.003.936-1.447.444-.445.861-.713 1.447-.936.441-.165 1.241-.348 2.411-.405 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.67.014-4.947.072-1.281.059-2.163.27-2.919.573-.793.318-1.467.745-2.133 1.411-.666.666-1.093 1.34-1.411 2.133-.303.756-.514 1.638-.573 2.919-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.059 1.281.27 2.163.573 2.919.318.793.745 1.467 1.411 2.133.666.666 1.34 1.093 2.133 1.411.756.303 1.638.514 2.919.573 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.281-.059 2.163-.27 2.919-.573.793-.318 1.467-.745 2.133-1.411.666-.666 1.093-1.34 1.411-2.133.303-.756.514-1.638.573-2.919.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.281-.27-2.163-.573-2.919-.318-.793-.745-1.467-1.411-2.133-.666-.666-1.34-1.093-2.133-1.411-.756-.303-1.638-.514-2.919-.573-1.277-.058-1.688-.072-4.947-.072z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.76 6.162 6.162 6.162 6.162-2.76 6.162-6.162-2.76-6.162-6.162-6.162zm0 10.175c-2.21 0-4.013-1.802-4.013-4.013s1.802-4.013 4.013-4.013 4.013 1.802 4.013 4.013-1.802 4.013-4.013 4.013zm6.406-11.845c-.796 0-1.441.646-1.441 1.441s.646 1.441 1.441 1.441 1.441-.646 1.441-1.441-.646-1.441-1.441-1.441z"/>
              </svg>
            </Link>
            <Link 
              to="https://x.com/DevMitt29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill={theme==='dark'?'currentColor':'dark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.61 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.926 2.204-4.926 4.923 0 .386.043.763.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.574-.666 2.475 0 1.709.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.061c0 2.388 1.697 4.379 3.946 4.832-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.626 1.956 2.444 3.379 4.6 3.418-1.684 1.32-3.808 2.106-6.115 2.106-.398 0-.79-.023-1.177-.068 2.179 1.394 4.768 2.209 7.548 2.209 9.057 0 14.009-7.502 14.009-14.007 0-.213-.005-.426-.014-.637.961-.693 1.796-1.56 2.457-2.548l-.047-.02z"/>
              </svg>
            </Link>
            <Link 
              to="https://www.linkedin.com/in/devmit29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-pointer"
            >
              <svg className="w-6 h-6" fill={theme==='dark'?'currentColor':'dark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.225 0h-20.451c-.978 0-1.774.796-1.774 1.774v20.451c0 .978.796 1.774 1.774 1.774h20.451c.978 0 1.774-.796 1.774-1.774v-20.451c0-.978-.796-1.774-1.774-1.774zm-15.265 20.451h-3.034v-10.4h3.034v10.4zm-1.517-11.82c-1.03 0-1.864-.834-1.864-1.865 0-1.03.834-1.864 1.864-1.864 1.03 0 1.864.834 1.864 1.864 0 1.03-.834 1.865-1.864 1.865zm13.782 11.82h-3.034v-5.293c0-1.261-.025-2.884-1.758-2.884-1.759 0-2.028 1.376-2.028 2.792v5.385h-3.034v-10.4h2.911v1.421h.042c.406-.768 1.398-1.576 2.877-1.576 3.074 0 3.643 2.023 3.643 4.653v6.901z"/>
              </svg>
            </Link>
            <Link 
              to="https://www.youtube.com/@devmit29" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 cursor-pointer"
            >
              <svg className="w-6 h-6" fill={theme==='dark'?'currentColor':'dark'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M23.499 6.203c-.291-1.096-1.148-1.952-2.243-2.243-1.986-.536-9.956-.536-9.956-.536s-7.97 0-9.956.536c-1.096.291-1.952 1.148-2.243 2.243-.536 1.986-.536 6.127-.536 6.127s0 4.141.536 6.127c.291 1.096 1.148 1.952 2.243 2.243 1.986.536 9.956.536 9.956.536s7.97 0 9.956-.536c1.096-.291 1.952-1.148 2.243-2.243.536-1.986.536-6.127.536-6.127s0-4.141-.536-6.127zm-13.473 8.034v-6.272l6.272 3.136-6.272 3.136z"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-2 text-center md:text-start text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300 hover:text-gray-800 dark:hover:text-gray-300">
          © 2025 My Website. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer