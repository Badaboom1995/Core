import React from 'react'
import { Section, SectionContent, SectionTitle } from '../../styled'
import { Wrapper, ComingSoon } from './styled'
import brain from 'features/Guide/assets/brain.svg'

function Courses() {
  return (
    <Section width="45%">
      <SectionTitle icon={brain}>Курсы</SectionTitle>
      <SectionContent bgcolor="#FFB1B1">
        <Wrapper>
          <ComingSoon>Разбираемся как все устроено. (В разработке)</ComingSoon>
        </Wrapper>
      </SectionContent>
    </Section>
  )
}
export default Courses
