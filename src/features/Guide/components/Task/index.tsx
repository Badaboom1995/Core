import React from 'react'
import { Wrapper, Link, Time, RightSection } from './styled'
import { ITask } from './types'
import Dot from 'shared/components/Dot'

function Task({ icon, name, time, state }: ITask) {
  return (
    <Wrapper icon={icon}>
      <Link icon={icon}>{name}</Link>
      <RightSection>
        {/* <Time>{`${time} минут`}</Time> */}
        <Dot status={state} />
      </RightSection>
    </Wrapper>
  )
}
export default Task
