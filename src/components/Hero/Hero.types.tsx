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
  heroHeight?: string
  // heroHeight?: (number & 'em') | (number & 'px') | (number & '%') | (number & 'vh')
  imageSize?: 'cover' | 'auto' | 'contain' | string
  imagePosition?: 'left' | 'center' | 'right'
  textBlockPosition?: 'left' | 'right'
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
}
