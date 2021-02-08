import styled from 'styled-components'
export const Wrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    /* display: none; */
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    padding: 10px;
    background-color: #fff;
  }
`
