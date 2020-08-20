import React from 'react'
import ColumnHead from './ColumnHead';

function TableHead(props) {
  return (
    <thead className="calendar__table-thead">
    <tr className="calendar__thead-tr">
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Пн' /></th>
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Вт' /></th>
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Ср' /></th>
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Чт' /></th>
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Пт' /></th>
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Сб' /></th>
        <th className="calendar__thead-tr-th"><ColumnHead weekday='Вс' /></th>
    </tr>
    </thead>
  )
}
export default TableHead;