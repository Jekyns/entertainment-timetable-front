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
`;

export default EventList