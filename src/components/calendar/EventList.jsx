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
    <DayEvents elemCount={props.events ? props.events.length : 0}>
      {showEvents(props.events)}
    </DayEvents>
  )
}

const DayEvents = styled.div`
    height: 100%;
    display: grid;
    grid-gap: 15px;
    grid-template-areas: ${props => 
      props.elemCount > 1 ? 
        props.elemCount % 2 === 0 ?
        `"a b"
        "d c"`
        :`"a c"
          "b c"` 
      : `initial`
    };
`;

export default EventList