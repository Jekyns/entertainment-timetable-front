import React from 'react'
import WeekdayTab from './WeekdayTab'
import { connect } from 'react-redux';
import ColumnHead from './ColumnHead';

function showTabs(props) {
  const cells = [];
  const weekDays = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  for (let i = 0; i < 5; i++) {//rows
    if(i === 0 ) {
      weekDays.map((weekDay)=>{
        cells.push(<ColumnHead weekday={weekDay} />);
      })
    }
    for (let j = 0; j < 7; j++) {//row cells(columns)
      const eventWeekadayTab = props.daysEvents.filter((elem) => {
        if ((i === elem.row) && (j === elem.column)) {
          cells.push(<WeekdayTab events={elem.events} />);
          return false
        }
        return true
      })
      if(eventWeekadayTab.length === props.daysEvents.length){
        cells.push(<WeekdayTab />);
      }
    }
  }
  return cells;
}

function CalendarGrid(props) {
  return (
    <>
      {showTabs(props)}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    daysEvents: state.daysEvents,
  };
};

const enchancer = connect(
  mapStateToProps,
  undefined,
);

export default enchancer(CalendarGrid);