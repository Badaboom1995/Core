import styled from 'styled-components'
import { Button } from 'antd'
import { darken } from 'polished'

type PrimaryButtonStyle = {
  fullwidth?: boolean
}
export const PrimaryButton = styled(Button)<PrimaryButtonStyle>`
  width: ${props => props.fullwidth && '100%'};
  margin-top: ${props => props.fullwidth && '20px'};
  border-radius: 5px;
  background-color: #3a3939;
  border-color: transparent;
  height: 38px;
  font-size: 15px;
  &:hover,
  &:active,
  &:focus {
    background-color: ${darken(0.3, '#3a3939')};
    border-color: transparent;
  }
`
