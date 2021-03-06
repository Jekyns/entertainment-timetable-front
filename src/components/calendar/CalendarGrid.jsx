import React from 'react'
import WeekdayTab from './WeekdayTab'
import { connect } from 'react-redux';
import ColumnHead from './ColumnHead';
import styled from 'styled-components';

function showTabs({ days, editDay, withDayOfWeek }) {
  const cells = [];
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  for (let i = 0; i < 5; i++) {//rows
    if (withDayOfWeek) {
      if (i === 0) {
        weekDays.map((weekDay) => {
          cells.push(<ColumnHead weekday={weekDay} />);
        })
      }
    }
    for (let j = 0; j < 7; j++) {//row cells(columns)
      const eventWeekadayTab = days.filter((elem) => {
        if ((i === elem.row) && (j === elem.column)) {
          cells.push(<WeekdayTab key={`${elem.title}${i}${j}`} orientation={elem.orientation} events={elem.events} row={i} column={j} editDay={editDay} />);
          return false
        }
        return true
      })
      if (eventWeekadayTab.length === days.length) {
        cells.push(<WeekdayTab key={`${i}${j}`} row={i} column={j} editDay={editDay} />);
      }
    }
  }
  return cells;
}

function CalendarGrid(props) {
  const { columnsTemplate, padding } = props;
  return (
    <CalendarBody columnsTemplate={columnsTemplate} padding={padding}>
      {showTabs(props)}
    </CalendarBody>
  )
}


export default CalendarGrid;


const CalendarBody = styled.div`
  display: grid;
  padding: ${props => props.padding && props.padding === 'false' ? '' : '100px 40px'};
  grid-template-columns: ${props => props.columnsTemplate};
  grid-gap: 20px 10px;
`;