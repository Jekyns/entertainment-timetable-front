import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import CreateEventsForm from './CreateEventsForm';



function WeekDayTabModal({ dayForEdit, closeModal }) {
  return (
    <div className={`calendar__wrapper ${dayForEdit.row >= 0 ? 'modal-open' : 'modal-close'}`}>
      <div className="calendar__modal">
        <div className="modal__head">
          <p className="modal__head-p">Add Events</p>
        </div>
        <CreateEventsForm {...dayForEdit} closeModal={closeModal} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    daysGrid: state.daysGrid,
  };
};

const enchancer = connect(
  mapStateToProps,
  undefined,
);

export default enchancer(WeekDayTabModal);