import React, { useEffect } from 'react';
import './style.css';
import '../../images/bg.jpg';
import Weekday from './Weekday';
import CalendarGrid from './CalendarGrid';
import styled from 'styled-components';
import { connect } from 'react-redux';
import WeekDayTabModal from './WeekDayTabModal';
import { calculateColumns, setGridSettings } from '../../store/daysGrid/actions';
import ImageSettings from './ImageSettings';

function Calendar(props) {
  const [dayForEdit, setDayForEdit] = React.useState({});

  const editDay = (day) => {
    setDayForEdit(day);
  }

  const closeModal = () => {
    props.calculateColumns('columnsTemplate', props.days);
    setDayForEdit({});
  }

  const changeImageSettings = (e) => {
    const { name, value } = e.target;
    props.setGridSettings({ [name]: value });
  }

  React.useEffect(() => {
    props.calculateColumns('columnsTemplate', props.days);
  }, [])
  const { days } = props;
  return (
    <CalendarBody settings={props.settings}>
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
        <ImageSettings
          imageSettings={props.settings || {}}
          changeImageSettings={changeImageSettings}
          withImageInput
        />
      </div>
      <CalendarGrid days={days} editDay={editDay} columnsTemplate={props.columnsTemplate} withDayOfWeek={true} />
      <WeekDayTabModal dayForEdit={dayForEdit} closeModal={closeModal} />
    </CalendarBody>
  )
}

const CalendarBody = styled.div`
    background: linear-gradient(0deg, #23141f, #281323, #22131e, #0000),
    linear-gradient(90deg, #23141f,#23141f, rgb(34 101 163 / 0%)),
     ${props => props.settings && props.settings.imageUrl ? `url(${props.settings.imageUrl})` : 'url(/static/media/bg.29f325ea.jpg);'};
    background-repeat: ${props => props.settings && props.settings.bgRepeat ? props.settings.bgRepeat : 'no-repeat'};
    background-position-x:  ${props => props.settings && props.settings.bgPositionX ?
    `${props.settings.bgPositionX}${props.settings.bgPositionUnit || 'px'}` :
    'right'};
    background-position-y:  ${props => props.settings && props.settings.bgPositionY ?
    `${props.settings.bgPositionY}${props.settings.bgPositionUnit || 'px'}` :
    'top'};
    background-size:  ${props => props.settings && props.settings.bgSize ? props.settings.bgSize : 'auto'};
`;



const mapStateToProps = (state) => {
  return {
    days: state.daysGrid.days,
    columnsTemplate: state.daysGrid.columnsTemplate,
    backgroundSettings: state.daysGrid.backgroundSettings,
    settings: state.daysGrid.settings,
  };
};

const mapDispatchToProps = {
  calculateColumns,
  setGridSettings
};


const enchancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enchancer(Calendar);
