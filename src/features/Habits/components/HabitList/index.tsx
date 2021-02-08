import React from 'react'
import { useSelector } from 'react-redux'
import HabitListView from './view'
import { selectFilteredHabits } from './selectors'
import { checkCompleted } from 'utils/custom'
import { HabitType } from 'shared/core/habits/types'

function Habits() {
  const filteredHabits = useSelector(selectFilteredHabits)
  const sortByComplete = () => {
    const completedHabits: HabitType[] = []
    const comingHabits: HabitType[] = []
    filteredHabits.forEach(habit => {
      checkCompleted(habit.state) ? completedHabits.push(habit) : comingHabits.push(habit)
    })
    return [...comingHabits, ...completedHabits]
  }
  const sortedHabits = sortByComplete()
  return <HabitListView sortedHabits={sortedHabits} />
}

export default Habits
