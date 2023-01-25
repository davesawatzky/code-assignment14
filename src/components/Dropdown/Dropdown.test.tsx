import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Dropdown from './Dropdown'
import userEvent from '@testing-library/user-event'

describe('Running Test for Dropdown', () => {
  test('Check placeholder in Dropdown', () => {
    render(<Dropdown placeholder='dropdown' />)
    expect(screen.getByPlaceholderText('dropdown')).toHaveAttribute('placeholder', 'dropdown')
  })

  test('Check that Dropdown is visible', () => {
    render(<Dropdown data-testid='dropdown' />)
    expect(screen.getByTestId('dropdown')).toBeVisible()
  })

  test('Dropdown element takes options', () => {
    render(<Dropdown data-testid='dropdown' options={['Up', 'Down']} />)
    userEvent.selectOptions(
      screen.getByTestId('dropdown'),
      screen.getByRole('option', { name: 'Up' })
    )
    expect(screen.getByRole<HTMLOptionElement>('option', { name: 'Up' }).selected).toBe(true)
  })

  test('Dropdown is disabled', () => {
    render(<Dropdown data-testid='dropdown' disabled />)
    expect(screen.getByTestId('dropdown')).toBeDisabled()
    expect(screen.getByTestId('dropdown')).toHaveStyle('background-color: #e4e4e4')
  })
})
