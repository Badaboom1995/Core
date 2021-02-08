import React from 'react'
import { Wrapper, State, Empty } from './styled'
import { useSelector } from 'react-redux'
import { selectCurrentHabits } from 'shared/core/habits/selectors'
import { Section, SectionContent, SectionTitle, Label } from 'features/Guide/styled'
import Dot from 'shared/components/Dot'

import current from 'features/Guide/assets/current.svg'

function Track() {
  const habits = useSelector(selectCurrentHabits)
  const getState = habit => {
    const state: any[] = []
    for (let i = 0; i < 30; i++) {
      if (habit.state[i]) {
        state.push({ status: habit.state[i].type })
        continue
      }
      if (parseInt(habit.duration) <= i) {
        state.push({ status: 'disabled' })
        continue
      }
      state.push({ status: 'coming' })
    }
    return state
  }

  return (
    <Section>
      <SectionTitle icon={current}>Трекер</SectionTitle>
      <SectionContent bgcolor="#FDF28D">
        {Object.keys(habits).length ? (
          Object.keys(habits).map((key, index) => {
            const currentHabit: any = habits[key]
            return (
              <Wrapper key={index}>
                <Label style={{ width: '20%' }}>{currentHabit.name}</Label>
                <State>
                  {getState(currentHabit).map((item, index) => (
                    <Dot status={item.status} key={index} endBlock={(index + 1) % 7 === 0} />
                  ))}
                </State>
              </Wrapper>
            )
          })
        ) : (
          <Empty>Создай новую привычку, чтобы тут не было так пусто</Empty>
        )}
      </SectionContent>
    </Section>
  )
}
export default Track
