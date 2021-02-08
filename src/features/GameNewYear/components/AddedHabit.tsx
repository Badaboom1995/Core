import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'
import { DeleteOutlined } from '@ant-design/icons'

type HabitCardProps = {
  color?: string
}
export const HabitCard = styled(Card)<HabitCardProps>`
  width: 100%;
  margin-bottom: 10px;
  color: #000;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  .ant-card-body {
    width: 100%;
    padding: 15px;
  }
`

function AddedHabit({ name, color, duration, stage }) {
  return (
    <HabitCard>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flexGrow: 1 }}>{name}</div> <DeleteOutlined style={{ color: 'red' }} />
      </div>
    </HabitCard>
  )
}

export default AddedHabit
