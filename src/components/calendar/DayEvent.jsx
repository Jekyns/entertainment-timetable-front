import React from 'react'
import TagList from './TagList'
import styled from 'styled-components'

function DayEvent(props) {
  return (
    <>
      <Event
        bgImage={props.bgImage}
        imageSettings={props.imageSettings}
        lastChild={props.lastChild}
      >
        <div className="event__title">
          <span className="event__title-span">{props.title}</span>
        </div>
        {/* <img src={props.bgImage}/> */}
        <TagList tags={props.tags} />
      </Event>
    </>
  )
}

const Event = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${props => props.bgImage ? `url(${props.bgImage})` : 'transparent'};
  background-size: cover;
  min-height: 250px;
  &:last-child {
      grid-area: ${props => props.lastChild};
    }
    &:first-child {
      grid-area: unset;
    }
  ${props => props.imageSettings ?
    `${props.imageSettings.bgSize ? `background-size: ${props.imageSettings.bgSize};` : 'background-size: cover;'}
    ${props.imageSettings.bgPositionX ? `background-position-x: ${props.imageSettings.bgPositionX}${props.imageSettings.bgPositionUnit || 'px'};` : ''}
    ${props.imageSettings.bgPositionY ? `background-position-y: ${props.imageSettings.bgPositionY}${props.imageSettings.bgPositionUnit || 'px'};` : ''}
    ${props.imageSettings.bgRepeat ? `background-repeat: ${props.imageSettings.bgRepeat};` : 'background-repeat: no-repeat;'}
    `
    : ''}
`;


export default DayEvent