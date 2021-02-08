import { createAsyncThunk } from '@reduxjs/toolkit'
import templatesService from 'utils/api/templates'
import { normalizeData } from 'utils/custom'

export const getTemplates = createAsyncThunk<any, void>(
  'templates/get',
  async (__, { rejectWithValue, dispatch }) => {
    const res = await templatesService.getTemplates()
    return normalizeData(res)
  },
)
