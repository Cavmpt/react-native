import React from 'react'
import {NavLink} from 'react-router-dom'
import ButtonSquare from '../Buttons/ButtonSquare/ButtonSquare'
import './Sidebar.scss'

export interface ISidebarProps {
  open: boolean
  // placeholder?: null
}

export default function Sidebar(props: ISidebarProps): JSX.Element {
  const {open} = props

  console.log(`log open`)
  console.log(open)

  return (
    <div className={open ? 'sidebar sidebar-test' : 'sidebar sidebar-none'}>
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
