import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('Running Test for sawatzky Button', () => {
  test('Check Button Disabled', () => {
    render(<Button buttonText='Button' disabled />)
    expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle('background-color : #cecdcd')
  })

  test('Check that Button is visible', () => {
    render(<Button buttonText='Button' />)
    expect(screen.getByRole('button', { name: 'Button' })).toBeVisible()
  })
})
