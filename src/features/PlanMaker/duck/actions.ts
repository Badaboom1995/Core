import { createAsyncThunk } from '@reduxjs/toolkit'
import { makeRequest } from 'utils/api/shared'

export const searchInit = createAsyncThunk<any, void>('PlanMaker/searchInit', async () => {
  let response
  try {
    response = await makeRequest('/search', 'GET')
  } catch (error) {
    console.log(error)
  }
  return response.data
})
