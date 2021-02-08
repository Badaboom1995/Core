import styled from 'styled-components'
type WrapperProps = {
  icon?: string
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
export const Link = styled.a<WrapperProps>`
  font-size: 14px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  &:hover {
    color: #000;
  }
  &:before {
    content: '';
    display: inline-block;
    width: 17px;
    height: 17px;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 15px;
  }
`
export const Time = styled.span`
  margin-right: 10px;
`
export const RightSection = styled.div`
  display: flex;
  align-items: center;
`
