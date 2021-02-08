import styled from 'styled-components'
export const Wrapper = styled.div``
export const Controls = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  background-color: #fff;
`
const ControlItem = styled.button`
  font-size: 14px;
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s all ease;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: #f1f1f1;
  }
  &:active {
    background-color: #afafaf;
  }
`
export const Next = styled(ControlItem)`
  color: #444;
`
export const Prev = styled(ControlItem)`
  color: #949494;
`
