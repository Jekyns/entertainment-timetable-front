import React,{useState} from 'react'
import WeekdayTab from './WeekdayTab';
import CalendarGrid from './CalendarGrid';
import {connect} from 'react-redux';

function DayPreview(props) {
  const {events} = props;
  const [viewDay, setView] = useState(true);
  const [columnsTemplate, setColumnsTemplate] = React.useState('');

  const setDayView = () => {
    setView(true);
  }

  const setGlobalView = () => {
    setView(false);
    calculateColumns();
  }

  function setColumnWidth(columnEvents) {
    if (columnEvents) {
      return `${columnEvents.length > 1 ? 2 : 1}fr `;
    }
    return '70px ';
  }

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
  return (
    <div className="modal__preview">
      <div className="preview__tabs">
        <div className="preview__tabs-fullscreen">
          <span className="preview__tabs-fullscreen-span" onClick={setGlobalView}>Fullscreen</span>
        </div>
        <div className="preview__tabs-day">
          <span className="preview__tabs-day-span" onClick={setDayView}>Day</span>
        </div>
      </div>
      {viewDay ? 
      <WeekdayTab events={events}/>:
      <CalendarGrid columnsTemplate={columnsTemplate}/>
      
    }
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

export default enchancer(DayPreview)

