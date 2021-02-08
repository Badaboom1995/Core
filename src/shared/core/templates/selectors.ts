import { createSelector } from '@reduxjs/toolkit'
import { TemplateState } from './duck'
import { templatesAdapter } from './duck/slice'

const selectTempaltes = (state: TemplateState) => state.templates
const templatesSelectors = templatesAdapter.getSelectors(selectTempaltes)

export const selectTemplates = createSelector(
  (state: TemplateState) => state,
  state => {
    return templatesSelectors.selectAll(state)
  },
)
export const selectTemplateById = id =>
  createSelector(
    (state: TemplateState) => state,
    state => {
      return templatesSelectors.selectById(state, id)
    },
  )
