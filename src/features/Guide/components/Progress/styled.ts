import styled from 'styled-components'
export const Wrapper = styled.div``
export const Item = styled.div``
export const Table = styled.table`
  width: 100%;
`
type RowProps = {
  coming?: boolean
}
export const Row = styled.tr<RowProps>`
  opacity: ${props => props.coming && '0.5'};
`
export const Cell = styled.td`
  padding: 10px;
  text-align: center;
  &:first-child {
    text-align: left;
  }
`
export const Head = styled.thead`
  ${Cell} {
    padding: 25px 10px;
    font-weight: bold;
    font-size: 16px;
  }
`
export const Body = styled.tbody``
