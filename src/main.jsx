import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Projects } from './Pages/index.js'
import Home from './components/Home/Home'
import { PageTransition } from '@steveeeie/react-page-transition'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: ([
      {
        path: '',
        element: <Home/>
      }, {
        path: 'about-me',
        element: <About/>
      },
      {
        path: 'connect',
        element: <Contact/>
      },
      {
        path: 'projects',
        element: <Projects/>
      }
    ])
  }
])

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about-me' element={<About />} />
//       <Route path='connect' element={<Contact/> } />
//       <Route path='projects' element={<Projects/> } />
//     </Route>
//   )
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
