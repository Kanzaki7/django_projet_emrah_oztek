import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Equipes from './components/Equipes.jsx'
import Equipe from './components/Equipe.jsx'
import Braqueur from './components/Braqueur.jsx'
import Braqueurs from './components/Braqueurs.jsx'
import CreateEquipe from './components/CreateEquipe.jsx'
import CreateBraqueur from './components/CreateBraqueur.jsx'
import UpdateEquipe from './components/UpdateEquipe.jsx'
import UpdateBraqueur from './components/UpdateBraqueur.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';



const routeur = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    // errorElement: <Erreur />
  },
  {
    path:"/equipes",
    element: <Equipes />,
    // errorElement: <Erreur />
  },
  {
    path:"/equipes/:id",
    element: <Equipe />,
    // errorElement: <Erreur />
  },
  {
    path:"/braqueur/:id",
    element: <Braqueur />,
    // errorElement: <Erreur />
  },
  {
    path:"/braqueurs",
    element: <Braqueurs />,
    // errorElement: <Erreur />
  },
  {
    path:"/create-equipe",
    element: <CreateEquipe />,
    // errorElement: <Erreur />
  },
  {
    path:"/create-braqueur",
    element: <CreateBraqueur />,
    // errorElement: <Erreur />
  },
  {
    path:"/update-equipe/:id",
    element: <UpdateEquipe />,
    // errorElement: <Erreur />
  },
  {
    path:"/update-braqueur/:id",
    element: <UpdateBraqueur />,
    // errorElement: <Erreur />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routeur}/>
  </React.StrictMode>,
)

