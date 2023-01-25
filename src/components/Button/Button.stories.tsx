import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.types'

export default {
  title: 'Sawatzky/Button',
  component: Button,
  argTypes: {}
} as Meta<typeof Button>

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  disabled: false,
  buttonText: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
  disabled: false,
  buttonText: 'Secondary'
}

export const Disabled = Template.bind({})
Disabled.args = {
  primary: false,
  disabled: true,
  buttonText: 'Disabled'
}

export const Small = Template.bind({})
Small.args = {
  primary: true,
  disabled: false,
  size: 'small',
  buttonText: 'Small'
}

export const Medium = Template.bind({})
Medium.args = {
  primary: true,
  disabled: false,
  size: 'medium',
  buttonText: 'Medium'
}

export const Large = Template.bind({})
Large.args = {
  primary: true,
  disabled: false,
  size: 'large',
  buttonText: 'Large'
}
