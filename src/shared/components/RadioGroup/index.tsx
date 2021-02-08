import React from 'react'
import { RadioGroupStyled } from './styled'
import { Form } from 'antd'

export type RadioItem = {
  label: any
  value: string
}
export type RadioGroupProps = {
  color: string
  options: RadioItem[]
  width?: string
}

function RadioGroup(props: RadioGroupProps) {
  return (
    <Form.Item name="time">
      <RadioGroupStyled
        optionType="button"
        buttonStyle="solid"
        options={props.options}
        color={props.color}
        width={props.width}
      />
    </Form.Item>
  )
}
export default RadioGroup
