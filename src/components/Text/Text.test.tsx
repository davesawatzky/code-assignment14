import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Running Test for Text', () => {
  test('Check that the label is visible', () => {
    render(<Text data-testid='textel' />)
    expect(screen.getByTestId('textel')).toBeVisible()
  })

  test('Check that the Text component can be disabled', () => {
    render(<Text data-testid='textel' disabled />)
    expect(screen.getByTestId('textel')).toHaveStyle('color: #e4e3ea')
  })

  test('check for error state of text component', () => {
    render(<Text data-testid='textel' error />)
    expect(screen.getByTestId('textel')).toHaveStyle({
      color: '#a9150b',
      'font-weight': '700'
    })
  })
})
