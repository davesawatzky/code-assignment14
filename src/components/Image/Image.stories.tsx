import React from 'react'
import { Story, Meta } from '@storybook/react'
import Image from './Image'
import { ImageProps } from './Image.types'

export default {
  title: 'Sawatzky/Image',
  component: Image,
  argTypes: {}
} as Meta<typeof Image>

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  width: '300px',
  height: '',
  source: 'src/assets/field.jpg'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  width: '100%',
  height: '',
  source: 'src/assets/field.jpg'
}
export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  width: '100%',
  height: '',
  source: 'src/assets/field.jpg'
}
