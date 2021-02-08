import styled from 'styled-components'
import { Card } from 'antd'

export const Wrapper = styled.div`
  background-color: transparent;
`
export const Slide = styled.div`
  padding-top: 30px;
  margin: 20px auto;
  height: 700px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media screen and (max-width: 767px) {
    height: calc(100vh - 100px);
    box-shadow: none;
  }
`
export const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
`
export const Paragraph = styled.p`
  font-size: 14px;
`
export const TextArea = styled.div`
  text-align: center;
  width: 350px;
  margin: 0 auto;
  margin-bottom: 30px;
`
export const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0 10px;
  overflow: scroll;
`
export const ControlsArea = styled.div`
  padding: 20px 0;
`
export const Picture = styled.img`
  width: 80%;
  margin: 0 auto;
`
type ItemProps = {
  bg?: any
}
export const CheckPanel = styled(Card)<ItemProps>`
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  background-image: url(${props => props.bg});
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: right;
  background-color: transparent;
  text-align: left;
  p {
    font-size: 24px;
    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
    color: #333;
    width: 50%;
  }
  .ant-card-body {
    padding: 10px 20px;
    width: 100%;
  }
`
