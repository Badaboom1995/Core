import { createAsyncThunk } from '@reduxjs/toolkit'
import plansService from 'utils/api/plans'

export const createPlan = createAsyncThunk<any, any>('plan/createPlan', async plan => {
  const res = await plansService.createPlan(plan)
  return res
})
export const getPlan = createAsyncThunk<any, void>('plan/getPlan', async () => {
  const res = await plansService.getPlan()
  console.log(res)
  return res
})
