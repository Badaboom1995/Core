import React from 'react'
import HabitCard from '../HabitCard'
import FlipMove from 'react-flip-move'

const HabitListView = props => {
  const { sortedHabits } = props
  return (
    <>
      <FlipMove enterAnimation="fade" leaveAnimation="none" delay={200}>
        {sortedHabits.map(
          habit =>
            !habit.completed && (
              <div key={habit.id}>
                <HabitCard key={habit.id} habit={habit} />
              </div>
            ),
        )}
      </FlipMove>
    </>
  )
}
export default HabitListView
