import React from 'react';
import styled from 'styled-components';
import TagList from './TagList';
import EventList from './EventList';

function WeekdayTab(props) {
  return (
    <TableData className="calendar__tbody-tr-td" haveEvent={props.title}>
      <div className="weekday__tab">
        <TabHead>
          <DayNumber className="weekday__number-span" haveEvent={props.title}>
            1
      </DayNumber>
        </TabHead>
        {/* {props.title ?
        <div className="tab__info" >
          <div className="info__title">
            <span className="info__title-span">{props.title}</span>
          </div>
          <TagList text="You" bgColor="#fff" color="#333" />
        </div> : null} */}
        {props.title ?
          <EventList title={props.title} bgImage={props.bgImage} />
          : null
        }
      </div>
    </TableData>
  )
}

const TableData = styled.td`
  width:${props=>props.haveEvent ? "auto" : "20px"};
`;

const TabHead = styled.div`
  /* background: ${props => props.haveEvent ? "#000" : "#fff"}; */
  position: absolute;
  left: 20px;
    top: 0;
  padding-top: 20px;
`;

const DayNumber = styled.span`
  background: ${props => props.haveEvent ? "#fff" : null};
  color: ${props => props.haveEvent ? "#333" : "#808080"};
  padding: ${props => props.haveEvent ? "10px 20px" : "0"};
  border-radius: 100%;
  font-size: 21px;
  font-weight: 400;
`;

export default WeekdayTab;