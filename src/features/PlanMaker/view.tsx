import React from 'react'
import Stepper from 'shared/components/Stepper'
import { Wrapper } from './styled'
import { Form } from 'antd'
import Welcome from './components/Welcome'
import ChooseGoal from './components/ChooseGoal'
import Time from './components/Time'
import Practice from './components/Practice'
import Custom from './components/Custom'
import Courses from './components/Courses'
// import Total from './components/Total'
import Creating from './components/Creating'
import Ready from './components/Ready'

interface PlanMakerView {
  onFinish: (values: any) => any
  onValuesChange: (props: any) => any
}
function PlanMakerView({ onFinish, onValuesChange }: PlanMakerView) {
  return (
    <Wrapper>
      <Form onValuesChange={onValuesChange}>
        <Stepper>
          <Welcome />
          <ChooseGoal />
          <Practice />
          <Custom />
          <Courses />
          <Time />
          {/* <Total /> */}
          <Creating />
          <Ready onFinish={onFinish} />
        </Stepper>
      </Form>
    </Wrapper>
  )
}
export default PlanMakerView
