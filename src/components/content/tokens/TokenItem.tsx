import { FlexBox } from '../../sidebar/Sidebar.styles'
import user from '../../../images/users.svg'
import showMore from '../../../images/more.svg'
import hide from '../../../images/Shape (Stroke).svg'
import {
  GridTable,
  TokenItemComponent,
  TokenLogo,
  TokenNumber,
  TokenPercentagePoint,
  TokenTitle,
  TokenWrapper
} from "./Token.style";
import { SyntheticEvent, useState } from "react";
import {useNavigate } from "react-router-dom";

interface priceChangeType {
  hours24: number;
  days7: number;
  days365: number;
}

interface TokenItemType {
  id: number;
  logoURI: string;
  name: string;
  symbol: string;
  price: number;
  priceChange: priceChangeType;
  volume: number;
  volumeChangePercentage: number;
  tvl: number;
  tvlChangePercentage: number;
  users: number;
  description: string;

}


export const TokenItem = ({elem}: {elem: TokenItemType}) => {
  const [more, setMore] = useState(false)
  const handleShowMore = () => {
    setMore(!more)
  }

  const history = useNavigate()

  function handleClick(e:SyntheticEvent) {
    e.preventDefault()
    history(`/token/${elem.name}`)
  }

  return (
    <TokenWrapper onClick={handleShowMore}>
      <GridTable>
        <TokenNumber grey>#{elem.id}</TokenNumber>
        <TokenLogo src={elem.logoURI} alt="token-logo"/>
        <TokenItemComponent >
          <TokenTitle>{elem.name}</TokenTitle>
          <TokenTitle size='16px' blue onClick={handleClick}>{elem.symbol}</TokenTitle>
        </TokenItemComponent>
        <TokenItemComponent>
          <TokenNumber blue>{elem.price} $</TokenNumber>
          <TokenItemComponent>
            <FlexBox gap='6px' >
              <TokenNumber color={elem.priceChange.hours24 > 0 ? "#30BF8C" : elem.priceChange.hours24 < 0 ? '#FF647C' : "#93949D"} size='14px'>
                {elem.priceChange.hours24}%
              </TokenNumber>
              <TokenPercentagePoint />
              <TokenNumber color={elem.priceChange.days7 > 0 ? "#30BF8C" : elem.priceChange.days7 < 0 ? '#FF647C' : "#93949D"} size='14px'>
                {elem.priceChange.days7}%
              </TokenNumber>
              <TokenPercentagePoint />
              <TokenNumber color={elem.priceChange.days365 > 0 ? "#30BF8C" : elem.priceChange.days365 < 0 ? '#FF647C' : "#93949D"} size='14px'>
                {elem.priceChange.days365}%
              </TokenNumber>
            </FlexBox>
          </TokenItemComponent>
        </TokenItemComponent>
        <TokenItemComponent>
          <FlexBox gap='16px'>
            <TokenNumber>{elem.volume} $</TokenNumber>
            <TokenNumber blue size='16px'>{elem.volumeChangePercentage}%</TokenNumber>
          </FlexBox>
        </TokenItemComponent>
        <TokenItemComponent>
          <FlexBox gap='16px'>
            <TokenNumber>{elem.tvl} $</TokenNumber>
            <TokenNumber blue size='16px'>{elem.tvlChangePercentage}%</TokenNumber>
          </FlexBox>
        </TokenItemComponent>
        <TokenItemComponent>
          <FlexBox gap='8px'>
            <img src={user} alt="user-img" />
            <TokenNumber>{elem.users}</TokenNumber>
          </FlexBox>
        </TokenItemComponent>
        <TokenItemComponent>
          <img src={more ? hide : showMore } alt="show-btn" />
        </TokenItemComponent>
      </GridTable>
      {more && <TokenItemComponent margin='24px'>{elem.description}</TokenItemComponent>}
    </TokenWrapper>
  )
}
