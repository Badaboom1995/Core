import React, { useState } from 'react'
import { Wrapper, Enemy, Menu, MenuArea, Item, Content, HealthBar } from './styled'
import enemy from '../../assets/monster.svg'
import LeoSpeaking from '../LeoSpeaking'
import hand from '../../assets/hand.svg'
import knife from '../../assets/knife.svg'
import heal from '../../assets/heal.svg'
import gun from '../../assets/gun.svg'
import vaccine from '../../assets/vaccine.svg'
import phone from '../../assets/phone.svg'
import { PrimaryButton } from 'shared/components/Button'

function GameView(props) {
  const [detected, setDetected] = useState(false)
  const [damaged, setDamaged] = useState(false)
  const [enemyPosition, setEnemyPosition] = useState({ left: 60, top: 108 })
  const [enemyClicked, setEnemyClicked] = useState(0)
  const [intervalId, setintervalId] = useState(0)
  const [menuOpened, setmenuOpened] = useState(false)
  const [health, setHealth] = useState(100)
  const [actions, setAction] = useState({
    hand: false,
    vaccine: false,
    heal: false,
    knife: false,
    gun: false,
    phone: false,
  })

  const onClick = () => {
    setEnemyClicked(enemyClicked + 1)

    if (enemyClicked === 0) {
      setDetected(true)
      const intervalIdVar = setInterval(() => {
        console.log(enemyClicked)
        const top = Math.floor(Math.random() * 350)
        const left = Math.floor(Math.random() * 292)
        setEnemyPosition({ left: left, top: top })
      }, 500)
      setintervalId(intervalIdVar)
    }
    if (enemyClicked > 4) {
      clearInterval(intervalId)
      setEnemyPosition({ left: 192, top: 120 })
      setmenuOpened(true)
    }
  }
  const onDamage = e => {
    console.log(e.target)
    console.log(e.target.dataset)
    setDamaged(true)
  }
  const onAction = e => {
    const actionsCopy = { ...actions }
    actionsCopy[e.target.dataset.value] = true
    setAction(actionsCopy)
    setHealth(health - e.target.dataset.damage)
  }
  const firstPhrase = ` Рад видеть тебя в наших рядах! Чтобы обезвредить 2020-й сперва нужно его обнаружить. Кажется он прячется где-то в лесу.`
  const secondPhrase = `Мы его спугнули! Скорее, лови его пока он не сбежал! Нажми на него 5 раз чтобы он остановился.`
  const thirdPhrase = `Отлично! Ты остановил его, что дальше?`
  const fourthPhrase = `Попробуй еще раз, он крепче чем кажется. Или просто заверши миссию.`
  const fifthPhrase = `Кажется одному тут не справиться, переходи дальше.`

  const firstTask = ` Найди 2020 и отметь кликом`
  const secondTask = `Поймай его ${enemyClicked - 1}/5`
  const thirdTask = ` Выбери действие`

  return (
    <Wrapper>
      <LeoSpeaking>
        {!detected && firstPhrase}
        {detected && !damaged && enemyClicked < 6 && secondPhrase}
        {detected && enemyClicked > 5 && !damaged && thirdPhrase}
        {detected && enemyClicked > 5 && damaged && health > 49 && fourthPhrase}
        {detected && enemyClicked > 5 && damaged && health < 50 && fifthPhrase}
      </LeoSpeaking>
      <Content>
        <p style={{ textAlign: 'center', backgroundColor: '#fff', padding: '5px' }}>
          {enemyClicked === 0 && firstTask}
          {enemyClicked < 6 && enemyClicked !== 0 && secondTask}
          {enemyClicked > 5 && enemyClicked !== 0 && thirdTask}
        </p>
        <div
          style={{
            position: 'absolute',
            top: enemyPosition.top,
            left: enemyPosition.left,
            transition: '1s all ease',
          }}
        >
          <HealthBar health={health} stopped={enemyClicked > 5} />
          <Enemy
            src={enemy}
            small={!detected}
            onClick={onClick}
            // style={{ top: enemyPosition.top, left: enemyPosition.left }}
            health={health}
            stopped={enemyClicked > 5}
          />
        </div>
        {/* <Enemy
          src={enemy}
          small={!detected}
          onClick={onClick}
          style={{ top: enemyPosition.top, left: enemyPosition.left }}
          health={health}
          stopped={enemyClicked > 5}
        /> */}
        <Menu onClick={onDamage} open={menuOpened}>
          {/* <MenuArea style={{ backgroundColor: '#00B295' }}>
            <Item
              data-value="hand"
              data-damage={0}
              onClick={onAction}
              src={hand}
              choosed={actions.hand}
            >
              Погладить
            </Item>
            <Item
              data-value="vaccine"
              data-damage={0}
              onClick={onAction}
              src={vaccine}
              choosed={actions.vaccine}
            >
              Привить
            </Item>
            <Item
              data-value="heal"
              data-damage={0}
              onClick={onAction}
              src={heal}
              choosed={actions.heal}
            >
              Приложить
            </Item>
          </MenuArea> */}
          <MenuArea style={{ justifyContent: 'space-between' }}>
            <Item
              data-value="knife"
              data-damage={20}
              onClick={onAction}
              src={knife}
              choosed={actions.knife}
            >
              Ударить
            </Item>
            <Item
              data-value="gun"
              data-damage={30}
              onClick={onAction}
              src={gun}
              choosed={actions.gun}
            >
              Выстрелить
            </Item>
            <Item
              data-value="phone"
              data-damage={40}
              onClick={onAction}
              src={phone}
              choosed={actions.phone}
            >
              Кинуть
            </Item>
          </MenuArea>
        </Menu>
      </Content>
      {damaged && (
        <PrimaryButton
          onClick={() => {
            props.next()
          }}
          type="primary"
          htmlType="submit"
        >
          Звершить миссию
        </PrimaryButton>
      )}
    </Wrapper>
  )
}
export default GameView
