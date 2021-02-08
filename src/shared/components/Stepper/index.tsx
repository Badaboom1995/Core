import React, { useRef } from 'react'
import StepperView from './view'
import { SlideWrapper, ContentWrapper } from './styled'

function Stepper(props) {
  const sliderRef = useRef(null)
  var settings = {
    dots: false,
    infinite: false,
    swipe: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
  }
  function next() {
    const sliderObj = sliderRef.current || { slickNext: () => {} }
    sliderObj.slickNext()
  }

  function prev() {
    const sliderObj = sliderRef.current || { slickPrev: () => {} }
    sliderObj.slickPrev()
  }

  const childrenWithProps = React.Children.map(props.children, child => {
    const props = { next, prev }
    if (React.isValidElement(child)) {
      const Component = React.cloneElement(child, props)
      return (
        <SlideWrapper>
          <ContentWrapper>{Component}</ContentWrapper>
        </SlideWrapper>
      )
    }
    return child
  })

  return (
    <StepperView {...props} settings={settings} sliderRef={sliderRef} next={next} prev={prev}>
      {childrenWithProps}
    </StepperView>
  )
}
export default Stepper
