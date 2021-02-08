import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1024px) {
    height: calc(100vh - 83px);
  }
`
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`
export const Content = styled.h2`
  flex-grow: 1;
`
export const Paragraph = styled.p`
  font-size: 14px;
`
