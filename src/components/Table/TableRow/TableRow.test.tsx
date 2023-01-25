import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TableRow from './TableRow'
import TableCell from '../TableCell'

describe('Running Test for Table Row', () => {
  test('Check that TableCell is visible', () => {
    render(
      <TableRow>
        <TableCell>text</TableCell>
      </TableRow>
    )
    expect(screen.getByRole('row', { name: 'text' })).toBeVisible()
  })

  test('Check TableRow is Disabled', () => {
    render(
      <TableRow disabled>
        <TableCell>text</TableCell>
      </TableRow>
    )
    expect(screen.getByRole('row', { name: 'text' })).toHaveStyle('background-color : #cecdcd')
  })

  test('Check Table Row shows error', () => {
    render(
      <TableRow error>
        <TableCell>text</TableCell>
      </TableRow>
    )
    expect(screen.getByRole('row', { name: 'text' })).toHaveStyle('background-color : #ff5b4f')
  })
})
