export interface ITask {
  icon?: string
  name: string
  time: number
  state?: 'skipped' | 'completed'
}
