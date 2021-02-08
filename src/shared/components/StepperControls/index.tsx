import React from 'react'
import { Wrapper, Controls, Prev, Next } from './styled'
function StepperControls({ prev, next }) {
  return (
    <Wrapper>
      <Controls>
        <Prev onClick={prev}>Назад</Prev>
        <Next onClick={next}>Далее</Next>
      </Controls>
    </Wrapper>
  )
}
export default StepperControls
