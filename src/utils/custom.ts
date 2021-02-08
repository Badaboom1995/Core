/* eslint-disable react/jsx-props-no-spreading */
import moment from 'moment'

export const checkCompleted = (state: any[]): boolean => {
  return state.length
    ? moment(state[state.length - 1].date).isSame(moment().toString(), 'day')
    : false
}

export const normalizeData = <T extends { id?: string; _id?: string }>(entities: T[]): T[] => {
  return entities.map(item => {
    item.id = item._id
    delete item._id
    return item
  })
}

export const getNormalizedHabitName = (rawName: string): string => {
  const removedSpaces = rawName.replace(/\s/g, '')
  return `${removedSpaces.charAt(0).toUpperCase()}${removedSpaces.slice(1)}`
}

export const getCurrentStatus = (state: any[]): string => {
  const isCompleted = checkCompleted(state)
  if (!isCompleted) return ''
  return state[state.length - 1].type
}

export const makeReducer = (
  builder,
  action,
  onSuccess: (state: any, payload: any) => any,
  onFail,
) => {
  builder.addCase(action.pending, (state, action) => {
    // state.loading = true
  })
  builder.addCase(action.fulfilled, (state, action) => {
    // state.loading = false
    onSuccess(state, action.payload)
  })
  builder.addCase(action.rejected, (state, action) => {
    // state.loading = false
    onFail(state, action)
  })
}
