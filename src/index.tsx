import React from 'react'
import {BrowserRouter as Router, useRoutes, Outlet} from 'react-router-dom'
import ReactDOM from 'react-dom'
import DOTENV from 'dotenv'

import Navbar from './components/UIcomponents/Navbar/Navbar'
import Map from './components/Pages/Map/Map'
import Control from './components/Pages/Control/Control'

import 'typeface-roboto-slab'

import './colors.css'
import './index.css'

import reportWebVitals from './reportWebVitals'

import {Provider} from './store/Provider'

DOTENV.config()

// var url = 'ws://localhost:8080/uav-monitor'
// var client = Stomp.client(url)
// var connect_callback = function () {
//   // called back after the client is connected and authenticated to the STOMP server
// }
// var error_callback = function (error) {
//   // display the error's message header:
//   alert(error.headers.message)
// }
// var headers = {
//   login: 'mylogin',
//   passcode: 'mypasscode',
//   // additional header
//   'client-id': 'my-client-id',
// }
// client.connect(headers, connectCallback, errorCallback)

// client.connect(
//   login,
//   passcode,
//   connectCallback,
//   errorCallback,
//   closeEventCallback,
//   host,
// )
// var subscription = client.subscribe(destination, callback, { id: mysubid });
// var quote = {symbol: 'APPL', value: 195.46};
// client.send("/app/threat-ack", {}, JSON.stringify(quote));

// client.subcribe("/topic/alerts", function(message) {
//   var quote = JSON.parse(message.body);
//   alert(quote.symbol + " is at " + quote.value);
// });

// client.subcribe("/topic/threats", function(message) {
//   var quote = JSON.parse(message.body);
//   alert(quote.symbol + " is at " + quote.value);
// });

// client.disconnect(function () {
//   alert('See you next time!')
// })

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
