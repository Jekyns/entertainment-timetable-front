import React from 'react'
import ColumnHead from './ColumnHead';

function TableHead(props) {
  return (
    <>
      <ColumnHead row="1" column="1" weekday='Пн' />
      <ColumnHead row="1" column="2" weekday='Вт' />
      <ColumnHead row="1" column="3" weekday='Ср' />
      <ColumnHead row="1" column="4" weekday='Чт' />
      <ColumnHead row="1" column="5" weekday='Пт' />
      <ColumnHead row="1" column="6" weekday='Сб' />
      <ColumnHead row="1" column="7" weekday='Вс' />
    </>
  )
}
export default TableHead;