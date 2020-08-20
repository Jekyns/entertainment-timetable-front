import React from 'react'
import WeekdayTab from './WeekdayTab'

function TableBody(props) {
  return (
    <tbody className="calendar__table-tbody">
      <tr className="calendar__tbody-tr">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab bgImage="https://gamemag.ru/images/cache/News/News112659/7898e18229-2_1390x600.jpg" title="HotLine Miami 2: Wrong Number" />
        <WeekdayTab />
        <WeekdayTab />
      </tr>
      <tr className="calendar__tbody-tr">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab/>
        <WeekdayTab />
        <WeekdayTab/>
      </tr>
      <tr className="calendar__tbody-tr">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
      </tr>
      <tr className="calendar__tbody-tr">
      <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
      </tr>
      <tr className="calendar__tbody-tr">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
      </tr>
      <tr className="calendar__tbody-tr">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
      </tr>
    </tbody>
  )
}
export default TableBody;