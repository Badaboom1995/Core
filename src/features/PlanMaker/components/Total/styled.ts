import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Summary = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const SummaryItem = styled.div`
  width: 30%;
  text-align: center;
`
type NumberProps = {
  color: string
}
export const Number = styled.div<NumberProps>`
  font-size: 36px;
  color: ${props => props.color};
`
export const Label = styled.div`
  font-size: 14px;
`
