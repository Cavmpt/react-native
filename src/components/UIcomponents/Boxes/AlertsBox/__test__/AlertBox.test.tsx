/* eslint-disable */
// @ts-nocheck
import React, {useContext} from 'react'
import {render, screen} from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import {makeServer} from '../../../../../config/mirage-config'
import AlertBox from '../AlertsBox'
import {Context, ContextType} from '../../../../../store/Provider'

describe('Alert Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    const currentAlerts = [
      {id: 1, message: 'Alerts 1', value: '12341234123ff', acknowledged: false},
      {id: 2, message: 'Alerts 2', value: '12341234123ff', acknowledged: false},
      {id: 3, message: 'Alerts 3', value: '12341234123ff', acknowledged: false},
    ]
    render(
      <Context.Provider value={{currentAlerts}}>
        <AlertBox />
      </Context.Provider>,
    )
    expect(screen.getAllByTestId('alertBox-td')[0]).toHaveTextContent(
      'Alerts 1',
    )
    expect(screen.getAllByTestId('alertBox-td')[1]).toHaveTextContent(
      'Alerts 2',
    )
  })
})
