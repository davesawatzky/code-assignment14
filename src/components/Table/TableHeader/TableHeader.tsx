import styled from 'styled-components'
import { TableHeaderProps } from './TableHeader.types'

const StyledTableHeader = styled.thead<TableHeaderProps>`
  border: 1px solid black;
  background-color: ${(props) =>
    props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : props.headerColor};
`

const StyledTableHeaderRow = styled.tr<TableHeaderProps>``

const StyledTableHeaderCell = styled.th<TableHeaderProps>`
  border: 1px solid black;
`

function TableHeader({ headings, disabled, error, headerColor }: TableHeaderProps) {
  return (
    <StyledTableHeader
      role={'rowgroup'}
      disabled={disabled}
      error={error}
      headerColor={headerColor}
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
