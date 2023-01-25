import { MouseEventHandler, ReactNode } from 'react'

export interface HeroProps {
  id?: string
  error?: boolean
  disabled?: boolean
  primary?: boolean
  image?: string
  video?: string
  headingText?: string
  subText?: string
  buttonText?: string
  heroHeight?: (number & 'em') | (number & 'px') | (number & '%') | 'vh'
  imageSize?: 'cover' | 'auto' | 'contain' | (number & 'em') | (number & 'px') | (number & '%')
  imagePosition?: 'left' | 'center' | 'right'
  textBlockPosition?: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}
