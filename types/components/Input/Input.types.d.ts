import { ChangeEventHandler } from 'react'
export interface InputProps {
  id?: string
  name?: string
  label?: string
  error?: boolean
  message?: string
  success?: boolean
  disabled?: boolean
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
