import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const LabelText = styled.div`
  padding: 5px;
`
const LabelTextItem = styled.p`
  margin-bottom: 0px;
`
export const Minutes = styled(LabelTextItem)`
  font-size: 18px;
`
export const Difficulty = styled(LabelTextItem)`
  font-size: 13px;
`
