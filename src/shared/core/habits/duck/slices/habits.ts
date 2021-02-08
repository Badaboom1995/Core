import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import * as actions from '../actions'
import { HabitType } from '../types'

//Tech Debt. Move from slicec folder

export const habitsAdapter = createEntityAdapter<HabitType>({
  selectId: habit => habit.id,
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
})

const { addHabitAsync, updateHabitAsync, deleteHabitAsync, getHabits } = actions

const habitsSlice = createSlice({
  name: 'habits',
  initialState: habitsAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    // Add
    builder.addCase(addHabitAsync.pending, (state, action) => {
      console.log('pending')
    })
    builder.addCase(addHabitAsync.fulfilled, (state, action) => {
      console.log(state, action.payload)
      habitsAdapter.addOne(state, action.payload)
    })
    builder.addCase(addHabitAsync.rejected, (state, action) => {
      console.log('rejected')
    })
    // Get
    builder.addCase(getHabits.pending, (state, action) => {
      console.log('pending')
    })
    builder.addCase(getHabits.fulfilled, (state, action) => {
      console.log(action.payload)
      habitsAdapter.addMany(state, action.payload)
    })
    builder.addCase(getHabits.rejected, (state, action) => {
      console.log('rejected')
    })
    // Update
    builder.addCase(updateHabitAsync.pending, (state, action) => {
      console.log('pending')
    })
    builder.addCase(updateHabitAsync.fulfilled, (state, action) => {
      const id = action.payload._id
      delete action.payload._id
      habitsAdapter.updateOne(state, { id, changes: { ...action.payload } })
    })
    builder.addCase(updateHabitAsync.rejected, (state, action) => {
      console.log('rejected')
    })
    // Delete
    builder.addCase(deleteHabitAsync.pending, (state, action) => {
      console.log('pending')
    })
    builder.addCase(deleteHabitAsync.fulfilled, (state, action) => {
      console.log('fullfiled')
      console.log(action.payload)
      habitsAdapter.removeOne(state, action.payload._id)
    })
    builder.addCase(deleteHabitAsync.rejected, (state, action) => {
      console.log('rejected')
    })
  },
})

export default habitsSlice
