import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TableCell from './TableCell'

describe('Running Test for sawatzky TableCell', () => {
  test('Check that TableCell is visible', () => {
    render(<TableCell>text</TableCell>)
    expect(screen.getByRole('cell', { name: 'text' })).toBeVisible()
  })

  test('Check TableCell Disabled', () => {
    render(<TableCell disabled>text</TableCell>)
    expect(screen.getByRole('cell', { name: 'text' })).toHaveStyle('background-color : #cecdcd')
  })

  test('Check TableCell has error', () => {
    render(<TableCell error>text</TableCell>)
    expect(screen.getByRole('cell', { name: 'text' })).toHaveStyle('background-color : #ff5b4f')
  })
})
