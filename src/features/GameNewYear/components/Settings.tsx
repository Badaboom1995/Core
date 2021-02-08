import React from 'react'
import { List, Collapse } from 'antd'
import createPlan from '../utils'
const { Panel } = Collapse

function PlanView2({ habits, settings }) {
  const plan = createPlan(habits)
  return (
    <>
      <h2>You will achieve</h2>
      <List>
        {plan.habits.map(item => (
          <List.Item>{item.name}</List.Item>
        ))}
      </List>
      <h2>Stages</h2>
      <Collapse>
        {plan.stages.map(item => (
          <Panel key={item.name} header={item.name}>
            {item.habits.map(item => (
              <p>
                {item.goal.name} <span>{item.goal.duration}</span>
              </p>
            ))}
          </Panel>
        ))}
      </Collapse>
    </>
  )
}

export default PlanView2
