import React, {useContext} from 'react'

import './ThreatsBox.scss'

import {Context, ContextType} from '../../../../store/Provider'

export interface IThreatsBoxProps {
  placeholder?: null
}

export default function ThreatsBox(props: IThreatsBoxProps): JSX.Element {
  const context = useContext<ContextType>(Context)
  const {currentThreats, setCurrentAnalyzedThreatOrAlert} = context

  return (
    <div className='threatBox'>
      <tr className='threatBox__header'>
        <th>Confirmed threats to be investigated </th>
      </tr>
      {currentThreats.length > 0 ? (
        currentThreats.map(threats => (
          <tr
            className='threatBox__row'
            key={threats.id}
            onClick={() =>
              setCurrentAnalyzedThreatOrAlert({
                id: threats.id,
                message: threats.message,
                value: threats.value,
                type: 'threat',
              })
            }
            data-testid='threatBox-tr'
          >
            <td>
              <i className='fas fa-exclamation-triangle' />
              {threats.message}
            </td>
          </tr>
        ))
      ) : (
        <tr className='threatBox__row'>
          <td>no threats detected</td>
        </tr>
      )}
    </div>
  )
}

// bas 64
// id
//

// id

// Alert
// Threat
// ADded removed
