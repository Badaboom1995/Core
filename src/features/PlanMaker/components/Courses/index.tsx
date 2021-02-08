import React from 'react'
import { Wrapper } from './styled'
import course from 'features/PlanMaker/assets/course.jpg'
import { Picture, Title, Paragraph, TextArea, Content, CheckPanel } from 'features/PlanMaker/styled'
import CheckboxGroup from 'shared/components/CheckboxGroup'
import StepperControls from 'shared/components/StepperControls'

import habitsPower from 'features/PlanMaker/assets/habitsPower.png'
import stress from 'features/PlanMaker/assets/stress.png'
import sleep from 'features/PlanMaker/assets/sleep.png'
import motivation from 'features/PlanMaker/assets/motivation.png'

function Courses(props) {
  return (
    <Wrapper>
      <Picture src={course} />
      <TextArea>
        <Title>Выбери курсы </Title>
        <Paragraph>
          Получи знания, которые значительно улучшат твою жизнь. Мы упаковали все в курсы и разбили
          их на уроки по 5 минут для твоего удобства.
        </Paragraph>
      </TextArea>
      <Content>
        <CheckboxGroup
          name="courses"
          options={[
            {
              label: (
                <CheckPanel hoverable bg={habitsPower}>
                  <p>Cила привычек</p>
                  <span>
                    Повышает уровень концентрации и внимания. Помогает легче отпускать страхи, боль
                    и обиды.
                  </span>
                </CheckPanel>
              ),
              value: 'habits',
            },
            {
              label: (
                <CheckPanel hoverable bg={stress}>
                  <p>Стресс, страх и тревога</p>
                  <span>
                    Подберем для тебя комплекс упражнений и проследим за правильностью выполнения
                  </span>
                </CheckPanel>
              ),
              value: 'stress',
            },
            {
              label: (
                <CheckPanel hoverable bg={sleep}>
                  <p>Сон</p>
                  <span>Извлеки на поверхность подавленные эмоции и придай четкость мыслям</span>
                </CheckPanel>
              ),
              value: 'sleep',
            },
            {
              label: (
                <CheckPanel hoverable bg={motivation}>
                  <p>Мотивация и лень</p>
                  <span>Извлеки на поверхность подавленные эмоции и придай четкость мыслям</span>
                </CheckPanel>
              ),
              value: 'lazy',
            },
          ]}
        />
      </Content>
      <StepperControls next={props.next} prev={props.prev} />
    </Wrapper>
  )
}
export default Courses
