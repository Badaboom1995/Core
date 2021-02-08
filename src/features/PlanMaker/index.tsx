import React, { useEffect } from 'react'
import PlanMakerView from './view'
import { setValues } from './duck/slice'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from 'shared/core/user/duck/actions'
import { createPlan } from 'features/Guide/duck/actions'
import { useHistory } from 'react-router-dom'
import { RootState } from 'index'
import { selectTemplates } from 'shared/core/templates/selectors'
import { getNormalizedHabitName } from 'utils/custom'

function PlanMaker() {
  let history = useHistory()
  const dispatch = useDispatch()
  const UserIsNew = useSelector((state: RootState) => state.user.profile?.new)
  const plan = useSelector((state: RootState) => state.PlanMaker.plan)
  const templates = useSelector(selectTemplates)

  useEffect(() => {
    if (!UserIsNew) history.push('/plan')
  }, [UserIsNew, history])

  const onFinish = (values: any) => {
    const { goals, courses, time } = plan
    const pracitces = plan.practices
      .map(id => templates.find(template => template.id === id))
      .map(item => ({ name: item.name, templateId: item.id }))
    const custom = plan.custom.map(item => ({ name: getNormalizedHabitName(item) }))
    const habits = [...pracitces, ...custom].map(item => ({ ...item, status: 'coming' }))
    const planForCreate = {
      habits,
      goals,
      courses,
      time,
    }
    dispatch(updateUser({ new: false }))
    dispatch(createPlan(planForCreate))
  }
  const onValuesChange = (result: any) => {
    dispatch(setValues(result))
  }
  return (
    <div>
      <PlanMakerView onFinish={onFinish} onValuesChange={onValuesChange} />
    </div>
  )
}
export default PlanMaker
