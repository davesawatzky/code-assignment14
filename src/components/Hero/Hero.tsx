import React, { FC } from 'react'
import styled from 'styled-components'
import { HeroProps } from './Hero.types'
import Button from '../Button'
import blankImage from '../../assets/placeholder.jpg'

const StyledHero = styled.div<HeroProps>`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #c1c1c1;
  padding: 30px;
  justify-items: center;
  align-content: center;
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
  /* background-image: url('src/assets/field.jpg'); */
  background-image: url(${(props) => (props.image ? props.image : blankImage)});
  background-color: ${(props) => (props.disabled ? '#e4e4e475' : '')};
  background-size: ${(props) => props.imageSize};
  background-repeat: no-repeat;
  background-position: ${(props) => props.imagePosition};
  width: 100%;
  height: ${(props) => props.heroHeight};
`

const StyledTextBlock = styled.div<HeroProps>`
  grid-column-start: ${(props) => (props.textBlockPosition == 'right' ? 2 : 1)};
  height: 100%;
  align-items: center;
  justify-items: center;
`
const StyledH1 = styled.h1<HeroProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
`

const StyledH2 = styled.h2<HeroProps>`
  color: ${(props) => (props.disabled ? '#e4e3ea' : props.error ? '#a9150b' : '#080808')};
`

const Hero: FC<HeroProps> = ({
  id,
  image,
  imageSize,
  imagePosition,
  textBlockPosition,
  headingText,
  subText,
  heroHeight,
  buttonText,
  primary,
  error,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <StyledHero
      image={image}
      imageSize={imageSize}
      imagePosition={imagePosition}
      heroHeight={heroHeight}
      id={id}
      disabled={disabled}
      error={error}
      {...props}
    >
      <StyledTextBlock textBlockPosition={textBlockPosition}>
        <StyledH1 error={error} disabled={disabled}>
          {headingText}
        </StyledH1>
        <StyledH2 error={error} disabled={disabled}>
          {subText}
        </StyledH2>
        <Button onClick={onClick} primary={primary} disabled={disabled}>
          {buttonText}
        </Button>
      </StyledTextBlock>
      <div></div>
    </StyledHero>
  )
}

export default Hero
