import React from 'react'
import styled from 'styled-components'
import DayEvent from './DayEvent';

function showEvents(events = []) {
  const dayEvents = [];
  events.map((elem)=>{
    dayEvents.push(
      <DayEvent title={elem.title} bgImage={elem.bgImage} tags={elem.tags} />
    )
  })
  return dayEvents;
}


function EventList(props) {
  return (
    <DayEvents>
      {showEvents(props.events)}
    </DayEvents>
  )
}

const DayEvents = styled.div`
    height: 100%;
    /* display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 20px; */
`;

export default EventList