/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react'
import HabitFormView from './view'
import { Form } from 'antd'
import { HabitFormProps } from './type'
import { useHistory } from 'react-router-dom'

const HabitForm = (props: HabitFormProps) => {
  const history = useHistory()
  const [form] = Form.useForm()
  const innerDefault = {
    id: 1,
    name: '',
    duration: '7',
    color: '#4caf50',
    track: {},
    time: 'morning',
    repeat: ['mo', 'tu', 'we', 'th', 'fr', 'st', 'su'],
  }
  const { onSubmit, defaultValues = innerDefault, type, focus } = props

  useEffect(() => {
    form.setFieldsValue(defaultValues)
    form.setFieldsValue({ color: defaultValues.color })
  })

  const onFinish = values => {
    const newHabit = type === 'update' ? { id: defaultValues.id, ...values } : { ...values }
    onSubmit(newHabit)
    history.push('/dashboard/all')
  }
  const onFail = values => {
    console.log(values)
  }
  function onColorChange(color) {
    form.setFieldsValue({ color })
  }

  return (
    <HabitFormView
      onFinish={onFinish}
      onFail={onFail}
      onColorChange={onColorChange}
      type={type}
      focus={focus}
      form={form}
      defaultColor={defaultValues.color}
    />
  )
}

export default HabitForm
