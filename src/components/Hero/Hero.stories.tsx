import React from 'react'
import { Story, Meta } from '@storybook/react'
import Hero from './Hero'
import { HeroProps } from './Hero.types'

export default {
  title: 'Sawatzky/Hero',
  component: Hero,
  argTypes: {}
} as Meta<typeof Hero>

const Template: Story<HeroProps> = (args) => <Hero {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  image: 'src/assets/field.jpg',
  imageSize: 'contain',
  imagePosition: 'right',
  heroHeight: '300px',
  textBlockPosition: 'left',
  headingText: 'Hero Title',
  subText: 'Hero Subtitle',
  buttonText: 'Click Here',
  primary: true
}

export const Error = Template.bind({})
Error.args = {
  error: true,
  disabled: false,
  image: 'src/assets/field.jpg',
  imageSize: 'cover',
  imagePosition: 'right',
  heroHeight: '300px',
  textBlockPosition: 'left',
  headingText: 'Hero Title',
  subText: 'Hero Subtitle',
  buttonText: 'Click Here',
  primary: false
}
export const Disabled = Template.bind({})
Disabled.args = {
  error: false,
  disabled: true,
  image: 'src/assets/field.jpg',
  imageSize: 'cover',
  imagePosition: 'right',
  heroHeight: '300px',
  textBlockPosition: 'left',
  headingText: 'Hero Title',
  subText: 'Hero Subtitle',
  buttonText: 'Click Here',
  primary: false
}
