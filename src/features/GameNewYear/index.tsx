import React, { useState } from 'react'
import PlanConstructorView from './view'

function PlanConstructor() {
  const [habits, chooseHabits]: any[] = useState([])
  const setHabits = (habits: any) => {
    chooseHabits(habits)
  }
  return <PlanConstructorView setHabits={setHabits} habits={habits} />
}
export default PlanConstructor
