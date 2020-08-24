import React from 'react';
import CreateEventsForm from './CreateEventsForm';



function WeekDayTabModal() {
  return (
    <div className="calendar__wrapper">
      <div className="calendar__modal">
        <div className="modal__head">
          <p className="modal__head-p">Add Events</p>
        </div>
        <CreateEventsForm/>
      </div>
    </div>
  )
}
export default WeekDayTabModal;