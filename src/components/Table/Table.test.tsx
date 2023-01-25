import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Running Test for the Table', () => {
  test('Check that Table is visible', () => {
    render(
      <Table
        tableData={[
          ['one', 2, 'three', 4],
          [5, 'Six', 7, 'Eight']
        ]}
        tableHeaderData={[
          { name: 'One', columnSpan: 1 },
          { name: 'Two and Three', columnSpan: 2 },
          { name: 'Four', columnSpan: 4 }
        ]}
        tableFooterData={[
          { name: 'One', columnSpan: 1 },
          { name: 'Two and Three', columnSpan: 2 },
          { name: 'Four', columnSpan: 4 }
        ]}
        headerColor={'#6faeff'}
        footerColor={'#30e1ee'}
      ></Table>
    )
    expect(screen.getByRole('table')).toBeVisible()
  })

  test('Check that Table is Disabled', () => {
    render(
      <Table
        disabled
        tableData={[
          ['one', 2, 'three', 4],
          [5, 'Six', 7, 'Eight']
        ]}
        tableHeaderData={[
          { name: 'One', columnSpan: 1 },
          { name: 'Two and Three', columnSpan: 2 },
          { name: 'Four', columnSpan: 4 }
        ]}
        tableFooterData={[
          { name: 'One', columnSpan: 1 },
          { name: 'Two and Three', columnSpan: 2 },
          { name: 'Four', columnSpan: 4 }
        ]}
        headerColor={'#6faeff'}
        footerColor={'#30e1ee'}
      ></Table>
    )
    expect(screen.getByRole('cell', { name: 'three' })).toHaveStyle('background-color : #cecdcd')
  })

  test('Check that Table shows error', () => {
    render(
      <Table
        error
        tableData={[
          ['one', 2, 'three', 4],
          [5, 'Six', 7, 'Eight']
        ]}
        tableHeaderData={[
          { name: 'One', columnSpan: 1 },
          { name: 'Two and Three', columnSpan: 2 },
          { name: 'Four', columnSpan: 4 }
        ]}
        tableFooterData={[
          { name: 'One', columnSpan: 1 },
          { name: 'Two and Three', columnSpan: 2 },
          { name: 'Four', columnSpan: 4 }
        ]}
        headerColor={'#6faeff'}
        footerColor={'#30e1ee'}
      ></Table>
    )
    expect(screen.getByRole('cell', { name: 'three' })).toHaveStyle('background-color : #ff5b4f')
  })
})
