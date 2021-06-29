/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {render, screen} from '@testing-library/react'
import Controls from '../Controls'

describe('Alert Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    const currentAlerts = [
      {id: 1, message: 'Alerts 1', value: '12341234123ff', acknowledged: false},
      {id: 2, message: 'Alerts 2', value: '12341234123ff', acknowledged: false},
      {id: 3, message: 'Alerts 3', value: '12341234123ff', acknowledged: false},
    ]
    render(
      <Context.Provider value={{currentAlerts}}>
        <Controls />
      </Context.Provider>,
    )
    expect(screen.getByTestId('threat-Box')).toBeTruthy()
  })
})
