import styled from 'styled-components'
import { ImageProps } from './Image.types'

const StyledImage = styled.img<ImageProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : '')};
`

function Image({ source, id, error, disabled, width, height, ...props }: ImageProps) {
  return (
    <StyledImage
      src={source}
      id={id}
      width={width}
      height={height}
      disabled={disabled}
      error={error}
      {...props}
    ></StyledImage>
  )
}

export default Image
