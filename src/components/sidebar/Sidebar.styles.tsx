import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface SidebarType {
  display: string;
  justify: string;
  align: string;
  direction: string;
  height: string;
  gap: string;
  background: string;
}

export const FlexBox = styled.div<Partial<SidebarType>>`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'stretch'};
  align-items: ${(props) => props.align || 'center'};
  height: ${(props) => props.height || "100%"};
  gap: ${(props) => props.gap || "0px"};
`

export const SidebarWrapper = styled.div`
  max-width: 320px;
  height: 100vh;
  padding: 64px 48px 24px 48px;
`

export const SidebarFooter = styled.div`
  color: #FFFFFF;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
`

export const SidebarLogo = styled.div`
  margin-bottom: 72px;
`

export const SidebarNavLink = styled(NavLink)<Partial<SidebarType>>`
  padding: 16px 24px ;
  width: 100%;
  border-radius: 16px;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  margin-bottom: 24px;
  background-color: transparent;
  color: ${props => props.color || '#fff'};
  display: flex;
  gap: 24px;
  text-decoration: none;
  &.active {
    background-color: #fff;
    color: #000000;
    & img {
      filter: invert(65%) sepia(59%) saturate(1337%) hue-rotate(12deg)
      brightness(0) contrast(104%);
    }
  }
`


