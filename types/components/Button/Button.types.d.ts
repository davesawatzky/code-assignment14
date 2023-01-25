import { MouseEventHandler } from 'react'
export interface ButtonProps {
  buttonText?: string
  children?: string
  primary?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick?: MouseEventHandler<HTMLButtonElement>
}
