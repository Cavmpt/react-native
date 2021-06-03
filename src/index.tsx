import React from 'react'
import {BrowserRouter as Router, useRoutes, Outlet} from 'react-router-dom'

import ReactDOM from 'react-dom'
import DOTENV from 'dotenv'

import Navbar from './components/UIcomponents/Navbar/Navbar'
import Map from './components/Pages/Map/Map'
import Control from './components/Pages/Control/Control'

// import {makeServer} from './config/mirageConfig'

import 'typeface-roboto-slab'

import './colors.css'
import './index.css'

import reportWebVitals from './reportWebVitals'

import {Provider} from './store/Provider'

DOTENV.config()

// if (process.env.NODE_ENV === 'development') {
//   makeServer({environment: 'development'})
// }

const routesArray = [
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {path: '/controls', element: <Control />},
      {path: '/', element: <Map />},
    ],
  },
]

const App = () => {
  const routes = useRoutes(routesArray)
  return routes
}

ReactDOM.render(
  <div className='wrapper'>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </div>,
  document.getElementById('src'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
