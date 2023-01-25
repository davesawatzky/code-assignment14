import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TableFooter from './TableFooter'

describe('Running Test for Table Footer', () => {
  test('Check that Table Footer is visible', () => {
    render(
      <table>
        <TableFooter
          footer={[
            { name: 'One', columnSpan: 1 },
            { name: 'Two and Three', columnSpan: 2 },
            { name: 'Four', columnSpan: 4 }
          ]}
          footerColor={'blue'}
        ></TableFooter>
      </table>
    )
    expect(screen.getByRole('rowgroup')).toBeVisible()
  })

  test('Check Table Footer is Disabled', () => {
    render(
      <table>
        <TableFooter
          disabled
          footer={[
            { name: 'One', columnSpan: 1 },
            { name: 'Two and Three', columnSpan: 2 },
            { name: 'Four', columnSpan: 4 }
          ]}
          footerColor={'blue'}
        ></TableFooter>
      </table>
    )
    expect(screen.getByRole('rowgroup')).toHaveStyle('background-color : #cecdcd')
  })

  test('Check Table Footer shows error', () => {
    render(
      <table>
        <TableFooter
          error
          footer={[
            { name: 'One', columnSpan: 1 },
            { name: 'Two and Three', columnSpan: 2 },
            { name: 'Four', columnSpan: 4 }
          ]}
          footerColor={'blue'}
        ></TableFooter>
      </table>
    )
    expect(screen.getByRole('rowgroup')).toHaveStyle('background-color : #ff5b4f')
  })
})
