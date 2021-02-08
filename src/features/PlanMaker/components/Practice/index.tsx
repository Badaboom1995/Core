import React from 'react'
// import { setValues } from '../../duck/slice'
// import { useDispatch } from 'react-redux'
import { Wrapper } from './styled'
import { TextArea, Picture, Paragraph, Title, Content, CheckPanel } from 'features/PlanMaker/styled'
// import { Input, Button } from 'antd'

import skills from 'features/PlanMaker/assets/skills.jpg'
import writing from 'features/PlanMaker/assets/writing.png'
import meditation from 'features/PlanMaker/assets/meditation.png'
import sport from 'features/PlanMaker/assets/sport.png'
import CheckboxGroup from 'shared/components/CheckboxGroup'
import StepperControls from 'shared/components/StepperControls'

function Practice(props) {
  return (
    <Wrapper>
      <Picture src={skills} />
      <Content>
        <TextArea>
          <Title>Выбери привычки </Title>
          <Paragraph>
            Мы приготовили для тебя лучшие практики. <br />
            Внутри все необходимое для старта. Просто бери и делай.
          </Paragraph>
        </TextArea>

        <CheckboxGroup
          name="practices"
          options={[
            {
              label: (
                <CheckPanel hoverable bg={meditation}>
                  <p>Медитация</p>
                  <span>
                    Повышает уровень концентрации и внимания. Помогает легче отпускать страхи, боль
                    и обиды.
                  </span>
                </CheckPanel>
              ),
              value: '5ffd2ab424c421232702c2c2',
            },
            {
              label: (
                <CheckPanel hoverable bg={sport}>
                  <p>Фитнесс</p>
                  <span>Укрепляет тело и дух!</span>
                </CheckPanel>
              ),
              value: '5ffd2e2324c421232702c2c3',
            },
            {
              label: (
                <CheckPanel hoverable bg={writing}>
                  <p>Дневник</p>
                  <span>Извлеки на поверхность подавленные эмоции и придай четкость мыслям</span>
                </CheckPanel>
              ),
              value: '5f9538488e23951a8b5d3ca7',
            },
          ]}
        />
      </Content>
      <StepperControls next={props.next} prev={props.prev} />
    </Wrapper>
  )
}
export default Practice
