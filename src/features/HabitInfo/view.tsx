import React from 'react'
import { useDispatch } from 'react-redux'
import { Wrapper } from './styled'
import { deleteHabitAsync, updateHabitAsync } from 'shared/core/habits/duck/actions'
import HabitForm from 'shared/components/HabitForm'
import { Button } from 'antd'
import { HabitType } from 'shared/core/habits/types'
import { useHistory } from 'react-router-dom'

type HabitInfoProps = {
  habit: HabitType | null
}
function HabitInfoView(props: HabitInfoProps) {
  const { habit } = props
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <>
      {habit && (
        <Wrapper>
          <button
            onClick={() => {
              history.goBack()
            }}
          >
            back
          </button>
          <div style={{ textAlign: 'center' }}>
            <HabitForm
              onSubmit={habit => {
                dispatch(updateHabitAsync(habit))
              }}
              defaultValues={habit}
              type="update"
            />
            <Button
              onClick={() => {
                dispatch(deleteHabitAsync(habit))
              }}
              danger
              type="text"
              style={{ marginTop: '10px' }}
            >
              Delete
            </Button>
          </div>
        </Wrapper>
      )}
    </>
  )
}
export default HabitInfoView
