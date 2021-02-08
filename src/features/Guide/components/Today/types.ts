export type PlanHabitType = {
  name: string
  practiceId?: string
  status: 'adopted' | 'started' | 'coming'
}
export type PlanType = {
  habits: any[]
}
export type TaskType = 'create' | 'lesson' | 'action'
export type ToDo = {
  title: string
  type: 'create' | 'lesson' | 'action'
  time: number
  practiceId?: string
}
export type AccumType = ToDo[]

export interface ITask {
  icon?: string
  name: string
  time: string
  state?: 'skipped' | 'completed'
}
