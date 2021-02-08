import { createSlice } from '@reduxjs/toolkit'

type PlanMakerState = {
  loading: Boolean
  plan: any
}

const initialState: PlanMakerState = {
  loading: false,
  plan: { goals: [], courses: [], practices: [], custom: [], time: 0 },
}

const PlanMakerSlice = createSlice({
  name: 'PlanMaker',
  initialState: initialState,
  reducers: {
    setValues(state, action) {
      console.log(action.payload)
      const key = Object.keys(action.payload)[0]
      const value = action.payload[key]
      state.plan[key] = value
    },
  },
})

export const { setValues } = PlanMakerSlice.actions
export default PlanMakerSlice
