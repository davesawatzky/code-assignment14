import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Radio from './Radio'

describe('Running Test for the Radio component', () => {
  test('Check that the radio component is visible', () => {
    render(
      <Radio
        options={['North', 'South', 'East', 'West']}
        radioGroupName={'Directions'}
        title={'Directions'}
      />
    )
    expect(screen.getByRole('group', { name: 'Directions' })).toBeVisible()
    screen.getAllByRole('radio').map((el) => expect(el).toBeVisible())
  })

  test('Check that the radio component can be disabled', () => {
    render(
      <Radio
        disabled
        options={['North', 'South', 'East', 'West']}
        radioGroupName={'Directions'}
        title={'Directions'}
      />
    )
    expect(screen.getByRole('group', { name: 'Directions' })).toBeDisabled()
    expect(screen.getByRole('group', { name: 'Directions' })).toHaveStyle(
      'border: 1px solid #a5a5a5'
    )
    screen.getAllByRole('radio', { checked: false }).map((el) => {
      expect(el).toHaveStyle('border: 2px solid #a5a5a5')
    })
  })
})

test('check for the error state in the radio component', () => {
  render(
    <Radio
      error
      options={['North', 'South', 'East', 'West']}
      radioGroupName={'Directions'}
      title={'Directions'}
    />
  )
  expect(screen.getByRole('group', { name: 'Directions' })).toHaveStyle(
    'border: 1px solid  #a9150b'
  )
  screen.getAllByRole('radio', { checked: false }).map((el) => {
    expect(el).toHaveStyle({
      border: '2px solid #a9150b'
    })
  })
})
