import styled from 'styled-components'
import back from '../../assets/gameBack.jpg'
import { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100vh;
`
export const Content = styled.div`
  position: relative;
  background-image: url(${back});
  background-size: cover;
  background-position: center;
  height: 470px;
  /* flex-grow: 1; */
  width: 355px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 10px;
  overflow: hidden;
`

const here = keyframes` {
  0% { transform:translate(0,0) }
 1.78571% { transform:translate(1px,0) }
 3.57143% { transform:translate(0,0) }
 5.35714% { transform:translate(2px,0) }
 7.14286% { transform:translate(0,0) }
 8.92857% { transform:translate(1px,0) }
 10.71429% { transform:translate(0,0) }
 100% { transform:translate(0,0) }
}`
const action = keyframes` {
  0% { position: absolute; left: 0px; top: 0px; opacity:1; }
 95% { position: absolute; left: 190px; top: -250px; opacity:1; }
 100% { position: absolute; left: 190px; top: -250px;opacity:0; }
}`

type EnemyProps = {
  small?: boolean
  health: number
  stopped: boolean
}
export const Enemy = styled.img<EnemyProps>`
  width: ${props => (props.small ? '55px' : '85px')};
  /* position: absolute; */
  /* left: ${props => (props.small ? '60px' : '192px')};
  top: ${props => (props.small ? '108px;' : '120px')}; */
  transition: 1s all ease;
  opacity: ${props => (props.small ? '0.5' : '1')};
  animation-name: ${props => props.small && here};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: #fff;
  }
`
type MenuProps = {
  open?: boolean
}
export const Menu = styled.div<MenuProps>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 1s all ease;
  bottom: ${props => (props.open ? '0px' : '-165px')};
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(30, 30, 30, 0.7);
`
type HealthBarProps = {
  health?: number
  stopped?: boolean
}
export const HealthBar = styled.div<HealthBarProps>`
  display: block;
  opacity: ${props => (props.stopped ? '1' : '0')};
  transition: 1s all ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 5px;
  background-color: #fff;
  &:before {
    content: '';
    display: block;
    width: ${props => props.health}%;
    height: 5px;
    background-color: #00f5b4;
    transition: 0.5s all ease;
  }
`
type MenuAreaProps = {
  border?: boolean
}
export const MenuArea = styled.div<MenuAreaProps>`
  display: flex;
  /* position: relative; */
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
`
type ItemProps = {
  src?: any
  choosed?: boolean
  'data-value': string
}
// const action = `position: absolute; left: 190px; top: -250px;opacity:0;`

export const Item = styled.div<ItemProps>`
  position: relative;
  top: 0;
  left: 0;
  width: 50px;
  text-align: center;
  color: #fff;
  padding: 10px 0;
  margin: 5px;
  font-size: ${props => (props.choosed ? '0' : '8px')};
  opacity: 1;
  transition: 0.5s all ease-in-out;
  animation-name: ${props => props.choosed && action};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;  
  /* ${props => props.choosed && action} */
  &:before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 5px;
    background-image: url(${props => props.src});
    background-size: contain;
    opacity: 1;
  }
`
