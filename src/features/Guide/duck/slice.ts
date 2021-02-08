import { createSlice } from '@reduxjs/toolkit'
import { Plan } from './types'
import * as actions from './actions'
import { makeReducer } from 'utils/custom'

const { createPlan, getPlan } = actions

type PlansState = {
  list: Plan
  loading: boolean
  error: string | null
}

const initialState: PlansState = {
  loading: false,
  error: null,
  list: { habits: [], goals: [], courses: [] },
}

const habitsSlice = createSlice({
  name: 'plan',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // Create Plan
    makeReducer(
      builder,
      createPlan,
      (state, payload) => {
        state.list = payload
      },
      action => {
        console.log('error')
      },
    )
    // Get Plan
    makeReducer(
      builder,
      getPlan,
      (state, payload) => {
        state.list = payload
      },
      action => {
        console.log('error')
      },
    )
  },
})

export default habitsSlice
