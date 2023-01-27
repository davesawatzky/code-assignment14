import styled from 'styled-components'
import { TableHeaderProps } from './TableHeader.types'

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) =>
    props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : props.tableHeaderColor};
`

const StyledTableHeaderRow = styled.tr<TableHeaderProps>``

const StyledTableHeaderCell = styled.th<TableHeaderProps>`
  border: 0px solid;
  :first-child {
    border-top-left-radius: 15px;
  }
  :last-child {
    border-top-right-radius: 15px;
  }
  padding: 7px 12px;
`

function TableHeader({ headings, disabled, error, tableHeaderColor }: TableHeaderProps) {
  return (
    <StyledTableHeader
      role={'rowgroup'}
      disabled={disabled}
      error={error}
      tableHeaderColor={tableHeaderColor}
    >
      <StyledTableHeaderRow>
        {headings?.map((heading) => (
          <StyledTableHeaderCell key={heading.name} colSpan={heading.columnSpan}>
            {heading.name}
          </StyledTableHeaderCell>
        ))}
      </StyledTableHeaderRow>
    </StyledTableHeader>
  )
}

export default TableHeader
