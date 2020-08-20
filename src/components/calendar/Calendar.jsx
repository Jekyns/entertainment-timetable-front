import React from 'react';
import './style.css';
import '../../images/bg.jpg';
import Weekday from './Weekday';
import TableHead from './TableHead';
import TableBody from './TableBody';

function Calendar(props) {
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
      <div className="calendar__body">
      <table class="calendar__body-table">
        <TableHead/>
        <TableBody/>
      </table>
      </div>
    </div>
  )
}
export default Calendar