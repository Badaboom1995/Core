/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit'
import filters from 'features/Navigation/duck'
// import templates from 'features/Library/duck/'
import plan from 'features/PlanMaker/duck/'
import userPlan from 'features/Guide/duck/'
import { InjectedReducersType } from 'utils/types/injector-typings'
import habits from 'shared/core/habits/duck'
import user from 'shared/core/user/duck'
import templates from 'shared/core/templates/duck'
import app from 'app/duck'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    ...injectedReducers,
    ...habits,
    ...user,
    ...app,
    ...filters,
    ...templates,
    ...plan,
    ...userPlan,
  })
}
