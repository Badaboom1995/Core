import React from 'react'
import { Section, SectionContent, SectionTitle } from 'features/Guide/styled'
import Task from '../Task'
import { PlanHabitType, ToDo, TaskType } from './types'
import { useSelector } from 'react-redux'
import { selectCurrentHabits } from 'shared/core/habits/selectors'
import { checkCompleted } from 'utils/custom'
import task from 'features/Guide/assets/task.svg'
import add from 'assets/add.svg'
import check from 'assets/check.svg'
import { selectPlanHabits } from 'features/Guide/duck/selectors'

function Today() {
  const habits = useSelector(selectCurrentHabits)
  const practices = useSelector(selectPlanHabits)

  // Создать новую привычку
  const getCreateTasks = (habits: PlanHabitType[]): ToDo[] => {
    const inProgress = !!habits.find(item => item.status === 'started')
    if (inProgress) return []
    const currentHabit = habits.find(item => item.status === 'coming')
    if (!currentHabit) return []
    const toDo: ToDo = {
      title: `Начать. ${currentHabit.name}`,
      type: 'create',
      time: 5,
    }
    if (currentHabit.practiceId) toDo.practiceId = currentHabit.practiceId
    return [toDo]
  }

  // Выполнить текущие привычки
  const getActionsTasks = (habits): ToDo[] =>
    habits
      .filter(habit => !checkCompleted(habit.state))
      .map(item => ({ title: `Выполнить. ${item.name}`, type: 'action', time: '5' }))

  // Получить массив из всех задач для отрисовки
  const getTodaysTasks = (): ToDo[] => [...getCreateTasks(practices), ...getActionsTasks(habits)]

  const chooseIcon = (taskType: TaskType) => {
    if (taskType === 'create') return add
    if (taskType === 'action') return check
  }

  const TodaysTasks: ToDo[] = getTodaysTasks()

  return (
    <Section>
      <SectionTitle icon={task}>Задания на сегодня</SectionTitle>
      <SectionContent bgcolor="#D4FFD8">
        {TodaysTasks.length
          ? TodaysTasks.map(item => (
              <Task
                key={item.title}
                name={item.title}
                time={item.time}
                icon={chooseIcon(item.type)}
              />
            ))
          : 'На сегодня все!'}
      </SectionContent>
    </Section>
  )
}
export default Today
