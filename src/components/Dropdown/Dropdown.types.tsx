import { ChangeEventHandler } from 'react'

export interface DropdownProps {
  id?: string
  label?: string
  name?: string
  error?: boolean
  message?: string
  success?: boolean
  disabled?: boolean
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLSelectElement>
  options?: string[]
}
