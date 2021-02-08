import { HomePage } from 'pages/Dashboard'
import { Auth } from 'pages/Auth'
import { Plan } from 'pages/Plan'
import { NotFoundPage } from 'pages/NotFoundPage'
import PlanMaker from 'features/PlanMaker'

export const mainRoutes = [
  {
    path: '/dashboard',
    component: HomePage,
    title: 'Dashboard',
  },
  {
    path: '/',
    component: HomePage,
    title: 'Dashboard',
    exact: true,
  },
  {
    path: '/plan',
    component: Plan,
    title: 'Plan',
    exact: true,
  },
  {
    path: '/plan/create',
    component: PlanMaker,
    title: 'PlanMaker',
    blankPage: true,
  },
  {
    path: '/auth',
    component: Auth,
    blankPage: true,
  },
  {
    path: '*',
    component: NotFoundPage,
    blankPage: true,
  },
]
