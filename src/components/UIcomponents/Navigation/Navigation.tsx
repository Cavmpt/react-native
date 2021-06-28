import * as React from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, useRoutes, Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './Navigation.scss'

export interface INavigationProps {
  placeholder?: null
}

export default function Navigation(props: INavigationProps) {
  const [open, setOpen] = useState(false)

  const stateChanger = () => {
    setOpen(current => !current)
  }
  return (
    <>
      <Navbar open={open} test={stateChanger} />
      <div className='divide'>
        {/* <div className='menu-sidebar'> */}
        <Sidebar open={open} />
        {/* </div> */}
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
