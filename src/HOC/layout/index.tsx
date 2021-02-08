/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Layout, MainArea, SecondaryArea } from './styled'
import Navigation from 'features/Navigation'
import HabitInfo from 'features/HabitInfo'
import { useSelector } from 'react-redux'
import { RootState } from 'index'

export const withLayout = Component => (props: any) => {
  const app = useSelector((state: RootState) => state.app)
  const user = useSelector((state: RootState) => state.user)
  const history = useHistory()
  useEffect(() => {
    if (!user.profile && app.status !== 2) history.push('/auth')
    if (user.profile?.new) history.push('/plan/create')
  }, [app.status, history, user])
  return (
    <>
      {user.profile && (
        <Layout>
          <Navigation />
          <MainArea>
            <Component />
          </MainArea>
          <SecondaryArea>
            <Switch>
              <Route path={'/dashboard/*/:id'} children={<HabitInfo />} />
            </Switch>
          </SecondaryArea>
        </Layout>
      )}
    </>
  )
}
