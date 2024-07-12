import React, { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'

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
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "skills",
          element: <Skills />
        },
        {
          path: "experince",
          element: <Experience />
        },
        {
          path: "work",
          element: <Work />
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
