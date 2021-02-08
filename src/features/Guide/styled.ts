import styled from 'styled-components'
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px 0;
  width: 100%;
`
export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
`
export const ProgressBar = styled.div`
  height: 5px;
  width: 100%;
`
type SectionProps = {
  width?: string
}
export const Section = styled.div<SectionProps>`
  margin-bottom: 15px;
  width: ${props => (props.width ? props.width : '100%')};
  margin-right: ${props => props.width && '15px'};
`
type SectionTitleProps = {
  icon?: string
}
export const SectionTitle = styled.h2<SectionTitleProps>`
  font-size: 18px;
  display: flex;
  align-items: center;
  &:before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-image: url(${props => props.icon});
    background-size: cover;
  }
`
type SectionContentProps = {
  bgcolor: string
}
export const SectionContent = styled.div<SectionContentProps>`
  background-color: ${props => props.bgcolor};
  padding: 10px;
  border-radius: 10px;
`
export const Label = styled.div`
  font-size: 14px;
  margin-right: 15px;
  padding: 5px;
`
