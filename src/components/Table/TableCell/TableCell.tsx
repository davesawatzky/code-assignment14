import styled from 'styled-components'
import { TableCellProps } from './TableCell.types'

const StyledTableCell = styled.td<TableCellProps>`
  border: 1px solid black;
  background-color: ${(props) => (props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : '#fff')};
`

function TableCell({ children, disabled, error }: TableCellProps) {
  return (
    <StyledTableCell error={error} disabled={disabled}>
      {children}
    </StyledTableCell>
  )
}

export default TableCell
