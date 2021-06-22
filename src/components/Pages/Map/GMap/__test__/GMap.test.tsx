import React from 'react'
import {render, screen} from '@testing-library/react'
import GMap from '../GMap'

describe('Alert Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    render(<GMap />)
    expect(screen.getAllByTestId('map-page')).toBeTruthy()
  })
})
