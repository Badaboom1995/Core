import { Leo, RegularText } from 'features/PlanConstructor/styled'
import React from 'react'
import { Wrapper } from './styled'
import leo from '../../assets/leo.svg'

function LeoSpeaking(props) {
  return (
    <Wrapper>
      <div>
        <Leo src={leo} style={{ marginRight: '10px' }} />
      </div>
      <RegularText
        style={{
          padding: '10px',
          backgroundColor: '#F4F4F4',
          borderRadius: '5px',
        }}
      >
        {props.children}
      </RegularText>
    </Wrapper>
  )
}
export default LeoSpeaking
