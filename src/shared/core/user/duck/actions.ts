import { createAsyncThunk } from '@reduxjs/toolkit'
import { getHabits } from 'shared/core/habits/duck/actions'
import userService from 'utils/api/user'

export const signUp = createAsyncThunk<any, void>(
  'user/auth',
  async (user, { rejectWithValue, dispatch }) => {
    const res = await userService.createUser(user)
    if (res.user) {
      localStorage.reflectJWT = res.token
      dispatch(getHabits())
      return res
    }
    if (res.error) return rejectWithValue(res)
  },
)

export const logIn = createAsyncThunk<any, any>(
  'user/logIn',
  async (user, { rejectWithValue, dispatch }) => {
    const res = await userService.logIn(user)
    if (res.user) {
      localStorage.reflectJWT = res.token
      dispatch(getHabits())
      return res
    }
    if (res.error) return rejectWithValue(res)
  },
)

export const getProfile = createAsyncThunk<any, void>(
  'user/getProfile',
  async (__, { rejectWithValue }) => {
    if (localStorage.reflectJWT) {
      const res = await userService.getProfile()
      return res
    }
    return rejectWithValue('')
  },
)

export const logOut = createAsyncThunk<any, void>('user/logOut', async () => {
  const res = await userService.logOut()
  localStorage.removeItem('reflectJWT')
  return res
})

export const logOutAll = createAsyncThunk<any, void>('user/logOutAll', async () => {
  const res = await userService.logOutAll()
  if (res.name) localStorage.removeItem('reflectJWT')
  return res
})

export const updateUser = createAsyncThunk<any, any>('user/update', async updates => {
  const res = await userService.updateUser(updates)
  return res
})
