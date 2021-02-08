import React from 'react'
import { PrimaryButton } from 'shared/components/Button'
import { Wrapper, Header, Title, ProgressBar } from './styled'
import Achievments from './components/Achievments'
import Courses from './components/Courses'
import Track from './components/Track'
import Today from './components/Today'
import Progress from './components/Progress'

function GuideView() {
  return (
    <Wrapper>
      <Header>
        <Title>План</Title>
        <div>
          <PrimaryButton type="primary" style={{ marginRight: '10px' }}>
            FAQ
          </PrimaryButton>
          <PrimaryButton type="primary">Pause</PrimaryButton>
        </div>
        <ProgressBar></ProgressBar>
      </Header>
      <Today />
      <Track />
      <Progress />
      <Achievments />
      <Courses />
    </Wrapper>
  )
}
export default GuideView
