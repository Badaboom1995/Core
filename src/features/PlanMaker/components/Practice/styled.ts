import styled from 'styled-components'
import { Card } from 'antd'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

type ItemProps = {
  bg?: any
}
export const BestPractice = styled(Card)<ItemProps>`
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
    color: #666;
    width: 60%;
  }
  .ant-card-body {
    padding: 10px 20px;
    width: 100%;
  }
`
export const CustomItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #efefef;
  margin-bottom: 10px;
`
export const Space = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`
