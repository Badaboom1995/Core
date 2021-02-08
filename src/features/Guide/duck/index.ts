import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  userPlan: slice.reducer,
}

const combined = combineReducers(reducers)

export type PlanState = ReturnType<typeof combined>

export default reducers
