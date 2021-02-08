import { createSlice } from '@reduxjs/toolkit'
import { User } from '../types'
import * as actions from './actions'
import { makeReducer } from 'utils/custom'
import { toast } from 'react-toastify'

const { logIn, logOut, signUp, getProfile, updateUser } = actions

type UserState = {
  profile: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  loading: false,
  error: null,
  profile: null,
}

const habitsSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    // Auth
    makeReducer(
      builder,
      signUp,
      (state, payload) => {
        state.profile = payload.user
      },
      action => {
        console.log('error')
      },
    )
    // GetProfile
    makeReducer(
      builder,
      getProfile,
      (state, payload) => {
        state.profile = payload
      },
      action => {
        console.log('error')
      },
    )
    // logIn
    makeReducer(
      builder,
      logIn,
      (state, payload) => {
        state.profile = payload.user
      },
      (state, action) => {
        toast.error(action.payload.error.text)
        console.log(action)
      },
    )
    // logOut
    makeReducer(
      builder,
      logOut,
      (state, payload) => {
        console.log('logOut')
        state.profile = null
      },
      state => {
        console.log('error')
      },
    )
    makeReducer(
      builder,
      updateUser,
      (state, payload) => {
        state.profile = payload
      },
      state => {
        console.log('error')
      },
    )
  },
})

export default habitsSlice
