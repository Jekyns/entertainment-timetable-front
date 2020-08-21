import React from 'react'
import WeekdayTab from './WeekdayTab'
import { connect } from 'react-redux';

function showTabs(props) {
  console.log(props.daysEvents);
  const columsWithEvent = new Set(props.daysEvents.map((elem) => {
    return elem.column;
  }))
  console.log(columsWithEvent);
  const rows = [];
  for (let i = 0; i < 6; i++) {//rows
    const cells = [];
    for (let j = 0; j < 7; j++) {//row cells(columns)
      const expandedColumn = [...columsWithEvent].every(element => {
        console.log([...columsWithEvent]);
        if (element === j) {
          const dayHaveEvents = props.daysEvents.filter((elem) => {
            if ((i === elem.row) && (j ===elem.column)) {
              cells.push(<WeekdayTab events={elem.events} />);
              return false;
            }
            return true;
          })
          if (dayHaveEvents.length === props.daysEvents.length) {
            cells.push(<WeekdayTab expanded />);
          }
          return false;
        }
        return true
      });
      if(expandedColumn){
          cells.push(<WeekdayTab />);
      }


    }
    rows.push(<tr className="calendar__tbody-tr">{cells}</tr>);
  }
  return rows;
}

function TableBody(props) {
  return (
    <tbody className="calendar__table-tbody">
      {showTabs(props)}
      {/* <tr className="calendar__tbody-tr">
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
      <tr className="calendar__tbody-tr">
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
        <WeekdayTab />
      </tr> */}
    </tbody>
  )
}

const mapStateToProps = (state) => {
  return {
    daysEvents: state.daysEvents,
  };
};

const enchancer = connect(
  mapStateToProps,
  undefined,
);

export default enchancer(TableBody);