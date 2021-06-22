import React from 'react'
import {render, screen} from '@testing-library/react'
import LiveFeed from '../LiveFeed'

describe('Alert Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    render(<LiveFeed />)
    expect(screen.getAllByTestId('liveFeed')).toBeTruthy()
  })
})
