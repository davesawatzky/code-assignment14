import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('Running Test for Input', () => {
  test('Check that Input is visible', () => {
    render(<Input data-testid='inputbox' />)
    expect(screen.getByTestId('inputbox')).toBeVisible()
  })

  test('Check that Input component can be disabled', () => {
    render(<Input data-testid='inputbox' disabled />)
    expect(screen.getByTestId('inputbox')).toBeDisabled()
    expect(screen.getByTestId('inputbox')).toHaveStyle('border: 1px solid #e4e3ea')
  })

  test('Check for Error in Input component', () => {
    render(<Input data-testid='inputbox' error />)
    expect(screen.getByTestId('inputbox')).toHaveStyle('border: 1px solid #a9150b')
  })
})
