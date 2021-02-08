import React from 'react'
import { Wrapper, LabelText, Minutes, Difficulty } from './styled'
import { TextArea, Picture, Paragraph, Title, Content } from 'features/PlanMaker/styled'
import time from 'features/PlanMaker/assets/time.jpg'
import RadioGroup from 'shared/components/RadioGroup'
import StepperControls from 'shared/components/StepperControls'

function Time(props) {
  const createPlan = () => {
    props.next()
    setTimeout(props.next, 2000)
  }
  return (
    <Wrapper>
      <Picture src={time} />
      <Content>
        <TextArea>
          <Title>Сколько минут в день?</Title>
          <Paragraph>
            Выбери комфортную цифру. На первом этапе самое важное - регулярность.
          </Paragraph>
        </TextArea>
        <RadioGroup
          color={'#fff6a1'}
          width="100%"
          options={[
            {
              label: (
                <LabelText>
                  <Minutes>15 минут</Minutes>
                  <Difficulty>Просто</Difficulty>
                </LabelText>
              ),
              value: '5',
            },
            {
              label: (
                <LabelText>
                  <Minutes>30 минут</Minutes>
                  <Difficulty>Оптимально</Difficulty>
                </LabelText>
              ),
              value: '30',
            },
            {
              label: (
                <LabelText>
                  <Minutes>60 минут</Minutes>
                  <Difficulty>Амбициозно</Difficulty>
                </LabelText>
              ),
              value: '60',
            },
          ]}
        ></RadioGroup>
      </Content>

      <StepperControls next={createPlan} prev={props.prev} />
    </Wrapper>
  )
}
export default Time
