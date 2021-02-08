const makePlan = (habitsLink: []): any => {
  const habits = [...habitsLink]

  const options = {
    timePerDay: 15,
    startDuration: 7,
    durationStep: 7,
    timeStep: 5,
    firstTime: true,
  }

  const makeGoal = (habit, goal) => {
    let result = { goal: { ...habit }, actions: [habit] }
    while (result.goal.duration < goal && result.goal.duration !== 'ongoing') {
      if (result.goal.duration < 21) {
        result.goal.duration += options.durationStep
      } else if (result.goal.duration === 21) {
        result.goal.duration = 30
      } else if (result.goal.duration === 30) {
        result.goal.duration = 'ongoing'
      }
      result.goal.stage = 'continue'
      result.actions.push({ ...result.goal })
    }
    return result
  }

  const increaseDuration = (habit, count) => {
    const goal = habit.duration + options.durationStep * count
    return makeGoal(habit, goal)
  }

  const increaseDurationAll = (habits, count) => {
    return habits.map(habit => increaseDuration(habit, count))
  }

  const chooseNextHabit = habits => {
    const freshHabits = habits.filter(item => item.stage === 'start')
    return freshHabits[Math.floor(Math.random() * freshHabits.length)]
  }

  const createFirstStage = habits => {
    let filteredHabits = habits.filter(habit => habit.stage === 'continue' || habit.easy)
    return increaseDurationAll(filteredHabits, 1)
  }

  const createNextStage = (habits, habitsCount = 1, iterations = 2) => {
    const continueHabits = habits.filter(habit => habit.stage === 'continue')
    let habitsCopy = [...habits]
    const nextHabits: any = []
    for (let i = 0; i < habitsCount; i++) {
      const nextHabit = chooseNextHabit(habitsCopy)
      habitsCopy = habitsCopy.filter(item => item !== nextHabit)
      nextHabit && nextHabits.push(nextHabit)
    }
    const stageHabits = [...continueHabits, ...nextHabits]
    return increaseDurationAll(stageHabits, iterations)
  }

  const createThirdStage = habits => {
    let restHabitsCount = habits.filter(habit => habit.stage === 'start').length
    return createNextStage(habits, restHabitsCount)
  }

  const updateState = (state, updates, name?) => {
    type stageType = {
      name: string
      habits: any
    }
    const stage: stageType = { name, habits: updates }
    state.stages.push(stage)
    state.habits.forEach((habit, index) => {
      const indexUpdate = updates.findIndex(updateItem => updateItem.goal.id === habit.id)
      if (indexUpdate > -1) state.habits[index] = updates[indexUpdate].goal
    })
  }

  const createPlan = habits => {
    const state = { habits, stages: [] }
    updateState(state, createFirstStage(state.habits), 'Fundamentals')
    updateState(state, createNextStage(state.habits, 1, 0), 'First steps')
    updateState(state, createThirdStage(state.habits), 'Get speed')
    updateState(state, createNextStage(state.habits, 0), 'Singularity')

    return state
  }
  return createPlan(habits)
}

export default makePlan
