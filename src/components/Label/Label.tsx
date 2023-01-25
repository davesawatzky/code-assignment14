import React, { FC } from 'react'
import styled from 'styled-components'
import { LabelProps } from './Label.types'

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
  font-weight: ${(props) => (props.error ? '700' : '400')};
`

const Label: FC<LabelProps> = ({ id, text, error, disabled, ...props }) => {
  return (
    <StyledLabel id={id} disabled={disabled} error={error} {...props}>
      {text}
    </StyledLabel>
  )
}

export default Label
