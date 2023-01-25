import React, { FC } from 'react'
import styled from 'styled-components'
import { CardProps } from './Card.types'

const StyledCard = styled.div<CardProps>`
  border: 1px solid #080808;
  border-radius: 10px;
  padding: 20px;
  margin: 0px auto;
  background-color: ${(props) =>
    props.disabled ? '#e4e3ea' : props.error ? '#ff5b4f' : '#ffffff'};
  font-weight: ${(props) => (props.error ? '700' : '400')};
  justify-items: center;
  align-content: center;
`

const StyledH1 = styled.h1<CardProps>`
  text-align: center;
`

const StyledH2 = styled.h2<CardProps>`
  text-align: center;
`
const StyledText = styled.p<CardProps>`
  text-align: center;
  font-weight: ${(props) => (props.error ? '700' : '400')};
`

const Card: FC<CardProps> = ({
  cardText,
  cardHeadingText,
  cardSubText,
  id,
  error,
  disabled,
  ...props
}) => {
  return (
    <StyledCard id={id} disabled={disabled} error={error} {...props}>
      <StyledH1 error={error} disabled={disabled}>
        {cardHeadingText}
      </StyledH1>
      <StyledH2 error={error} disabled={disabled}>
        {cardSubText}
      </StyledH2>
      <StyledText error={error} disabled={disabled}>
        {cardText}
      </StyledText>
    </StyledCard>
  )
}

export default Card
