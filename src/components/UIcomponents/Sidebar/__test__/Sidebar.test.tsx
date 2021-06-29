import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import SideBar from '../Sidebar'

describe('Alert Box behavior works as expected', () => {
  global.window = Object.create(window)
  const url = 'http://localhost:3000/controls'
  Object.defineProperty(window, 'location', {
    value: {
      href: url,
    },
  })
  it('expect the sidebar to display the correct url', async () => {
    render(<SideBar />)
    fireEvent.click(screen.getByTestId('control-button'))
    expect(window.location.href).toEqual(url)
  })
})
