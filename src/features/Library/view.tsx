import React, { useRef, useState } from 'react'
import { Wrapper, Item, Body, Footer, Content, HabitTitle, Benefit } from './styled'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { PrimaryButton } from 'shared/components/Button'
import { Collapse } from 'antd'
import HabitForm from 'shared/components/HabitForm/'
import { selectTemplateById } from 'shared/core/templates/selectors'

const { Panel } = Collapse

type LibraryyViewProps = {
  templates: any
  onSubmit: (habit: any, callback) => void
}

function LibraryView({ templates, onSubmit }: LibraryyViewProps) {
  //Tech Debt. Move to INDEX
  const [habitId, setId] = useState(undefined)
  const slider = useRef(null)
  const currentHabit = useSelector(selectTemplateById(habitId))

  function next() {
    const sliderObj = slider.current || { slickNext: () => {} }
    sliderObj.slickNext()
  }
  function prev() {
    const sliderObj = slider.current || { slickPrev: () => {} }
    console.log(sliderObj)
    sliderObj.slickPrev()
  }

  async function onHabitChoose(id) {
    setId(id)
    setTimeout(() => {
      next()
    }, 100)
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  }
  //Tech Debt

  return (
    <Wrapper>
      <Slider ref={slider} {...settings}>
        <div>
          <Content>
            {templates.map(item => (
              <Item
                onClick={() => {
                  onHabitChoose(item.id)
                }}
                hoverable
                bg={item.bgImage}
              >
                <p>{item.name}</p>
                <span>{item.previewText}</span>
              </Item>
            ))}
          </Content>
        </div>
        <div>
          <Content>
            <Body>
              <HabitTitle>
                {currentHabit?.name}
                <PrimaryButton onClick={() => next()} type="primary">
                  Add
                </PrimaryButton>
              </HabitTitle>
              <div
                dangerouslySetInnerHTML={{ __html: currentHabit ? currentHabit.description : '' }}
              ></div>
              <Collapse defaultActiveKey={['1']} ghost>
                <Panel style={{ fontWeight: 'bold' }} header="Benefits" key="1">
                  {currentHabit?.benefits.map(item => (
                    <Benefit>{item.title}</Benefit>
                  ))}
                </Panel>
                <Panel style={{ fontWeight: 'bold' }} header="Tips" key="2">
                  {currentHabit?.tips.map(item => (
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </Panel>
              </Collapse>
            </Body>
            <Footer>
              <Button
                style={{ display: 'flex', alignItems: 'center' }}
                icon={<ArrowLeftOutlined />}
                type="text"
                onClick={prev}
              >
                back
              </Button>
            </Footer>
          </Content>
        </div>
        <div>
          <Content>
            <Body>
              <HabitForm
                onSubmit={habit => onSubmit(habit, () => {})}
                defaultValues={{
                  name: currentHabit ? currentHabit.name : '',
                  duration: '7',
                  color: '#4caf50',
                  track: {},
                  time: 'morning',
                  repeat: ['mo', 'tu', 'we', 'th', 'fr', 'st', 'su'],
                }}
                type="create"
              ></HabitForm>
            </Body>
            <Footer>
              <Button
                style={{ display: 'flex', alignItems: 'center' }}
                icon={<ArrowLeftOutlined />}
                type="text"
                onClick={prev}
              >
                back
              </Button>
            </Footer>
          </Content>
        </div>
      </Slider>
    </Wrapper>
  )
}
export default LibraryView
