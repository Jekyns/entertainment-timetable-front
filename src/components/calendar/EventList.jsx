import React from 'react'
import styled from 'styled-components'
import DayEvent from './DayEvent';

function showEvents(events = []) {
  const dayEvents = [];
  events.map((elem) => {
    dayEvents.push(
      <DayEvent
        {...elem}
        title={elem.title}
        bgImage={elem.bgImage}
        tags={elem.tags}
        lastChild={events.length % 2 === 0 ? 'unset' : 'c'}
      />
    )
  })
  return dayEvents;
}


function EventList(props) {
  return (
    <DayEvents orientation={props.orientation} elemCount={props.events ? props.events.length : 0}>
      {showEvents(props.events)}
    </DayEvents>
  )
}

const createElementsGrid = (orientation, elemCount) => {
  
  if(orientation && orientation==='vertical'){
    if((elemCount>1) && (elemCount % 2 !== 0)) {
      return `
      "a b"
      "c c"
      `
    }
    if(elemCount>0) {
      return `
      "a"
      "b"
      `
    }
  }
  else{
    if(elemCount>1){
      if(elemCount % 2 === 0){
        return `"a b"`
      }
      else{
        return `"a c"
        "b c"`
      }
    }
  }
  return  "initial"
}

const DayEvents = styled.div`
    height: 100%;
    display: grid;
    grid-gap: 15px;
    border-radius: 25px;
    overflow: hidden;
    grid-template-areas: ${props =>
    createElementsGrid(props.orientation,props.elemCount)
  };
`;

export default EventList