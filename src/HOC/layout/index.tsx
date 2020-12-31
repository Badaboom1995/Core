/* eslint-disable no-template-curly-in-string */
import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Layout, MainArea, SecondaryArea } from './styled'
import Navigation from 'features/Navigation'
import HabitInfo from 'features/HabitInfo'
import { useSelector } from 'react-redux'
import { RootState } from 'index'

type WithLayoutProps = {}

export const withLayout = Component => (props: any) => {
  const user = useSelector((state: RootState) => state.user)
  const history = useHistory()
  useEffect(() => {
    // if (!user.profile) history.push('/auth')
  }, [history, user])
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
