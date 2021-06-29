import React from 'react'
import {render, screen} from '@testing-library/react'
import {makeServer} from '../../../../../config/mirage-config'
import ThreatsBox from '../ThreatsBox'

describe('Threat Box behavior works as expected', () => {
  let server: any

  beforeEach(() => {
    server = makeServer()
  })

  afterEach(() => {
    server.shutdown()
  })

  it('displays the threats correctly', async () => {
    render(<ThreatsBox />)
    expect(screen.getAllByTestId('threatBox-tr')).toHaveTextContent('Threat 1')
  })
})
