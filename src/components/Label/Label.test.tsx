import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Label from './Label'

describe('Running Test for Label', () => {
  test('Check that the label is visible', () => {
    render(<Label data-testid='label' />)
    expect(screen.getByTestId('label')).toBeVisible()
  })

  test('Check that the label can be disabled', () => {
    render(<Label data-testid='label' disabled />)
    expect(screen.getByTestId('label')).toHaveStyle('color: #e4e3ea')
  })

  test('check for error state of label', () => {
    render(<Label data-testid='label' error />)
    expect(screen.getByTestId('label')).toHaveStyle({
      color: '#a9150b',
      'font-weight': '700'
    })
  })
})
