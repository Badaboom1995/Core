import React from 'react'
import { Wrapper, StatusItem } from './styled'
import moment from 'moment'

type StatusProps = {
  status: any
}

const Status = (props: StatusProps) => {
  const createWeekStatus = currentStatus => {
    const weekStatus: any[] = []
    const currentWeekStatus = currentStatus.filter(item =>
      moment(item.date).isAfter(moment().isoWeekday(0).toString(), 'day'),
    )
    for (let i = 0; i < 7; i++) {
      const currentDay = currentWeekStatus.find(item =>
        moment(item.date).isSame(
          moment()
            .isoWeekday(i + 1)
            .toString(),
          'day',
        ),
      )
      const type = currentDay ? currentDay.type : 'coming'
      const date = moment().isoWeekday(i)
      weekStatus.push({ type, date })
    }
    return weekStatus
  }
  return (
    <Wrapper>
      {createWeekStatus(props.status).map(item => (
        <StatusItem key={item.date} type={item.type} />
      ))}
    </Wrapper>
  )
}

export default Status
