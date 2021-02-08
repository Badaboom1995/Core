import React from 'react'
import LeoSpeaking from '../LeoSpeaking'
import { Wrapper, StatsBlock, StatsItem, StatsTitle } from './styled'
import knife from '../../assets/knife.svg'
import gun from '../../assets/gun.svg'
import phone from '../../assets/phone.svg'
import { PrimaryButton } from 'shared/components/Button'

function StatisticsView(props) {
  const urls = [knife, gun, phone]
  const generateActions = () => {
    const actions: any = []
    for (let i = 0; i < 112; i++) {
      const urlId = Math.floor(Math.random() * 3)
      actions.push(urls[urlId])
    }
    return actions
  }
  return (
    <Wrapper>
      <LeoSpeaking>
        Мы близки к победе, позови друзей на помощь!
        <div
          style={{ padding: '10px 0' }}
          className="ya-share2"
          data-curtain
          data-shape="round"
          data-services="vkontakte,facebook,telegram,twitter"
        ></div>
      </LeoSpeaking>
      {/* <Title>Предыдущие пользователи</Title> */}
      <StatsBlock>
        <StatsTitle>Уже прошли 112 человек</StatsTitle>
        {generateActions().map((url, index) => (
          <StatsItem key={index}>
            <img src={url} alt="" />
          </StatsItem>
        ))}
      </StatsBlock>
      <PrimaryButton
        onClick={() => {
          props.next()
        }}
        type="primary"
        fullwidth
      >
        Дальше
      </PrimaryButton>
    </Wrapper>
  )
}
export default StatisticsView
