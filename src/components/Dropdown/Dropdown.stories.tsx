import React from 'react'
import { Story, Meta } from '@storybook/react'
import Dropdown from './Dropdown'
import { DropdownProps } from './Dropdown.types'

export default {
  title: 'Sawatzky/Dropdown',
  component: Dropdown,
  argTypes: {
    label: {
      defaultValue: 'Primary'
    },
    options: {
      defaultValue: ['Up', 'Down']
    }
  }
} as Meta<typeof Dropdown>

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  label: 'Primary',
  options: ['Up', 'Down']
}

export const Success = Template.bind({})
Success.args = {
  error: false,
  success: true,
  disabled: false,
  label: 'Success',
  options: ['Up', 'Down']
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  message: 'Error',
  options: ['Up', 'Down']
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: 'Disabled',
  options: ['Up', 'Down']
}
