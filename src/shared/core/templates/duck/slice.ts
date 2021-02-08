import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import * as actions from './actions'
import { makeReducer } from 'utils/custom'
import { TemplateType } from '../types'
//Tech Debt. Add rtk adapter

export const templatesAdapter = createEntityAdapter<TemplateType>({
  selectId: template => template.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const { getTemplates } = actions

const habitsSlice = createSlice({
  name: 'templates',
  initialState: templatesAdapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    makeReducer(
      builder,
      getTemplates,
      (state, payload) => {
        templatesAdapter.addMany(state, payload)
      },
      action => {
        console.log('error')
      },
    )
  },
})

export default habitsSlice
