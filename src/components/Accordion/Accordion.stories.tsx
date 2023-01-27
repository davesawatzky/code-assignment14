import React from 'react'
import { Story, Meta } from '@storybook/react'
import Accordion from './Accordion'
import { AccordionProps } from './Accordion.types'

export default {
  title: 'Sawatzky/Accordion',
  component: Accordion,
  argTypes: {}
} as Meta<typeof Accordion>

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />

export const Primary = Template.bind({})
Primary.args = {
  accordionData: [
    { heading: 'Skill 1', content: 'Python' },
    { heading: 'Skill 2', content: 'JavaScript' }
  ]
}
