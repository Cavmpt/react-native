import React from 'react'
import {render, screen} from '@testing-library/react'
import {makeServer} from '../../../../../config/mirage-config'
import AlertBox from '../AlertsBox'

describe('Alert Box behavior works as expected', () => {
  let server: any

  beforeEach(() => {
    server = makeServer()
  })

  afterEach(() => {
    server.shutdown()
  })

  it('displays the threats correctly', async () => {
    render(<AlertBox />)
    expect(screen.getAllByTestId('alertBox-td')).toHaveTextContent('Alerts 1')
  })
})
