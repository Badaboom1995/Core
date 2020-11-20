import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const Title = styled.h2`
  font-weight: normal;
  margin: 0;
  padding: 15px 0px;
  flex-grow: 1;
`
export const WeekDays = styled.div`
  display: flex;
  font-weight: normal;
  margin-right: 130px;
`

export const AddButton = styled.button`
  background-color: transparent;
  font-size: 36px;
  border: none;
  border-radius: 50%;
  padding: 0px 19px;
  cursor: pointer;
  transition: 0.1s all ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    outline: none;
    background-color: rgba(0, 0, 0, 0.07);
  }
  &:focus,
  &:active {
    outline: none;
  }
`
export const DayBlock = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #7b7b7b;
  font-size: 12px;
  font-weight: bold;
  margin-right: 10px;
`
export const Day = styled.span`
  line-height: 1.1em;
  color: #7b7b7b;
  font-size: 12px;
  font-weight: bold;
`
