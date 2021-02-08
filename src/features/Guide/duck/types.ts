type Habit = {
  name: string
  status: 'coming' | 'started' | 'adopted'
  templatedId?: string
}
export type Plan = {
  habits: Habit[]
  goals: string[]
  courses: string[]
}
