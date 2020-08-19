import React from 'react'

function ColumnHead(props) {
  return (
    <>
      <div className="weekday__name">
        <span className="weekday__name-span">
          {props.weekday}
        </span>
      </div>
    </>
  )
}
export default ColumnHead;