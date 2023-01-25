import React from 'react'
import { Story, Meta } from '@storybook/react'
import TableCell from './TableCell'
import { TableCellProps } from './TableCell.types'

export default {
  title: 'Sawatzky/Table/TableCell',
  component: TableCell,
  argTypes: {}
} as Meta<typeof TableCell>

const Template: Story<TableCellProps> = (args) => <TableCell {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  children: 'Sample Cell'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  children: 'Sample Cell'
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  children: 'Sample Cell'
}
