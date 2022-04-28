import styled from 'styled-components'

interface TokenType {
  size: string
  black: boolean
  blue: boolean
  grey: boolean
  green: boolean
  red: boolean
  margin: string
  width: string
}

export const TokenNumber = styled.div<Partial<TokenType>>`
  font-weight: 500;
  font-size: ${(props) => props.size || '18px'};
  color: ${(props) =>
    props.blue
      ? '#6347F5'
      : props.grey
      ? '#93949D'
      : props.green
      ? '#30BF8C'
      : props.red
      ? '#FF647C'
      : props.color};
`

export const TokenTitle = styled.div<Partial<TokenType>>`
  font-size: ${(props) => props.size || '21px'};
  color: ${(props) =>
    props.blue
      ? '#6347F5'
      : props.grey
      ? '#93949D'
      : props.green
      ? '#30BF8C'
      : props.red
      ? '#FF647C'
      : 'black'};
`

export const TokenItemComponent = styled.div<Partial<TokenType>>`
  margin-top: ${(props) => props.margin || '0px'};
`
export const TokenLogo = styled.img`
  width: 40px;
  height: 40px;
`
export const GridTable = styled.div`
  display: grid;
  grid-template-columns: 35px 48px repeat(5, 1fr) 25px;
  grid-gap: 12px;
  align-items: center;
`
export const TokenWrapper = styled.div`
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`

export const TokenPercentagePoint = styled.div`
  width: 3px;
  height: 3px;
  background-color: #93949D;
  border-radius: 50%;
`