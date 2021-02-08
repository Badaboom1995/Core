import { createAsyncThunk } from '@reduxjs/toolkit'
import habitService from 'utils/api/habits'
import { getNormalizedHabitName } from 'utils/custom'

export const addHabitAsync = createAsyncThunk<any, any>('habit/add', async habit => {
  habit.name = getNormalizedHabitName(habit.name)
  const res = await habitService.createHabit(habit)
  res.id = res._id
  delete res._id
  return res
})

export const getHabits = createAsyncThunk<any, void>('habit/get', async () => {
  const res = await habitService.getHabits()
  const habits = res.map(habit => {
    habit.id = habit._id
    delete habit._id
    return habit
  })

  return habits
})

export const updateHabitAsync = createAsyncThunk<any, any>('habit/update', async update => {
  const id = update.id
  delete update.id
  const res = await habitService.updateHabit({ diff: update, id })
  return res
})

export const deleteHabitAsync = createAsyncThunk<any, any>('habit/delete', async habit => {
  const res = await habitService.deleteHabit(habit.id)
  return res
})
