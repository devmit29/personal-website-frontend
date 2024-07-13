import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Projects } from './Pages/index.js'
import Home from './components/Home/Home'

export const router = createBrowserRouter([
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
  
export default router;