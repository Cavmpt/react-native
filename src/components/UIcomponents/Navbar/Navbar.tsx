import * as React from 'react'
import {useState} from 'react'
import './Navbar.scss'

import StatusSection from './StatusSection/StatusSection'
import ProfilSection from './ProfilSection/ProfilSection'
import NotificationSection from './NotificationsSection/NotificationsSection'
import LanguageSection from './LanguageSection/LanguageSection'

export interface INavbarProps {
  placeholder?: null
}

export default function Navbar(props: INavbarProps): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar__logo-xguard-wrapper'>
        <img src='./xguard-logo.png' alt='Xguard-logo' width='50' height='50' />{' '}
        <span>Xguard</span>
      </div>

      <div
        aria-hidden='true'
        className={
          open ? 'navbar__burger burger-close' : 'navbar__burger burger-open'
        }
      >
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
