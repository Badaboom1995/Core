import React from 'react'
import { Section, SectionContent, SectionTitle } from 'features/Guide/styled'
import { Wrapper, ComingSoon } from './styled'
import prize from 'features/Guide/assets/prize.svg'

function Achievments() {
  return (
    <Section width="49%">
      <SectionTitle icon={prize}>Достижения</SectionTitle>
      <SectionContent bgcolor="#FFA3E5">
        <Wrapper>
          <ComingSoon> Место для твоих трофеев. (В разработке) </ComingSoon>
        </Wrapper>
      </SectionContent>
    </Section>
  )
}
export default Achievments
