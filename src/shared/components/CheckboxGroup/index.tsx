import React from 'react'
import { Checkbox, Form } from 'antd'
import { StyledCheckbox } from './styled'

type ItemType = { label: any; value: any }
type PropsType = { options: ItemType[]; name }
function CheckboxGroup(props: PropsType) {
  return (
    <Form.Item name={props.name} valuePropName="checked">
      <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {props.options.map(item => (
          <StyledCheckbox key={item.value.id} value={item.value}>
            {item.label}
          </StyledCheckbox>
        ))}
      </Checkbox.Group>
    </Form.Item>
  )
}
export default CheckboxGroup
