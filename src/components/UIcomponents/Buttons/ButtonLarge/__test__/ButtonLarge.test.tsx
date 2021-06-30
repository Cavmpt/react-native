/* eslint-disable */
// @ts-nocheck
import React from 'react'
import {render, screen} from '@testing-library/react'
import ButtonLarge from '../ButtonLarge'

describe('the large button should work as expected and have the right value on it', () => {
  it('displays the button text correctly', async () => {
    const currentThreats = [
      {id: 1, message: 'Threat 1', value: '12341234123ff'},
      {id: 2, message: 'Threat 2', value: '12341234123ff'},
      {id: 3, message: 'Threat 3', value: '12341234123ff'},
    ]
    render(<ButtonLarge textValue='test-button' />)
    expect(screen.getByTestId('button-large')).toHaveTextContent('test-button')
  })
})
