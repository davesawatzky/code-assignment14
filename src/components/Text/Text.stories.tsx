import React from 'react'
import { Story, Meta } from '@storybook/react'
import Text from './Text'
import { TextProps } from './Text.types'

export default {
  title: 'Sawatzky/Text',
  component: Text,
  argTypes: {
    text: {
      defaultValue: 'Type in some text'
    }
  }
} as Meta<typeof Text>

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  text: 'Type in some text'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  text: 'Type in some text'
}
export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  text: 'Type in some text'
}
