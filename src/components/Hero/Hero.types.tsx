import { ReactNode } from 'react'

export interface HeroProps {
  id?: string
  error?: boolean
  disabled?: boolean
  image?: string
  video?: string
  headingText?: string
  subText?: string
  heroHeight?: string
  // heroHeight?: (number & 'em') | (number & 'px') | (number & '%') | (number & 'vh')
  imageSize?: 'cover' | 'auto' | 'contain' | string
  imagePosition?: 'left' | 'center' | 'right'
  textBlockPosition?: 'left' | 'right'
  children?: ReactNode
}
