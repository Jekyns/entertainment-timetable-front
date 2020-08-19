import React from 'react'
import TagList from './TagList'
import styled from 'styled-components'

function DayEvent(props) {
  return (
    <Event bgImage={props.bgImage}>
      <div className="event__title">
        <span className="event__title-span">{props.title}</span>
      </div>
      <TagList text="You" bgColor="#fff" color="#333" />
    </Event>
  )
}

const Event = styled.div`
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${props => props.bgImage ? `url(${props.bgImage})`:'transparent'};
  background-size: cover;
  border-radius: 25px;
`;


export default DayEvent