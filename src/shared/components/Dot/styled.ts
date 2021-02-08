import styled from 'styled-components'
import { Status } from './types'

const chooseFillColor = status => {
  if (status === 'skipped') return '#444'
  if (status === 'completed') return '#75D926'
  return 'transparent'
}
type CircleProps = {
  status?: Status
  endBlock?: boolean
  big?: boolean
}
export const Circle = styled.div<CircleProps>`
  display: inline-block;
  width: ${props => (props.big ? '23px' : '15px')};
  height: ${props => (props.big ? '23px' : '15px')};
  border: 1px solid #000;
  border-radius: 50%;
  background-color: ${props => chooseFillColor(props.status)};
  margin-right: ${props => (props.endBlock ? '15px' : '5px')};
  opacity: ${props => props.status === 'disabled' && '0.2'};
`
