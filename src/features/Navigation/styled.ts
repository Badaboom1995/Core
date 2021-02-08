import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type NavigationProps = {
  closed?: boolean
}
export const Navigation = styled.nav<NavigationProps>`
  display: block;
  grid-column-start: start;
  grid-column-end: main;
  background-color: ${props => props.theme.default.primary};
  padding: 15px;
  transition: 0.3s all ease;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: ${props => props.closed && 'fixed'};
    left: 0;
    top: 0;
    z-index: 9;
    height: 100vh;
    padding: 10px;
    transform: translateX(${props => (props.closed ? '-101%' : '0px')});
    width: 85vw;
    box-sizing: border-box;
  }
`
export const NavList = styled.ul`
  padding: 15px 0;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  &:last-child {
    border-bottom: none;
  }
`
export const NavItem = styled.li`
  list-style: none;
  margin: 0;
`

export const Wrapper = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  padding: 10px 15px;
  padding-left: 15px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 300;
  color: #fff;
  cursor: pointer;
  transition: 0.1s all ease;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.12);
    color: #fff;
    outline: none;
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.32);
  }
`
export const Icon = styled.img`
  width: 22px;
  margin-right: 15px;
`
export const Text = styled.span`
  flex-grow: 1;
  text-align: left;
`
export const Counter = styled.span`
  font-size: 12px;
`
export const CloseButton = styled.button`
  position: absolute;
  right: -40px;
  top: 18px;
  background-color: #fff;
  padding: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`
