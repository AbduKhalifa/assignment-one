import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

function App() {

  const customRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "home",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <React.Fragment>
      <RouterProvider router={customRoutes}></RouterProvider>
    </React.Fragment>
  )
}

export default App
