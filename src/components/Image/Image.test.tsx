import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Image from './Image'

describe('Running Test for the Image component', () => {
  test('Check that the image is visible', () => {
    render(<Image data-testid='image' source='@/assets/field.jpg' />)
    expect(screen.getByTestId('image')).toBeVisible()
  })

  test('Check that image is disabled', () => {
    render(<Image data-testid='image' source='@/assets/field.jpg' disabled />)
    expect(screen.getByTestId('image')).toHaveStyle('filter: grayscale(100%)')
  })
})
