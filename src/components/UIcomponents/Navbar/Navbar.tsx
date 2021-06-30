import * as React from 'react'
import './Navbar.scss'

import StatusSection from './StatusSection/StatusSection'
import ProfilSection from './ProfilSection/ProfilSection'
import NotificationSection from './NotificationsSection/NotificationsSection'
import LanguageSection from './LanguageSection/LanguageSection'

export interface INavbarProps {
  placeholder?: null
}

export default function Navbar(props: INavbarProps): JSX.Element {
  return (
    <div className='navbar'>
      <div className='navbar__logo-xguard-wrapper'>
        <img src='./xguard-logo.png' alt='Xguard-logo' width='45' />{' '}
        <span>XGuard</span>
      </div>
      <StatusSection />
      <NotificationSection />
      <LanguageSection />
      <ProfilSection />
    </div>
  )
}
