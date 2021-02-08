import { createSelector } from '@reduxjs/toolkit'
import { habitsAdapter } from './duck/slices/habits'
import { HabitsState } from './duck'

export const habitsSelector = (state: HabitsState) => state.habits
const habitSelectors = habitsAdapter.getSelectors(habitsSelector)

export const selectHabitById = id =>
  createSelector(
    (state: HabitsState) => state,
    state => habitSelectors.selectById(state, id) || null,
  )
export const selectHabits = () =>
  createSelector(
    (state: HabitsState) => state,
    state => habitSelectors.selectEntities(state),
  )

export const selectHabitsByName = name =>
  createSelector(selectHabits(), habits =>
    Object.keys(habits)
      .map(key => habits[key])
      .filter(habit => habit?.name === name && habit?.completed),
  )
export const selectCurrentHabits = createSelector(selectHabits(), habits =>
  Object.keys(habits)
    .map(key => habits[key])
    .filter(habit => !habit?.completed),
)
