import { Card } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
  background-color: #fefefe;
`
export const RegularText = styled.div`
  font-size: 14px;
`
export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1024px) {
    height: calc(100vh - 83px);
  }
`
export const Input = styled(Card)`
  max-width: 900px;
  margin: 30px auto;
  border-radius: 10px;
`
type LeoProps = {
  big?: boolean
}
export const Leo = styled.img<LeoProps>`
  width: ${props => (props.big ? '120px' : '75px')};
  margin-bottom: 15px;
`
