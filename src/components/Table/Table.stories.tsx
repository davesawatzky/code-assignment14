import React from 'react'
import { Story, Meta } from '@storybook/react'
import Table from './Table'
import { TableProps } from './Table.types'

export default {
  title: 'Sawatzky/Table',
  component: Table,
  argTypes: {
    tableData: {
      defaultValue: [
        ['one', 2, 'three', 4],
        [5, 'Six', 7, 'Eight']
      ]
    },
    tableHeaderData: {
      defaultValue: [
        { name: 'Column 1', columnSpan: 1 },
        { name: 'Column 2 & 3', columnSpan: 2 },
        { name: 'Column 4', columnSpan: 1 }
      ]
    },
    tableFooterData: {
      defaultValue: [
        { name: 'Footer 1', columnSpan: 1 },
        { name: 'Footer 2 & 3', columnSpan: 2 },
        { name: 'Footer 4', columnSpan: 1 }
      ]
    }
  }
} as Meta<typeof Table>

const Template: Story<TableProps> = (args) => <Table {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  headerColor: '#6faeff',
  footerColor: '#30e1ee'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  headerColor: '#6faeff',
  footerColor: '#30e1ee'
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  headerColor: '#6faeff',
  footerColor: '#30e1ee'
}
