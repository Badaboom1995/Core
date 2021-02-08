import styled from 'styled-components'
import { Button } from 'antd'

export const Wrapper = styled.div`
  position: relative;
  /* padding: 50px; */
  height: 100vh;
  @media screen and (max-width: 1024px) {
    padding: 10px;
    padding-top: 00px;
    background-color: #fefefe;
  }
`
export const SlideWrapper = styled.div`
  width: 100vw;
`
export const ContentWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: calc(100vh - 30px);
    overflow: scroll;
  }
`
export const PrevButton = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`
