import React from 'react'
import { Wrapper } from './styled'
import { TextArea, Picture, Title } from 'features/PlanMaker/styled'
import creating from 'features/PlanMaker/assets/wizarddribbble.gif'

function Creating(props) {
  return (
    <Wrapper>
      <Picture src={creating} style={{ marginTop: '50px' }} />
      <TextArea>
        <Title>Создаем ваш план...</Title>
      </TextArea>
    </Wrapper>
  )
}
export default Creating
