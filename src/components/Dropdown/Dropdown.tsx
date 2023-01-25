import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import { DropdownProps } from './Dropdown.types'

const StyledDropdown = styled.select<DropdownProps>`
  height: 2.5rem;
  font-size: 1rem;
  width: 300px;
  padding: 0px 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : '')};
  border-radius: 15px;
  border: solid 1px
    ${(props) =>
      props.disabled ? '#e4e3ea' : props.error ? '#d30e00' : props.success ? '#06af00' : '#999999'};
  background-color: ${(props) => (props.disabled ? '#e4e4e4' : '#fff')};
  :focus {
    border: solid 2px #023fc4;
  }
`

const StyledLabel = styled.div<DropdownProps>`
  font-size: 1rem;
  color: ${(props) => (props.disabled ? '#e4e3ea' : '#080808')};
  padding-bottom: 6px;
`

const StyledMessage = styled.div<DropdownProps>`
  font-size: 1rem;
  color: #a9150b;
  padding-top: 4px;
`

const StyledText = styled.p<DropdownProps>`
  margin: 0px;
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
`

const StyledOptions = styled.option<DropdownProps>``

const Dropdown: FC<DropdownProps> = ({
  id,
  label,
  error,
  name,
  message,
  disabled,
  success,
  onChange,
  placeholder,
  options,
  ...props
}) => {
  return (
    <Fragment>
      <StyledLabel>
        <StyledText disabled={disabled} error={error}>
          {label}
        </StyledText>
      </StyledLabel>
      <StyledDropdown
        id={id}
        name={name}
        error={error}
        onChange={onChange}
        disabled={disabled}
        success={success}
        placeholder={placeholder}
        {...props}
      >
        {options?.map((opt) => (
          <StyledOptions key={opt} value={opt} role={'option'}>
            {opt}
          </StyledOptions>
        ))}
      </StyledDropdown>
      <StyledMessage>
        <StyledText error={error}>{message}</StyledText>
      </StyledMessage>
    </Fragment>
  )
}

export default Dropdown
