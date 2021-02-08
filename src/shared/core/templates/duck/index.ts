import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'

const reducers = {
  templates: slice.reducer,
}

const combined = combineReducers(reducers)

export type TemplateState = ReturnType<typeof combined>

export default reducers
