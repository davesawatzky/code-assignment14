import styled from 'styled-components'
import { TableProps } from './Table.types'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

const StyledTable = styled.table<TableProps>`
  border: 1px solid #c1c1c1;
  border-radius: 15px;
  background-color: #424242;
`

const StyledTableBody = styled.tbody<TableProps>`
  background-color: ${(props) =>
    props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : props.tableColor};
`
function TableBody({ error, disabled, tableColor, children }: TableProps) {
  return (
    <StyledTableBody error={error} disabled={disabled} tableColor={tableColor}>
      {children}
    </StyledTableBody>
  )
}

function Table({
  tableHeaderColor,
  tableFooterColor,
  tableHeaderData,
  tableFooterData,
  tableColor,
  tableData,
  error,
  disabled
}: TableProps) {
  return (
    <StyledTable error={error} disabled={disabled}>
      <TableHeader headings={tableHeaderData} tableHeaderColor={tableHeaderColor}></TableHeader>
      <TableBody error={error} disabled={disabled} tableColor={tableColor}>
        {tableData?.map((rowData, i) => (
          <TableRow key={i} disabled={disabled} error={error}>
            {rowData.map((cellData, j) => (
              <TableCell key={j} disabled={disabled} error={error}>
                {cellData}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter footer={tableFooterData} tableFooterColor={tableFooterColor}></TableFooter>
    </StyledTable>
  )
}

export default Table
