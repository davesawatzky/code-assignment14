import React, { FC } from 'react'
import styled from 'styled-components'
import { ImageProps } from './Image.types'

const StyledImage = styled.img<ImageProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
  filter: ${(props) => (props.disabled ? 'grayscale(100%)' : '')};
`

const Image: FC<ImageProps> = ({ source, id, error, disabled, width, height, ...props }) => {
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
