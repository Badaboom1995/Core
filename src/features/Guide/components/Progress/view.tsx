import React from 'react'
import { Section, SectionContent, SectionTitle } from 'features/Guide/styled'
import { Table, Head, Body, Row, Cell } from './styled'
import mountain from 'features/Guide/assets/mountain.svg'
import Dot from 'shared/components/Dot'

function ProgressView(props) {
  console.log(props.practices)
  return (
    <Section>
      <SectionTitle icon={mountain}>Прогресс</SectionTitle>
      <SectionContent bgcolor="#D9E2FB">
        <Table>
          <Head>
            <Row>
              <Cell>Практика</Cell>
              <Cell>7 дней</Cell>
              <Cell>14 дней</Cell>
              <Cell>21 день</Cell>
              <Cell>30 дней</Cell>
            </Row>
          </Head>
          <Body>
            {props.practices &&
              props.practices.map((item, index) => (
                <Row key={index} coming={item.status === 'coming'}>
                  <Cell>{item?.name}</Cell>
                  {props.getHabitProgress(item?.name).map((item, index) => (
                    <Cell key={index}>
                      <Dot big status={item ? 'completed' : undefined} />
                    </Cell>
                  ))}
                </Row>
              ))}
          </Body>
        </Table>
      </SectionContent>
    </Section>
  )
}
export default ProgressView
