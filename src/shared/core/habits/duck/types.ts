export interface Track {
  count: number
  type: string
  name: string
}

export interface State {
  type: string
  date: string
}

export interface HabitType {
  id: string
  name: string
  description: string
  time: 'morning' | 'afternoon' | 'evening' | 'allDay'
  group: boolean
  track: Track
  goal: number
  step: number
  tinySteps: boolean
  neverMissTwice: boolean
  completed: boolean
  color: string
  icon: string
  duration: string
  notifyText: string
  notification: string
  repeat: string[]
  state: State[]
  type: string
  createdAt: string
}
