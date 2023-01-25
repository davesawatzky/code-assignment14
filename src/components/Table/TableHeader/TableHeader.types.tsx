export interface TableHeaderProps {
  headings?: {
    name: string
    columnSpan: number
  }[]
  disabled?: boolean
  error?: boolean
  headerColor?: string
}
