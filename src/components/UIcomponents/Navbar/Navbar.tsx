import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navbar.scss'

export interface INavbarProps {
  placeholder?: null
}

export default function Navbar(props: INavbarProps): JSX.Element {
  return (
    <div className='navbar'>
      <div className='navbar__logo-xguard-wrapper'>
        <img src='./xguard-logo.png' alt='Xguard-logo' width='50' height='50' />
      </div>
      <NavLink
        end
        to='/'
        activeStyle={{
          color: 'white',
          textDecoration: 'underline',
        }}
        className='navbar__map'
      >
        Map
      </NavLink>
      <NavLink
        to='controls'
        activeStyle={{
          color: 'white',
          textDecoration: 'underline',
        }}
        className='navbar__live-feeds'
      >
        Controls
      </NavLink>
    </div>
  )
}
