import React from 'react'
import ProgressView from './view'
import { useSelector } from 'react-redux'
import { selectHabits } from 'shared/core/habits/selectors'
import { selectPlanHabits } from 'features/Guide/duck/selectors'

function Progress() {
  const habits = useSelector(selectHabits())
  const practices = useSelector(selectPlanHabits)

  const getCompletedHabitsByName = name =>
    Object.keys(habits)
      .map(key => habits[key])
      .filter(habit => habit?.name === name && habit?.completed)

  const getHabitProgress = name => {
    const habits = getCompletedHabitsByName(name)
    const progress: boolean[] = Array(4).fill(false)
    habits.forEach(item => {
      switch (item?.duration) {
        case '7':
          progress[0] = true
          break
        case '14':
          progress[1] = true
          break
        case '21':
          progress[2] = true
          break
        case '30':
          progress[3] = true
          break
        default:
          break
      }
    })
    return progress
  }

  return <ProgressView practices={practices} getHabitProgress={getHabitProgress} />
}
export default Progress
