import styled from 'styled-components'
import { Radio } from 'antd'

const getColor = props => props.color

type FieldProps = {
  color: string
  width?: string
}

export const RadioGroupStyled = styled(Radio.Group)<FieldProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  transition: 0.3s all ease-in-out;
  label {
    text-align: center;
    border-radius: 5px;
    border-left-width: 1px;
    height: auto;
  }
  span {
    display: inline-block;
    width: 100%;
  }
  .ant-radio-button-wrapper {
    padding: 0;
    margin-bottom: 10px;
    width: ${props => (props.width ? props.width : '48%')};
    border: none;
    background-color: #f5f5f5;
    &:hover {
      color: #000;
    }
    &:first-child,
    &:last-child {
      border-radius: 5px;
    }
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }
  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper {
    border: none;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    color: #000;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: ${getColor};
    color: #000;
    &:focus-within {
      box-shadow: none;
    }
    &:hover {
      background-color: ${getColor};
    }
    &:before {
      background-color: ${getColor};
    }
  }
`
