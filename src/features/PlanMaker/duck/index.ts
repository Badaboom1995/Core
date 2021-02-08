import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  PlanMaker: slice.reducer,
}

const combined = combineReducers(reducers)

export type PlanMakerState = ReturnType<typeof combined>

export default reducers
