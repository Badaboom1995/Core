import React from 'react'
import { PrimaryButton } from 'shared/components/Button'
import { Title, Paragraph, Content } from './styled'
import leo from '../../assets/leo.svg'
import { Leo, SlideWrapper } from 'features/PlanConstructor/styled'
function ImportantView(props) {
  return (
    <SlideWrapper>
      <Leo big src={leo} />
      <Title>
        Ты отлично справился!
        <br />И у меня есть для тебя подарки!
      </Title>
      <Content>
        <Paragraph style={{ padding: '0 20px' }}>
          Давай сделаем 2021-й снова великим! А чтобы изменить следующий год начать стоит с себя.
        </Paragraph>
        <Paragraph style={{ padding: '0 20px' }}>
          Я помогу тебе составить план на следующий год, который сработает. Ты прокачаешься по
          интересным тебе направлениям и внедришь супер полезные привычки.
          <b>Без стресса, титанических усилий и вот этого всего.</b>
        </Paragraph>
        <Paragraph style={{ fontSize: '18px', padding: '0 20px' }}>
          Оставь свои контакты, чтобы твои подарки не потерялись.
        </Paragraph>
      </Content>
      <a href="https://forms.gle/7Ge6uQWCYEYaPCUh9">
        <PrimaryButton fullWidth onClick={() => {}} type="primary" htmlType="submit">
          Получить подарки
        </PrimaryButton>
      </a>
    </SlideWrapper>
  )
}
export default ImportantView
