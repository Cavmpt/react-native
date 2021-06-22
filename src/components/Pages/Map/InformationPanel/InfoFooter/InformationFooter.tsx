import React from 'react'

import './InformationFooter.scss'

export interface IInformationFooterProps {
  placeholder?: null
}

export default function InformationFooter(
  props: IInformationFooterProps,
): JSX.Element {
  return (
    <div className='panel-footer'>
      <div className='panel-footer__top'>
        <div>
          <h2>
            25°C
            <i className='fas fa-sun' />
          </h2>
          <h4>scattered clouds</h4>
        </div>
        <div className='test'>
          <h2>
            2 kt
            <i className='fas fa-wind' />
          </h2>
          <h4>light winds</h4>
        </div>
      </div>

      <div className='panel-footer__bottom'>
        <h4>generated - 2021. copyright xguard</h4>
      </div>
    </div>
  )
}
