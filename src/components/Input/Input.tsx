import { Fragment } from 'react'
import styled from 'styled-components'
import { InputProps } from './Input.types'

const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: 1px solid
    ${(props) =>
      props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : props.success ? '#067d68' : '#353637'};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`

const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
  padding-bottom: 6px;
`

const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: #a9150b;
  padding-top: 4px;
`

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
`

function Input({
  id,
  name,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}: InputProps) {
  return (
    <Fragment>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledInput
        id={id}
        name={name}
        type='text'
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      ></StyledInput>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </Fragment>
  )
}

export default Input
