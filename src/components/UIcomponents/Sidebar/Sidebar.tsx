import React from 'react'
import {NavLink} from 'react-router-dom'
import ButtonSquare from '../Buttons/ButtonSquare/ButtonSquare'
import './Sidebar.scss'

export interface ISidebarProps {
  placeholder?: null
}

export default function Sidebar(props: ISidebarProps): JSX.Element {
  return (
    <div className='sidebar'>
      <div>
        <NavLink
          end
          to='/'
          activeStyle={{
            color: 'white',
            textDecoration: 'underline',
          }}
          className='sidebar__map'
        >
          <ButtonSquare>
            <span className='iconify' data-icon='bi:map' data-inline='false' />
          </ButtonSquare>
        </NavLink>
      </div>
      <div>
        <NavLink
          to='controls'
          data-testid='control-button'
          activeStyle={{
            color: 'white',
            textDecoration: 'underline',
          }}
          className='sidebar__controls'
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
