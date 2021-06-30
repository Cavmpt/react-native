/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {Context, ContextType} from '../../../../store/Provider'
import Map from '../Map'

describe('Map renders as expected', () => {
  it('the map renders correctly', async () => {
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
    render(
      <Context.Provider value={{currentThreats, currentAlerts}}>
        <BrowserRouter>
          <Map />
        </BrowserRouter>
      </Context.Provider>,
    )
    expect(screen.getByTestId('map-page')).toBeTruthy()
  })
})
