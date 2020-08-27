import React from 'react';
import CreateEventsForm from './CreateEventsForm';



function WeekDayTabModal({ dayForEdit,closeModal }) {
  return (
    <div className={`calendar__wrapper ${dayForEdit.row ? 'modal-open' : 'modal-close'}`}>
      <div className="calendar__modal">
        <div className="modal__head">
          <p className="modal__head-p">Add Events</p>
        </div>
        <CreateEventsForm {...dayForEdit} closeModal={closeModal}/>
      </div>
    </div>
  )
}
export default WeekDayTabModal;