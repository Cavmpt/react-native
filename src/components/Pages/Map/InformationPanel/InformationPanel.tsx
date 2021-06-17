import React from 'react'

import './InformationPanel.scss'
import InformationFooter from './InfoFooter/InformationFooter'
import InformationHeader from './InfoHeader/InformationHeader'
import InformationAlerts from './InfoAlerts/InformationAlerts'
import InformationInfo from './InfoInfo/InformationInfo'

export interface IInformationPanelProps {
  placeholder?: null
}

export default function InformationPanel(
  props: IInformationPanelProps,
): JSX.Element {
  return (
    <div className='information-panel'>
      <InformationAlerts />
      <InformationInfo />
      <InformationFooter />
    </div>
  )
}
