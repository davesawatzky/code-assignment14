import React, { FC } from 'react'
import styled from 'styled-components'
import { ButtonProps } from './Button.types'

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  padding: ${(props) =>
    props.size === 'small'
      ? '7px 25px 8px'
      : props.size === 'medium'
      ? '9px 30px 11px'
      : '14px 30px 16px'};
  color: ${(props) => (props.primary ? '#ffffff' : '#ffffff')};
  background-color: ${(props) =>
    props.primary ? '#023fc4' : props.disabled ? '#cecdcd' : '#156106'};
  :hover {
    background-color: ${(props) => (props.primary ? '#4982fc' : '#969696')};
  }
  :active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === 'small'
        ? '5px 23px 6px'
        : props.size === 'medium'
        ? '7px 28px 9px'
        : '12px 28px 14px'};
  }
`

const Button: FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  children,
  buttonText,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type='button'
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {buttonText ? buttonText : children}
    </StyledButton>
  )
}

export default Button
