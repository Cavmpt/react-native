import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navbar.scss'

export interface INavbarProps {
  placeholder?: any
}

export default function Navbar(props: INavbarProps): JSX.Element {
  return (
    <div className='navbar'>
      <img src='./xguard-logo.png' alt='Xguard-logo' width='50' height='50' />
      <NavLink
        end
        to='/'
        activeStyle={{
          fontWeight: 'bold',
          color: 'black',
        }}
        className='navbar__map'
      >
        Map
      </NavLink>
      <NavLink
        to='controls'
        activeStyle={{
          fontWeight: 'bold',
          color: 'black',
        }}
        className='navbar__live-feeds'
      >
        Controls
      </NavLink>
    </div>
  )
}
