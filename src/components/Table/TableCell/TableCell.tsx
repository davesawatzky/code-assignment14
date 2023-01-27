import styled from 'styled-components'
import { TableCellProps } from './TableCell.types'

const StyledTableCell = styled.td<TableCellProps>`
  padding: 7px 12px;
  background-color: ${(props) => (props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : '')};
`

function TableCell({ children, disabled, error }: TableCellProps) {
  return (
    <StyledTableCell error={error} disabled={disabled}>
      {children}
    </StyledTableCell>
  )
}

export default TableCell
