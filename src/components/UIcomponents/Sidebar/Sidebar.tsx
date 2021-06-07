import * as React from 'react'
import {NavLink} from 'react-router-dom'

import './Sidebar.scss'

export interface ISidebarProps {
  placeholder?: null
}

export default function Sidebar(props: ISidebarProps): JSX.Element {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo-xguard-wrapper'>
        <img src='./xguard-logo.png' alt='Xguard-logo' width='50' height='50' />
      </div>
      <NavLink
        end
        to='/'
        activeStyle={{
          color: 'white',
          textDecoration: 'underline',
        }}
        className='sidebar__map'
      >
        Map
      </NavLink>
      <NavLink
        to='controls'
        activeStyle={{
          color: 'white',
          textDecoration: 'underline',
        }}
        className='sidebar__live-feeds'
      >
        Controls
      </NavLink>
    </div>
  )
}
