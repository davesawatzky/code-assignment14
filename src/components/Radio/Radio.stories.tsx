import React from 'react'
import { Story, Meta } from '@storybook/react'
import Radio from './Radio'
import { RadioProps } from './Radio.types'

export default {
  title: 'Sawatzky/Radio',
  component: Radio,
  argTypes: {
    radioGroupName: {
      defaultValue: 'radioGroup'
    },
    options: {
      defaultValue: ['Huey', 'Dewy', 'Lewy']
    },
    title: {
      defaultValue: 'The Ducks'
    }
  }
} as Meta<typeof Radio>

const Template: Story<RadioProps> = (args) => <Radio {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  title: 'The Ducks',
  options: ['Huey', 'Dewy', 'Lewy'],
  radioGroupName: 'radioGroup'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  errorMessage: 'Error in Radio Group',
  title: 'The Ducks',
  options: ['Huey', 'Dewy', 'Lewy'],
  radioGroupName: 'radioGroup'
}

export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  label: 'Disabled',
  title: 'The Ducks',
  options: ['Huey', 'Dewy', 'Lewy'],
  radioGroupName: 'radioGroup'
}
