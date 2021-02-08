import { createSelector } from '@reduxjs/toolkit'
import { habitsAdapter } from 'shared/core/habits/duck/slices/habits'
import { selectCurrentHabits } from 'shared/core/habits/selectors'

const habitSelectors = habitsAdapter.getSelectors<any>(state => state.habits)
export const selectItems = state => habitSelectors.selectAll(state)

export const selectAll = createSelector(selectItems, (habits: any) => habits)
export const selectGroup = createSelector(selectItems, (habits: any) =>
  habits.filter(item => item.group),
)

type timeType = 'morning' | 'evening' | 'afternoon' | 'allTime'
export const selectByTime = (time: timeType) =>
  createSelector(selectCurrentHabits, (habits: any) => habits.filter(item => item.time === time))
