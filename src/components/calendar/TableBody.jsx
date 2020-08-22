import React from 'react'
import WeekdayTab from './WeekdayTab'
import { connect } from 'react-redux';

function showTabs(props) {
  const cells = [];
  for (let i = 0; i < 5; i++) {//rows
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

function TableBody(props) {
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

export default enchancer(TableBody);