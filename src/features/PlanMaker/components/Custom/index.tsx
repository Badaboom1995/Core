import React, { useEffect, useState } from 'react'
import { Wrapper, CustomItem, Space } from './styled'
import { TextArea, Picture, Paragraph, Title, Content } from 'features/PlanMaker/styled'
import { Input, Button } from 'antd'
import { setValues } from '../../duck/slice'
import { useDispatch } from 'react-redux'
import skills from 'features/PlanMaker/assets/skills.jpg'
import StepperControls from 'shared/components/StepperControls'

function Custom(props) {
  const dispatch = useDispatch()
  const [actions, setActions] = useState<any>([])
  const [currentAction, setCurrentAction] = useState('')

  useEffect(() => {
    dispatch(setValues({ custom: [...actions] }))
  }, [actions, dispatch])

  const onInputChange = e => {
    setCurrentAction(e.target.value)
  }
  const addAction = () => {
    setActions([...actions, currentAction])
    setCurrentAction('')
  }
  const removeAction = name => {
    const filteredActions = actions.filter(item => item !== name)
    setActions(filteredActions)
  }

  return (
    <Wrapper>
      <Picture src={skills} />
      <TextArea>
        <Title>Создай свои привычки</Title>
        <Paragraph>Хочешь освоить еще что то?</Paragraph>
      </TextArea>
      <Content>
        <form onSubmit={addAction}>
          <Space>
            <Input onChange={onInputChange} value={currentAction} style={{ flexGrow: 1 }} />
            <Button type="primary" onClick={addAction}>
              +
            </Button>
          </Space>
        </form>

        {actions.map(item => (
          <CustomItem>
            <span>{item}</span>
            <Button
              type="text"
              danger
              onClick={() => {
                removeAction(item)
              }}
            >
              Delete
            </Button>
          </CustomItem>
        ))}
      </Content>
      <StepperControls next={props.next} prev={props.prev} />
    </Wrapper>
  )
}
export default Custom
