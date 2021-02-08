import styled from 'styled-components'
export const Wrapper = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Instruction = styled.div`
  /* border-top: 1px solid #e4e4e4; */
  flex-grow: 1;
`
export const InstructionTitle = styled.h3`
  font-size: 24px;
  background-color: #f0f0f0;
  margin: 0;
  padding: 10px;
  margin-bottom: 10px;
`
export const List = styled.ul`
  padding-left: 0px;
  margin-bottom: 30px;
`
export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 15px;
  b {
    font-size: 18px;
  }
`
