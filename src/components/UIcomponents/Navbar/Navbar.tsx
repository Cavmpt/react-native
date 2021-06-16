import React from 'react'
import {NavLink} from 'react-router-dom'
import ButtonSquare from '../Buttons/ButtonSquare/ButtonSquare'
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
      <div>
        <NavLink
          end
          to='/'
          activeStyle={{
            color: 'white',
            textDecoration: 'underline',
          }}
          className='navbar__map'
        >
          <ButtonSquare>
            <span className='iconify' data-icon='bi:map' data-inline='false' />
          </ButtonSquare>
        </NavLink>
      </div>
      <div>
        <NavLink
          to='controls'
          activeStyle={{
            color: 'white',
            textDecoration: 'underline',
          }}
          className='navbar__controls'
        >
          <ButtonSquare>
            <span
              className='iconify'
              data-icon='ic:baseline-control-camera'
              data-inline='false'
            />
          </ButtonSquare>
        </NavLink>
      </div>
    </div>
  )
}
