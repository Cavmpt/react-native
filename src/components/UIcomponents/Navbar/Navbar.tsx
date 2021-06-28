import * as React from 'react'
import {useState} from 'react'
import './Navbar.scss'

import StatusSection from './StatusSection/StatusSection'
import ProfilSection from './ProfilSection/ProfilSection'
import NotificationSection from './NotificationsSection/NotificationsSection'
import LanguageSection from './LanguageSection/LanguageSection'

export interface INavbarProps {
  open: boolean
  test: () => void
  // placeholder?: null
}

export default function Navbar(props: INavbarProps): JSX.Element {
  const {open} = props
  const {test} = props

  return (
    <div className='navbar'>
      <div className='navbar__logo-xguard-wrapper'>
        <img src='./xguard-logo.png' alt='Xguard-logo' width='50' height='50' />{' '}
        <span>Xguard</span>
      </div>

      <div onClick={test} aria-hidden='true' className='navbar__burger'>
        <div />
        <div />
        <div />
      </div>

      <StatusSection />
      <NotificationSection />
      <LanguageSection />
      <ProfilSection />
    </div>
  )
}
