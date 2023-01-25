import React from 'react'
import { Story, Meta } from '@storybook/react'
import Card from './Card'
import { CardProps } from './Card.types'

export default {
  title: 'Sawatzky/Card',
  component: Card,
  argTypes: {}
} as Meta<typeof Card>

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  cardHeadingText: 'Type in a heading',
  cardSubText: 'Type in a sub heading',
  cardText: 'Type in some text'
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  cardHeadingText: 'Type in a heading',
  cardSubText: 'Type in a sub heading',
  cardText: 'Type in some text'
}
export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  cardHeadingText: 'Type in a heading',
  cardSubText: 'Type in a sub heading',
  cardText: 'Type in some text'
}
