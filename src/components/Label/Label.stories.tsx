import React from 'react'
import { Story, Meta } from '@storybook/react'
import Label from './Label'
import { LabelProps } from './Label.types'

export default {
  title: 'Sawatzky/Label',
  component: Label,
  argTypes: {}
} as Meta<typeof Label>

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  text: 'Primary Label'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  text: 'Error Label'
}
export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  text: 'Disabled Label'
}
