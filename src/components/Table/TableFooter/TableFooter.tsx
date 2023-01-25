import React, { FC } from 'react'
import styled from 'styled-components'
import { TableFooterProps } from './TableFooter.types'

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  border: 1px solid black;
  background-color: ${(props) =>
    props.disabled ? '#cecdcd' : props.error ? '#ff5b4f' : props.footerColor};
`

const StyledTableFooterRow = styled.tr<TableFooterProps>``

const StyledTableFooterCell = styled.th<TableFooterProps>`
  border: 1px solid black;
`

const TableFooter: FC<TableFooterProps> = ({ footer, disabled, error, footerColor }) => {
  return (
    <StyledTableFooter
      role={'rowgroup'}
      disabled={disabled}
      error={error}
      footerColor={footerColor}
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
