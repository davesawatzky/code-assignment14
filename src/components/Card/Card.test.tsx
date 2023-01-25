import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Card from './Card'

describe('Running Test for Card', () => {
  test('Check that the Card is visible', () => {
    render(
      <Card
        cardHeadingText='Card Heading'
        cardSubText='Card Sub Heading'
        cardText='Card Text'
        data-testid='card'
      />
    )
    expect(screen.getByTestId('card')).toBeVisible()
  })

  test('Check that the Card Disabled', () => {
    render(
      <Card
        cardHeadingText='Card Heading'
        cardSubText='Card Sub Heading'
        cardText='Card Text'
        data-testid='card'
        disabled
      />
    )
    expect(screen.getByTestId('card')).toHaveStyle('background-color: #e4e3ea')
  })
})
