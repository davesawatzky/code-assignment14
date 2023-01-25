import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Running Test for Hero', () => {
  test('Check that Hero is visible', () => {
    render(
      <Hero
        data-testid='heroelement'
        image='../../assets/field.jpg'
        imageSize='contain'
        imagePosition='right'
        textBlockPosition='right'
        headingText='Hero Title'
        subText='Hero Sub Title'
        buttonText='Click Me'
      />
    )
    expect(screen.getByTestId('heroelement')).toBeVisible()
  })

  test('Hero is disabled', () => {
    render(
      <Hero
        data-testid='heroelement'
        image='../../assets/field.jpg'
        imageSize='contain'
        imagePosition='right'
        textBlockPosition='left'
        headingText='Hero Title'
        subText='Hero Sub Title'
        buttonText='Click Me'
        disabled
      />
    )
    expect(screen.getByTestId('heroelement')).toHaveStyle('background-color: #e4e4e475')
  })
})
