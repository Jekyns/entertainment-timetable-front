import React from 'react'
import TagList from './TagList'
import styled from 'styled-components'

function DayEvent(props) {
  return (
    <>
      <Event bgImage={props.bgImage} lastChild={props.lastChild}>
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
`;


export default DayEvent