import React from 'react'
import { Collapse, Button } from 'antd'
import createPlan from '../utils'
const { Panel } = Collapse

function PlanView(props) {
  const plan = createPlan(props.habits)
  return (
    <>
      <h3>Habits: {plan.stages[plan.stages.length - 1].habits.length}</h3>
      <h3>Best practices: 2</h3>
      <h3>Estimated times: 90 days</h3>
      <h2>Stages</h2>
      <Collapse>
        {plan.stages.map(item => {
          return item.habits.length ? (
            <Panel key={item.name} header={item.name}>
              {item.habits.map(item => (
                <p>
                  {item.goal.name} <span>{item.goal.duration}</span>
                </p>
              ))}
            </Panel>
          ) : (
            ''
          )
        })}
      </Collapse>
      <Button onClick={props.next}>Submit</Button>
    </>
  )
}

export default PlanView
