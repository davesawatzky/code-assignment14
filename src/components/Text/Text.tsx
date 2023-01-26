import styled from 'styled-components'
import { TextProps } from './Text.types'

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
  font-weight: ${(props) => (props.error ? '700' : '400')};
`

function Text({ text, children, id, error, disabled, ...props }: TextProps) {
  return (
    <StyledText id={id} disabled={disabled} error={error} {...props}>
      {text ? text : children}
    </StyledText>
  )
}

export default Text
