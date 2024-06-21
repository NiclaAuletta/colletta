import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

// IMPORTO I COMPONENTI
import App from './App.jsx'
import Promoter from './components/Promoter.jsx'
import Blog from './components/Blog.jsx'
import Donate from './components/Donate.jsx'
import Biography from './components/Biography.jsx'
import Article from './components/Article.jsx'

//IMPORTO LE FUNZIONI UTILI A SIMULARE IL CAMBIO PAGINE DI UNA SPA:
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//createBrowserRouter: prende come parametro un array di corrispondenze tra i path e i componenti.
const router = createBrowserRouter([
    {
      path:"/",
      element: <App />
    },
    {
      path: "/chi_siamo",
      element: <Promoter />
    },
    
    {
      path: "/chi_siamo/:id",
      element: <Biography />
    },       
    {
      path:"/il_blog",
      element: <Blog />
    } ,   
    {
      path:"/il_blog/:id",
      element: <Article />
    } ,   

    {
      path:"/dona",
      element: <Donate />
    }  
  ])

  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/*//RouterProvider accetta il router, cioè l’elenco telefonico da consultare */}
      <RouterProvider router = {router} />
    </React.StrictMode>
  )
