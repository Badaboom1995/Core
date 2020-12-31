import React from 'react'
import { PrimaryButton } from 'shared/components/Button'
import { Title, Paragraph, Content } from './styled'
import leo from '../../assets/leo.svg'
import { Leo, SlideWrapper } from 'features/PlanConstructor/styled'

function Welcome(props) {
  return (
    <SlideWrapper>
      <Leo big src={leo} />
      <Title>
        Привет! <br />
        Меня зовут Лёня
      </Title>
      <Content>
        <Paragraph>
          Подходит к концу 2020-й год и это прекрасно! Год выдался отвратительный. В журнале “Time”
          его даже назвали худшим годом в истории человечества.
        </Paragraph>
        <Paragraph>
          Но уже скоро вступит в свои законные права 2021-й. Что он нам принесет? Очередную волну
          коронавируса? Или успех и процветание? Все зависит от тебя.
        </Paragraph>
        <Paragraph>
          Присоединяйся к отряду “FuckTwentyTwenty” и помоги прогнать уходящий год!
        </Paragraph>
      </Content>
      <PrimaryButton
        fullWidth
        onClick={() => {
          props.next()
        }}
        type="primary"
        htmlType="submit"
      >
        Вступить в отряд
      </PrimaryButton>
    </SlideWrapper>
  )
}
export default Welcome