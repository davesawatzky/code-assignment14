export interface NavBarProps {
  id?: string
  error?: boolean
  disabled?: boolean
  items?: MenuItems[]
}

interface MenuItems {
  name: string
  link: string
}
