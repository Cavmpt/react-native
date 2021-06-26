import React from 'react'
import {BrowserRouter as Router, useRoutes, Outlet} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Navbar from './components/UIcomponents/Navbar/Navbar'
import Sidebar from './components/UIcomponents/Sidebar/Sidebar'
import Map from './components/Pages/Map/Map'
import Controls from './components/Pages/Controls/Controls'

import ErrorBoundary from './components/UIcomponents/Notifications/ErrorBoundary/ErrorBoundary'

import {makeServer} from './config/mirage-config'
import SocketConfig from './config/socket-config'

import 'typeface-roboto-slab'

import './styles/colors.css'
import './styles/index.css'
import './styles/fonts.css'

import reportWebVitals from './reportWebVitals'

import {Provider} from './store/Provider'

const routesArray = [
  {
    path: '/',
    element: (
      <div className='app'>
        <Navbar />
        <div className='divide'>
          <div className='menu-sidebar'>
            <Sidebar />
          </div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
      </div>
    ),
    children: [
      {path: '/controls', element: <Controls />},
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
        <SocketConfig>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </SocketConfig>
      </Provider>
    </Router>
  </div>,
  document.getElementById('src'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
