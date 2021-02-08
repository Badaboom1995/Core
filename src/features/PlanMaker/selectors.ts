import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'index'

export const selectActiveFilters = () => {
  return createSelector(
    (state: RootState) => state.filters,
    filters => filters,
  )
}
