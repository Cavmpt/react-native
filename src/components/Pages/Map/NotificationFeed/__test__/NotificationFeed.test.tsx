import React from 'react'
import {render, screen} from '@testing-library/react'
import NotificationFeed from '../NotificationFeed'

describe('Alert Box behavior works as expected', () => {
  it('displays the threats correctly', async () => {
    render(<NotificationFeed />)
    expect(screen.getAllByTestId('notification-feed')).toBeTruthy()
  })
})
