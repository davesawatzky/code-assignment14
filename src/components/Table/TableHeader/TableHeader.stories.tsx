import React from 'react'
import { Story, Meta } from '@storybook/react'
import TableHeader from './TableHeader'
import { TableHeaderProps } from './TableHeader.types'

export default {
  title: 'Sawatzky/Table/TableHeader',
  component: TableHeader,
  argTypes: {}
} as Meta<typeof TableHeader>

const Template: Story<TableHeaderProps> = (args) => <TableHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  headings: [
    { name: 'Column 1', columnSpan: 1 },
    { name: 'Column 2 & 3', columnSpan: 2 },
    { name: 'Column 4', columnSpan: 1 }
  ],
  headerColor: '#6faeff'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  headings: [
    { name: 'Column 1', columnSpan: 1 },
    { name: 'Column 2 & 3', columnSpan: 2 },
    { name: 'Column 4', columnSpan: 1 }
  ],
  headerColor: '#ff5b4f'
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  headings: [
    { name: 'Column 1', columnSpan: 1 },
    { name: 'Column 2 & 3', columnSpan: 2 },
    { name: 'Column 4', columnSpan: 1 }
  ],
  headerColor: '#cecdcd'
}
