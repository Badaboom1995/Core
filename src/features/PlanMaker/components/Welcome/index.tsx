import React from 'react'
import { Wrapper } from './styled'
import welcome from 'features/PlanMaker/assets/welcome.jpg'
import {
  Picture,
  Title,
  Paragraph,
  TextArea,
  Content,
  ControlsArea,
} from 'features/PlanMaker/styled'
import { PrimaryButton } from 'shared/components/Button'

function Welcome(props) {
  return (
    <Wrapper>
      <Picture src={welcome} />
      <Content>
        <TextArea>
          <Title>Добро пожаловать в CORE! </Title>
          <Paragraph>
            Мы рады что ты с нами! CORE поможет внедрить полезные привычки и практики в твою жизнь.
          </Paragraph>
          <Paragraph>
            Всего за несколько шагов мы составим твой персональный план развития.
          </Paragraph>
        </TextArea>
      </Content>
      <ControlsArea>
        <PrimaryButton type="primary" fullwidth onClick={props.next}>
          Начать
        </PrimaryButton>
      </ControlsArea>
    </Wrapper>
  )
}
export default Welcome
