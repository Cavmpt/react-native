/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {getByTestId, render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import setCurrentAnalyzedThreatOrAlert  from '../ThreatAnalyser/ThreatAnalyser'
import Controls from '../Controls'
import {Context} from '../../../../store/Provider'

describe('Alert Box behavior works as expected', () => {

  const currentThreats = [
    {id: 1, message: 'Threat 1', value: '12341234123ff'},
    {id: 2, message: 'Threat 2', value: '12341234123ff'},
    {id: 3, message: 'Threat 3', value: '12341234123ff'},
  ]
  const currentAlerts = [
    {id: 1, message: 'Alerts 1', value: '12341234123ff', acknowledged: false},
    {id: 2, message: 'Alerts 2', value: '12341234123ff', acknowledged: false},
    {id: 3, message: 'Alerts 3', value: '12341234123ff', acknowledged: false},
  ]
  
  it('displays the threats correctly', async () => {

    render(
      <Context.Provider value={{currentThreats, currentAlerts}}>
        <Controls />
      </Context.Provider>,
    )

    expect(screen.getByTestId('threat-Box')).toBeTruthy()
  })

  it('button is enabled', async () => {

    const { getAllByTestId, getByText } = render(
      <Context.Provider value={{currentThreats, currentAlerts}}>
        <Controls />
      </Context.Provider>,
    )

    expect(getAllByTestId('button-large')[0]).not.toBeDisabled();
  })

  it('threat is selected', async () => {

    const { getAllByTestId } = render(
      <Context.Provider value={{currentThreats, currentAlerts }}>
        <Controls />
      </Context.Provider>,
    )

    userEvent.click(screen.getAllByTestId('threatBox-tr')[0])
    expect(getAllByTestId('button-large')[0]).toBeDisabled();
  })
})
