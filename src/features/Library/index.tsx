import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTemplates } from 'shared/core/templates/duck/actions'
import LibraryView from './view'
import { useSelector } from 'react-redux'
import { selectTemplates } from 'shared/core/templates/selectors'

type LibraryProps = {
  onSubmit: (habit: any, callback: any) => void
}

function Library({ onSubmit }: LibraryProps) {
  const templates = useSelector(selectTemplates)
  console.log(templates)
  const dispatch = useDispatch()
  const onAdd = (habit, callback) => {
    onSubmit(habit, callback)
  }

  useEffect(() => {
    if (!templates.length) dispatch(getTemplates())
  }, [dispatch, templates.length])

  return <LibraryView templates={templates} onSubmit={onAdd} />
}
export default Library
