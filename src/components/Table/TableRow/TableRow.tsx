import styled from 'styled-components'
import { TableRowProps } from './TableRow.types'

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : '#fff')};
`

function TableRow({ children, error, disabled }: TableRowProps) {
  return (
    <StyledTableRow error={error} disabled={disabled}>
      {children}
    </StyledTableRow>
  )
}

export default TableRow
