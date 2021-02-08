import React from 'react'
import { Wrapper, Summary, SummaryItem, Number, Label } from './styled'
import check from 'features/PlanMaker/assets/check.jpg'
import { Picture, Title, TextArea, Content, ControlsArea } from 'features/PlanMaker/styled'
import { Collapse } from 'antd'
import { PrimaryButton } from 'shared/components/Button'
import { useSelector } from 'react-redux'
import { RootState } from 'index'

const { Panel } = Collapse

function Total(props) {
  const plan = useSelector((state: RootState) => state).PlanMaker.plan
  const createPlan = () => {
    props.next()
    setTimeout(props.next, 1000)
  }

  return (
    <Wrapper>
      <Picture src={check} />
      <TextArea>
        <Title>Все верно?</Title>
        <Summary>
          <SummaryItem>
            <Number color="#FFCA3A">{plan.habits.length + plan.custom.length}</Number>
            <Label>Привычек</Label>
          </SummaryItem>
          <SummaryItem>
            <Number color="#EE9BB4">{plan.courses.length}</Number>
            <Label>Курса</Label>
          </SummaryItem>
          <SummaryItem>
            <Number color="#BFA0F2">{plan.time}</Number>
            <Label>Минут в день</Label>
          </SummaryItem>
        </Summary>
      </TextArea>
      <Content>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Привычки" key="1">
            {plan.habits.map(item => (
              <p>{item.name}</p>
            ))}
            {plan.custom.map(item => (
              <p>{item}</p>
            ))}
          </Panel>
          <Panel header="Цели" key="2">
            {plan.goals.map(item => (
              <p>{item.name}</p>
            ))}
          </Panel>
          <Panel header="Курсы" key="3">
            {plan.courses.map(item => (
              <p>{item.name}</p>
            ))}
          </Panel>
        </Collapse>
        ,
      </Content>
      <ControlsArea>
        <PrimaryButton type="primary" fullwidth onClick={createPlan}>
          Все верно!
        </PrimaryButton>
      </ControlsArea>
    </Wrapper>
  )
}
export default Total
