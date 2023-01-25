import React from 'react'
import { Story, Meta } from '@storybook/react'
import TableFooter from './TableFooter'
import { TableFooterProps } from './TableFooter.types'

export default {
  title: 'Sawatzky/Table/TableFooter',
  component: TableFooter,
  argTypes: {}
} as Meta<typeof TableFooter>

const Template: Story<TableFooterProps> = (args) => <TableFooter {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  footer: [
    { name: 'Footer 1', columnSpan: 1 },
    { name: 'Footer 2 & 3', columnSpan: 2 },
    { name: 'Footer 4', columnSpan: 1 }
  ],
  footerColor: '#30e1ee'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  footer: [
    { name: 'Footer 1', columnSpan: 1 },
    { name: 'Footer 2 & 3', columnSpan: 2 },
    { name: 'Footer 4', columnSpan: 1 }
  ],
  footerColor: '#ff5b4f'
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  footer: [
    { name: 'Footer 1', columnSpan: 1 },
    { name: 'Footer 2 & 3', columnSpan: 2 },
    { name: 'Footer 4', columnSpan: 1 }
  ],
  footerColor: '#cecdcd'
}
