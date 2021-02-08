import styled from 'styled-components'
import { Checkbox } from 'antd'

export const Wrapper = styled.div``
export const Button = styled.label``
export const StyledCheckbox = styled(Checkbox)`
  margin-left: 0 !important;
  transition: 0.3s all ease-in-out;
  margin-bottom: 10px;
  border-radius: 5px;
  span {
    padding: 0;
    display: block;
  }
  &.ant-checkbox-wrapper-checked {
    background-color: #fff6a1;
  }
  .ant-checkbox {
    display: none;
  }
`
