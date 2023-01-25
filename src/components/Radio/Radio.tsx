import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { RadioProps } from './Radio.types'

const StyledFieldSet = styled.fieldset<RadioProps>`
  border: ${(props) =>
    props.disabled ? '1px solid #a5a5a5' : props.error ? '1px solid #a9150b' : '1px solid #999'};
  border-radius: 10px;
`
const StyledLegend = styled.legend<RadioProps>`
  font-size: 1rem;
  color: ${(props) => (props.disabled ? '#a5a5a5' : props.error ? '#a9150b' : '#080808')};
`
const StyledLabel = styled.label<RadioProps>`
  font-size: 1rem;
  color: ${(props) => (props.disabled ? '#a5a5a5' : props.error ? '#a9150b' : '#080808')};
  padding: 5px;
`
const StyledOption = styled.input<RadioProps>`
  appearance: none;
  outline: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: ${(props) =>
    props.disabled ? '2px solid #a5a5a5' : props.error ? '2px solid #a9150b' : '2px solid #999'};
  transition: 0.2s all linear;
  margin-right: 5px;
  position: relative;
  top: 4px;
  :checked {
    border: ${(props) =>
      props.disabled ? '6px solid #a5a5a5' : props.error ? '6px solid #a9150b' : '6px solid blue'};
  }
`
const StyledErrorMessage = styled.p<RadioProps>`
  font-size: 1rem;
  color: #a9150b;
  padding-left: 4px;
  margin-top: 5px;
`

const Radio: FC<RadioProps> = ({
  id,
  title,
  radioGroupName,
  error,
  errorMessage,
  disabled,
  options,
  ...props
}) => {
  return (
    <Fragment>
      <StyledFieldSet id={id} disabled={disabled} error={error}>
        <StyledLegend error={error} disabled={disabled}>
          {title}
        </StyledLegend>
        {options?.map((opt) => (
          <div key={opt}>
            <StyledOption
              id={opt}
              type='radio'
              value={opt}
              name={radioGroupName}
              error={error}
              disabled={disabled}
              {...props}
            ></StyledOption>
            <StyledLabel htmlFor={opt} error={error} disabled={disabled}>
              {opt}
            </StyledLabel>
          </div>
        ))}
      </StyledFieldSet>
      <StyledErrorMessage error={error}>{errorMessage}</StyledErrorMessage>
    </Fragment>
  )
}

export default Radio
