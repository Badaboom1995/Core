import { createAsyncThunk, unwrapResult } from '@reduxjs/toolkit'
import { getPlan } from 'features/Guide/duck/actions'
import { getTemplates } from 'shared/core/templates/duck/actions'
import { getHabits } from 'shared/core/habits/duck/actions'
import { getProfile } from 'shared/core/user/duck/actions'

export const bootstrap = createAsyncThunk<any, void>('app/bootstrap', async (__, { dispatch }) => {
  await Promise.all([
    await dispatch(getProfile()).then(unwrapResult),
    await dispatch(getHabits()).then(unwrapResult),
    await dispatch(getPlan()).then(unwrapResult),
    await dispatch(getTemplates()).then(unwrapResult),
  ])
})
