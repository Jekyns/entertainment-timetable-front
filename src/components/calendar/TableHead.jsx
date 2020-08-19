import React from 'react'
import ColumnHead from './ColumnHead';

function TableHead(props) {
  return (
    <>
        <ColumnHead weekday='Пн' />
        <ColumnHead weekday='Вт' />
        <ColumnHead weekday='Ср' />
        <ColumnHead weekday='Чт' />
        <ColumnHead weekday='Пт' />
        <ColumnHead weekday='Сб' />
        <ColumnHead weekday='Вс' />
    </>
  )
}
export default TableHead;