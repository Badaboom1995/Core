import React from 'react'
import Stepper from 'shared/components/Stepper'
import { Wrapper } from './styled'
import Welcome from './components/Welcome'
import Statistics from './components/Statistics'
import Game from './components/Game'
import Important from './components/Important'

type PlanConstructorViewProps = {
  setHabits: (habit: any) => void
  habits: any
}
function PlanConstructorView(props: PlanConstructorViewProps) {
  return (
    <Wrapper>
      <Stepper>
        <Welcome />
        {/* <HabitPicker setHabits={props.setHabits} habits={props.habits} />
        <div>
          <img
            style={{ width: '700px', marginLeft: '-200px', marginTop: '-80px' }}
            src={process}
            alt=""
          />
          <p style={{ textAlign: 'center' }}>Creating your personal plan...</p>
        </div> */}
        {/* <PlanView habits={props.habits} /> */}
        <Game />
        <Statistics />
        <Important />
      </Stepper>
    </Wrapper>
  )
}

export default PlanConstructorView
