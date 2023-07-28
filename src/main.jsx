import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Navbar from './components/Fragments/Navbar';
import About from './components/Fragments/About';
import ToolSkill from './components/Fragments/ToolSkill';
import Name from './components/Elements/Name';
import Profile from './components/Elements/Profile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/> ,
  },
  {
    path: '/home',
    element: <About/> ,
  },
  {
    path: '/about',
    element:<Profile/> ,
  },
  {
    path: '/navbar',
    element: <Navbar/>,
  },
  {
    path: '/name',
    element: <Name/>,
  }
],{basename: import.meta.env.DEV ? '/' : '/portofolio/'});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
