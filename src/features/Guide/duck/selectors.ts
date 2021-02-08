import { createSelector } from '@reduxjs/toolkit'
import { PlanState } from './'

export const selectPlan = createSelector(
  (state: PlanState) => state,
  state => state.userPlan,
)
export const selectPlanHabits = createSelector(
  (state: PlanState) => state,
  state => state.userPlan.list.habits,
)
