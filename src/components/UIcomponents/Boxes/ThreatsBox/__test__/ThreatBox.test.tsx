/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {render, screen} from '@testing-library/react'
import {makeServer} from '../../../../../config/mirage-config'
import ThreatsBox from '../ThreatsBox'
import {Context, ContextType} from '../../../../../store/Provider'

describe('Threat Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    const currentThreats = [
      {id: 1, message: 'Threat 1', value: '12341234123ff'},
      {id: 2, message: 'Threat 2', value: '12341234123ff'},
      {id: 3, message: 'Threat 3', value: '12341234123ff'},
    ]
    render(
      <Context.Provider value={{currentThreats}}>
        <ThreatsBox />
      </Context.Provider>,
    )
    expect(screen.getAllByTestId('threatBox-tr')[0]).toHaveTextContent(
      'Threat 1',
    )
    expect(screen.getAllByTestId('threatBox-tr')[1]).toHaveTextContent(
      'Threat 2',
    )
  })
})
