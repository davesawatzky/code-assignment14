import styled from 'styled-components'
import { TableFooterProps } from './TableFooter.types'

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  /* border: 1px solid black; */
  background-color: ${(props) =>
    props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : props.tableFooterColor};
`

const StyledTableFooterRow = styled.tr<TableFooterProps>``

const StyledTableFooterCell = styled.th<TableFooterProps>`
  border: 0px solid;
  :first-child {
    border-bottom-left-radius: 15px;
  }
  :last-child {
    border-bottom-right-radius: 15px;
  }
  padding: 7px 12px;
`

function TableFooter({ footer, disabled, error, tableFooterColor }: TableFooterProps) {
  return (
    <StyledTableFooter
      role={'rowgroup'}
      disabled={disabled}
      error={error}
      tableFooterColor={tableFooterColor}
    >
      <StyledTableFooterRow>
        {footer?.map((foot) => (
          <StyledTableFooterCell key={foot.name} colSpan={foot.columnSpan}>
            {foot.name}
          </StyledTableFooterCell>
        ))}
      </StyledTableFooterRow>
    </StyledTableFooter>
  )
}

export default TableFooter
