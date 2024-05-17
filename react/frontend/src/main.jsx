import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';

const routeur = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    // errorElement: <Erreur />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routeur}/>
  </React.StrictMode>,
)