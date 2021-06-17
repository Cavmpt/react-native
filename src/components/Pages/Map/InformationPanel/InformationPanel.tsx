import React from 'react'

import './InformationPanel.scss'
import InformationFooter from './InfoFooter/InformationFooter'
import InfoThreat from './InfoThreat/InfoThreat'
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
      <InfoThreat />
      <InformationAlerts />
      <InformationInfo />
      <InformationFooter />
    </div>
  )
}
