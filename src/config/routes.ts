import { HomePage } from 'pages/Dashboard'
import { Auth } from 'pages/Auth'
import { NotFoundPage } from 'pages/NotFoundPage'
import { Plan } from 'pages/Plan'

export const mainRoutes = [
  {
    path: '/dashboard',
    component: HomePage,
    title: 'Dashboard',
  },
  // {
  //   path: '/',
  //   component: HomePage,
  //   title: 'Dashboard',
  //   exact: true,
  // },
  {
    path: '/',
    component: Plan,
    title: 'Plan',
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
