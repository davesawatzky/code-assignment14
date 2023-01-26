import styled from 'styled-components'
import { LabelProps } from './Label.types'

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
  font-weight: ${(props) => (props.error ? '700' : '400')};
`

function Label({ id, text, error, disabled, ...props }: LabelProps) {
  return (
    <StyledLabel id={id} disabled={disabled} error={error} {...props}>
      {text}
    </StyledLabel>
  )
}

export default Label
