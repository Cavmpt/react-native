import React from 'react'
import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import SideBar from '../Sidebar'

describe('Sidebar Renders', () => {
  it('expect control button from the sidebar to be not null', async () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>,
    )
    expect(screen.getByTestId('control-button')).toBeTruthy()
  })
})
