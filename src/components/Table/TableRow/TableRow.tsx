import styled from 'styled-components'
import { TableRowProps } from './TableRow.types'

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : '')};
  border: 0px solid;
  :last-child {
    td:first-child {
      border-bottom-left-radius: 15px;
    }
    td:last-child {
      border-bottom-right-radius: 15px;
    }
  }
  padding: 7px 12px;
`

function TableRow({ children, error, disabled }: TableRowProps) {
  return (
    <StyledTableRow error={error} disabled={disabled}>
      {children}
    </StyledTableRow>
  )
}

export default TableRow
