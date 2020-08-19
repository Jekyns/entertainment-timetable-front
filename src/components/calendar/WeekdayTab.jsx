import React from 'react';
import styled from 'styled-components';
import TagList from './TagList';
import EventList from './EventList';

function WeekdayTab(props) {
  return (
    <div className="weekday__tab">
      <TabHead>
        <DayNumber className="weekday__number-span" active={props.title}>
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
        <EventList title={props.title} bgImage={props.bgImage}/>
        : null
      }
    </div>
  )
}

const TabHead = styled.div`
  /* background: ${props => props.active ? "#000" : "#fff"}; */
  position: absolute;
  left: 20px;
    top: 0;
  padding-top: 20px;
`;

const DayNumber = styled.span`
  background: ${props => props.active ? "#fff" : null};
  color: ${props => props.active ? "#333" : "#808080"};
  padding: ${props => props.active ? "10px 20px" : "0"};
  border-radius: 100%;
  font-size: 21px;
  font-weight: 400;
`;

export default WeekdayTab;