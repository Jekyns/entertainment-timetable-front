import React from 'react'
import WeekdayTab from './WeekdayTab'

function Weekday(props) {
  return (
    <div className="weekday__column">
      <div className="weekday__name">
        <span className="weekday__name-span">
          {props.weekday}
        </span>
      </div>
      <div className="weekday__tabs">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
      </div>
    </div>
  )
}

export default Weekday