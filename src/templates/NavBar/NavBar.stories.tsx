import React from 'react'
import { Story, Meta } from '@storybook/react'
import NavBar from './NavBar'
import { NavBarProps } from './NavBar.types'

export default {
  title: 'Sawatzky/NavBar',
  component: NavBar,
  argTypes: {}
} as Meta<typeof NavBar>

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  error: false,
  disabled: false,
  items: [
    { name: 'About', link: '#menu1' },
    { name: 'Work', link: '#menu2' },
    { name: 'Skills', link: '#menu3' },
    { name: 'Resources', link: '#menu4' },
    { name: 'Tools', link: '#menu5' }
  ]
}
