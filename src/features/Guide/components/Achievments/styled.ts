import styled from 'styled-components'
type WrapperProps = {
  icon?: string
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Item = styled.div`
  padding: 5px;
  width: 50%;
`
export const ComingSoon = styled.div`
  padding: 5px;
  width: 100%;
  font-size: 16px;
  opacity: 0.5;
  text-align: center;
`
