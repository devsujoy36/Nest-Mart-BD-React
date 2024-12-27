import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Components/Root/Root.jsx'
import Hero from './Components/Hero/Hero.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Hero/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
