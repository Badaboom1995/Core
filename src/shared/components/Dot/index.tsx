import React from 'react'
import { Circle } from './styled'
import { Status } from './types'

type DotProps = { status?: Status; endBlock?: boolean; big?: boolean }
function Dot(props: DotProps) {
  return <Circle {...props} />
}
export default Dot
