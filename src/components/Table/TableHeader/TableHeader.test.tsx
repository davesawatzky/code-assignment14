import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TableHeader from './TableHeader'

describe('Running Test for Table Header', () => {
  test('Check that Table Header is visible', () => {
    render(
      <table>
        <TableHeader
          headings={[
            { name: 'One', columnSpan: 1 },
            { name: 'Two and Three', columnSpan: 2 },
            { name: 'Four', columnSpan: 4 }
          ]}
          headerColor={'blue'}
        ></TableHeader>
      </table>
    )
    expect(screen.getByRole('rowgroup')).toBeVisible()
  })

  test('Check Table Header is Disabled', () => {
    render(
      <table>
        <TableHeader
          disabled
          headings={[
            { name: 'One', columnSpan: 1 },
            { name: 'Two and Three', columnSpan: 2 },
            { name: 'Four', columnSpan: 4 }
          ]}
          headerColor={'blue'}
        ></TableHeader>
      </table>
    )
    expect(screen.getByRole('rowgroup')).toHaveStyle('background-color : #cecdcd')
  })

  test('Check Table Header shows error', () => {
    render(
      <table>
        <TableHeader
          error
          headings={[
            { name: 'One', columnSpan: 1 },
            { name: 'Two and Three', columnSpan: 2 },
            { name: 'Four', columnSpan: 4 }
          ]}
          headerColor={'blue'}
        ></TableHeader>
      </table>
    )
    expect(screen.getByRole('rowgroup')).toHaveStyle('background-color : #ff5b4f')
  })
})
