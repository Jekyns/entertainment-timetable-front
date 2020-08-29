import React, { useEffect } from 'react';
import './style.css';
import '../../images/bg.jpg';
import Weekday from './Weekday';
import CalendarGrid from './CalendarGrid';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WeekDayTabModal from './WeekDayTabModal';
import { calculateColumns } from '../../store/daysGrid/actions';

function Calendar(props) {
  const [dayForEdit, setDayForEdit] = React.useState({});

  const editDay = (day) => {
    setDayForEdit(day);
  }

  const closeModal = () => {
    props.calculateColumns('columnsTemplate', props.days);
    setDayForEdit({});
  }

  React.useEffect(() => {
    props.calculateColumns('columnsTemplate', props.days);
  }, [])
  const { days } = props;
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
      <CalendarGrid days={days} editDay={editDay} columnsTemplate={props.columnsTemplate} />
      <WeekDayTabModal dayForEdit={dayForEdit} closeModal={closeModal} />
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    days: state.daysGrid.days,
    columnsTemplate: state.daysGrid.columnsTemplate,
  };
};

const mapDispatchToProps = {
  calculateColumns,
};


const enchancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enchancer(Calendar);
