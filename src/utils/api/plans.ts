import { makeRequest } from './shared'

const plansService = {
  createPlan: plan => makeRequest('/plans', 'POST', plan),
  getPlan: () => makeRequest('/plans', 'GET'),
  updateHabit: update => makeRequest(`/habit/${update.id}`, 'PATCH', update.diff),
  deleteHabit: id => makeRequest(`/habit/${id}`, 'DELETE'),
}

export default plansService
