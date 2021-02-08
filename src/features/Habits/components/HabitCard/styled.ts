import styled from 'styled-components'
import { Button } from 'antd'
import { lighten } from 'polished'
import { Checkbox } from 'antd'
import streak from '../../assets/streak.svg'
import { Link } from 'react-router-dom'

type WrapperProps = {
  currentStatus: string
}
export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  opacity: ${props => (props.currentStatus ? '0.5' : '1')};
  overflow: hidden;
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding-left: 20px;
  margin-top: 10px;
  transition: 0.3s all ease;
  @media screen and (max-width: 767px) {
    padding-left: 4px;
  }
  label {
    text-decoration: ${props => (props.currentStatus === 'completed' ? 'line-through' : 'none')};
  }
`
type ProgressBarProps = {
  color: string
  percent: number
}
export const ProgressBar = styled.div<ProgressBarProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${props => (props.percent > 6.5 ? props.percent : 8)}%;
  height: 100px;
  background-color: ${props => props.color};
  z-index: 0;
  transition: 0.3s all ease-in-out;
`
export const LeftBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
`
export const StyledLink = styled(Link)`
  position: absolute;
  cursor: pointer;
  left: 0;
  top: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100px;
  color: inherit;
  &:hover,
  &:active,
  &:focus {
    color: inherit;
  }
`
export const RightBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
type CheckboxProps = {
  skipped?: boolean
}
export const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  display: flex;
  align-items: center;
  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border: none;
    @media screen and (max-width: 767px) {
      transform: scale(0.7);
    }
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #fff;
    border: none;
  }
  .ant-checkbox-checked::after {
    border: none;
  }
  .ant-checkbox-inner {
    &:after {
      top: ${props => (props.skipped ? '9.5px' : '45%')};
      width: ${props => (props.skipped ? '3.5px' : '7px')};
      left: ${props => props.skipped && '4.6px'};
      height: 13px;
      border-color: #000;
      border: ${props => props.skipped && 'none'};
      border-right: ${props => props.skipped && '2px solid black'};
    }
    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 13px;
      width: ${props => (props.skipped ? '3.5px' : '7px')};
      height: 13px;
      border-color: #000;
      border: ${props => props.skipped && 'none'};
      transform: rotate(-45deg) scale(1) translate(-50%, -50%);
      border-right: ${props => props.skipped && '2px solid black'};
    }
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: transparent;
  }
`
export const Title = styled.span`
  position: relative;
  z-index: 2;
  font-size: 18px;
  padding: 15px;
  color: #000;
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
    font-size: 14px;
    padding: 0px;
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  padding: 5px 15px;
  span {
    padding: 3px 0px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const StreakIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 9px;
  background-size: 12px 9px;
  background-image: url(${streak});
`
type SkipProps = {
  themename: string
}
export const Skip = styled(Button)<SkipProps>`
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  background: ${props => props.theme[props.themename].primary};
  color: #fff;
  border: none;
  border-radius: 0 10px 10px 0;
  padding: 15px 10px;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  &[disabled] {
    background-color: ${props => props.theme[props.themename].primary};
    color: #fff;
    &:hover,
    &:focus {
      background: ${props => props.theme[props.themename].primary};
      color: #fff;
    }
  }
  &:hover,
  &:focus {
    background: ${props => lighten(0.3, props.theme[props.themename].primary)};
    color: #fff;
  }
`
export const SkipLabel = styled.span`
  font-size: 12px;
  margin-left: 10px;
  position: absolute;
`
