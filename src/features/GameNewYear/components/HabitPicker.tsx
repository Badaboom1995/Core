import { Input, Form } from 'antd'
import React, { useState } from 'react'
import AddedHabit from './AddedHabit'
import { PrimaryButton } from 'shared/components/Button'

function HabitPicker(props) {
  const [form] = Form.useForm()
  const [habits, setHabits]: any[] = useState([])
  const addHabit = (habit: any) => {
    setHabits([...habits, habit])
  }
  const onSubmit = values => {
    const newHabit = {
      id: habits.length,
      stage: 'start',
      duration: 7,
      name: values.name,
    }
    addHabit(newHabit)
    form.setFieldsValue({ name: '' })
  }
  const onDone = () => {
    props.setHabits(habits)
    props.next()
    setTimeout(() => {
      props.next()
    }, 2000)
  }
  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '500px', overflow: 'scroll' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Выберите практики</h2>
        <div style={{ width: '500px' }}>
          <Form form={form} onFinish={onSubmit} style={{ display: 'flex', width: '100%' }}>
            <Form.Item name="name" style={{ flexGrow: 1 }}>
              <Input placeholder="Введите название практики" />
            </Form.Item>
          </Form>
        </div>
        <div style={{ flexGrow: 1, padding: '15px' }}>
          {habits.length ? (
            habits.map(habit => <AddedHabit {...habit} />)
          ) : (
            <p style={{ textAlign: 'center' }}>Пока пусто</p>
          )}
        </div>
      </div>
      <PrimaryButton fullwidth onClick={onDone} type="primary" htmlType="submit">
        Done
      </PrimaryButton>
    </>
  )
}

export default HabitPicker
