import React from 'react'
import styled from 'styled-components'
import DayEvent from './DayEvent';

function EventList(props) {
  return (
    <DayEvents>
      <DayEvent title={props.title} bgImage={props.bgImage}/>
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