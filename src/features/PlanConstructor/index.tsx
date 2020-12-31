import React, { useState } from 'react'
import PlanConstructorView from './view'

function PlanConstructor() {
  const [habits, chooseHabits]: any[] = useState([])
  const [options, setOptions] = useState({
    timePerDay: 15,
    startDuration: 7,
    durationStep: 7,
    timeStep: 5,
    firstTime: true,
  })
  const setHabits = (habits: any) => {
    chooseHabits(habits)
  }
  return <PlanConstructorView setHabits={setHabits} habits={habits} />
}
export default PlanConstructor
