import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Projects } from './Pages/index.js'
import Home from './Pages/Home/Home.jsx';

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
        },
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
  
export default router;