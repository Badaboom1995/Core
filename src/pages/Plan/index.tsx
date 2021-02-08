import React from 'react'
import { Helmet } from 'react-helmet-async'
import Guide from 'features/Guide'

export function Plan() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="create a plan" />
      </Helmet>
      <Guide />
    </>
  )
}
