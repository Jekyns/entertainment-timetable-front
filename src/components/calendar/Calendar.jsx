import React, { useEffect } from 'react';
import './style.css';
import '../../images/bg.jpg';
import Weekday from './Weekday';
import CalendarGrid from './CalendarGrid';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WeekDayTabModal from './WeekDayTabModal';


function setColumnWidth(columnEvents) {
  if (columnEvents) {
    return `${columnEvents.length > 1 ? 2 : 1}fr `;
  }
  return '70px ';
}



function Calendar(props) {
  const [columnsTemplate, setColumnsTemplate] = React.useState('');
  const [dayForEdit, setDayForEdit] = React.useState({});

  function calculateColumns() {
    const maxEventsInColumn = {};
    props.daysEvents.map((elem) => {
      if (maxEventsInColumn[elem.column]) {
        if (elem.events.length > maxEventsInColumn[elem.column].length)
          maxEventsInColumn[elem.column] = elem.events;
      }
      else {
        maxEventsInColumn[elem.column] = elem.events;
      }
    })
    let columnsTemplateCss = '';
    for (let i = 0; i < 7; i++) {//i - count colums
      columnsTemplateCss += setColumnWidth(maxEventsInColumn[i]);
    }
    setColumnsTemplate(columnsTemplateCss);
  }

  const editDay = (day) => {
    setDayForEdit(day);
  }

  const closeModal = () => {
    calculateColumns();
    setDayForEdit({});
  }

  React.useEffect(()=>{
    calculateColumns();
  },[])

  return (
    <div className="calendar">
      <div className="calendar__head">
        <div className="head__date">
          <div className="date__month">
            <h1 className="date__month-h1">Август</h1>
          </div>
          <div className="date__year">
            <h1 className="date__year-h1">2020</h1>
          </div>
        </div>
        <div className="head__description">
          <h2 className="head__description-h2">Новые фильмы в кино</h2>
        </div>
      </div>
      <CalendarGrid editDay={editDay} columnsTemplate={columnsTemplate}/>
      <WeekDayTabModal dayForEdit={dayForEdit} closeModal={closeModal} />
    </div>
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

export default enchancer(Calendar);
