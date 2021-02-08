import React from 'react'
import { Wrapper, Instruction, InstructionTitle, List, ListItem } from './styled'
import { TextArea, Picture, Paragraph, Title, Content } from 'features/PlanMaker/styled'
import ready from 'features/PlanMaker/assets/ready.jpg'
import { PrimaryButton } from 'shared/components/Button'

function Ready(props) {
  return (
    <Wrapper>
      <Picture src={ready} />
      <TextArea>
        <Title>План готов!</Title>
        <Paragraph>
          Мы подготовили несколько правил и советов, которые помогут тебе успешно следовать плану.
          Прочти их прежде чем начать.
        </Paragraph>
      </TextArea>
      <Content>
        <Instruction>
          <InstructionTitle></InstructionTitle>
          <List>
            <ListItem>
              <b>Одна привычка за раз.</b> На освоение одной привычки уходит 21 день или больше. Не
              переходи к следующей привычке пока не почувствуешь себя уверенно с текущей.
            </ListItem>
            <ListItem>
              <b>Не пропускай дважды.</b> Бывают дни когда никак не получатся выполнить ежедневную
              практику. Это нормально. Но постарайся не пропускать больше 1-2 дней подряд. После
              пропуска просто вернись к практикам, не осуждай себя и не ругай.
            </ListItem>
            <ListItem>
              <b>Концентрируйся на старте.</b> Худшая практика - та, которой не было. Твоя главная
              задача это начать. Прочитать одну строчку книги гораздо лучше чем не прочитать ничего.
            </ListItem>
            <ListItem>
              <b>Двигайся отрезками.</b> Наш мозг боится больших задач. По очереди закрывай 7, 14,
              21 и 30 дней практики. Так ты сможешь продолжать достаточно долго чтобы довести ее до
              автоматизма.
            </ListItem>
          </List>
          <InstructionTitle>Важно</InstructionTitle>
          <List>
            <ListItem>
              <b>Не ругай себя.</b> Если что то не получается - это нормально. Просто продолжай на
              следующий день. Главное не бросать после пары пропусков.
            </ListItem>
            <ListItem>
              <b>Начни с малого.</b> Начни с 1 минуты практики в день. Звучит странно, но именно так
              ты сможешь действовать в любой ситуации. Даже с плохим настроением и после тяжелого
              дня.
            </ListItem>
            <ListItem>
              <b>Кайфуй!</b> Саморазвитие это не про страдания и боль, а про любовь к себе и
              маленькие осознанные действия, которые приносят тебе радость. Концентрируйся на
              процессе и заметишь, что выполнение практик приносит тебе удовольствие. Когда
              почувствуешь это тебя будет уже не остановить!
            </ListItem>
          </List>
        </Instruction>
      </Content>

      <PrimaryButton type="primary" fullwidth onClick={props.onFinish}>
        Вперед к приключениям!
      </PrimaryButton>
    </Wrapper>
  )
}
export default Ready
