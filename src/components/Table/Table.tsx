import React, { FC } from 'react'
import styled from 'styled-components'
import { TableProps } from './Table.types'
import TableRow from './TableRow'
import TableCell from './TableCell'
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

const StyledTable = styled.table<TableProps>`
  border-collapse: collapse;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  background-color: ${(props) => props.tableColor};
`

const StyledTableBody = styled.tbody<TableProps>`
  border: 1px solid black;
  background-color: ${(props) => (props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : '#fff')};
`
const TableBody: FC<TableProps> = ({ error, disabled, tableColor, children }) => {
  return (
    <StyledTableBody error={error} disabled={disabled} tableColor={tableColor}>
      {children}
    </StyledTableBody>
  )
}

const Table: FC<TableProps> = ({
  headerColor,
  footerColor,
  tableHeaderData,
  tableFooterData,
  tableData,
  error,
  disabled
}) => {
  return (
    <StyledTable error={error} disabled={disabled}>
      <TableHeader headings={tableHeaderData} headerColor={headerColor}></TableHeader>
      <TableBody error={error} disabled={disabled}>
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
      <TableFooter footer={tableFooterData} footerColor={footerColor}></TableFooter>
    </StyledTable>
  )
}

export default Table
