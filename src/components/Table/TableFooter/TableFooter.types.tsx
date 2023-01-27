export interface TableFooterProps {
  footer?: {
    name: string
    columnSpan: number
  }[]
  disabled?: boolean
  error?: boolean
  tableFooterColor?: string
}
