import styled from 'styled-components'

export const Layout = styled.main`
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-columns: [start] 260px [main] auto [aside] 30% [end];
  grid-template-rows: 100%;
  @media screen and (max-width: 767px) {
    grid-template-columns: [start] 0px [main] 100% [aside] 0[end];
    box-sizing: border-box;
  }
`
export const MainArea = styled.main`
  display: block;
  grid-column-start: main;
  grid-column-end: aside;
  border-right: 1px solid rgba(0, 0, 0, 0.16);
  background-color: ${props => props.theme.default.background};
  padding: 15px;
  overflow: scroll;
  box-sizing: border-box;
`
export const SecondaryArea = styled.aside`
  display: block;
  grid-column-start: aside;
  grid-column-end: end;
  background-color: ${props => props.theme.default.background};
  overflow: scroll;
  padding: 15px;
  box-sizing: border-box;
`
