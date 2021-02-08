import React from 'react'
import { Wrapper, GoalCard } from './styled'
import { Picture, Title, Paragraph, TextArea, Content } from 'features/PlanMaker/styled'
import goals from 'features/PlanMaker/assets/goals.jpg'
import CheckboxGroup from 'shared/components/CheckboxGroup'
import StepperControls from 'shared/components/StepperControls'

function ChooseGoalView(props) {
  return (
    <Wrapper>
      <Picture src={goals} />
      <TextArea>
        <Title>Выбери цели</Title>
        <Paragraph>А мы подберем практики, нужную информацию и оптимальную сложность</Paragraph>
      </TextArea>
      <Content>
        <CheckboxGroup
          name="goals"
          options={[
            { label: <GoalCard>Похудеть</GoalCard>, value: 'slim' },
            {
              label: <GoalCard>Заниматься спортом</GoalCard>,
              value: 'sport',
            },
            {
              label: <GoalCard>Увеличить доход</GoalCard>,
              value: 'money',
            },
            {
              label: <GoalCard>Читать больше</GoalCard>,
              value: 'read',
            },
            {
              label: <GoalCard>Избавиться от стресса и тревоги</GoalCard>,
              value: 'stress',
            },
            {
              label: <GoalCard>Повысить продуктивность</GoalCard>,
              value: 'prdouctivity',
            },
            {
              label: <GoalCard>Стать счастливее</GoalCard>,
              value: 'happyness',
            },
          ]}
        />
      </Content>
      <StepperControls next={props.next} prev={props.prev} />
    </Wrapper>
  )
}
export default ChooseGoalView
