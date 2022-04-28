import styled from "styled-components";

interface ContentType {
  size: string;
  line: string;
  active: boolean;
}

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding: 64px 128px;
  border-top-left-radius: 32px;
  width: 100%;
  background-color: #F7F7FB;
  max-height: 100vh;
  overflow-y: scroll;
`

export const ContentHeader = styled.div`
  margin-bottom: 40px;
`

export const Title = styled.div<Partial<ContentType>>`
  font-size: ${props => props.size || "36px"};
  line-height: ${props => props.line || "43px"} ;
`

export const Typography = styled.div`
  margin-top: 140px;
  color: ${props => props.color || 'black'};
  text-align: center;
  
`

export const FiltersStyle = styled.div`
  background-color: #FFFFFF;
  padding: 8px;
  border-radius: 24px;
`

export const FiltersItem = styled.button<Partial<ContentType>>`
  color: ${props => props.color ? '#FFFFFF' : '#93949D' };
  font-size: 14px;
  line-height: 14px;
  padding: 8px 9px;
  border: none;
  border-radius: 16px;
  font-weight: 500;
  background ${props => props.color ? 'linear-gradient(200deg, #B380FD 12%, #6347F5 78%);' : "transparent"} ;
`