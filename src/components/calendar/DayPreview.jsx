import React,{useState, useEffect} from 'react'
import WeekdayTab from './WeekdayTab';
import CalendarGrid from './CalendarGrid';
import {connect} from 'react-redux';
import { calculateColumns } from '../../store/daysGrid/actions';

function DayPreview(props) {


  const {day, days} = props;
  const [newDays, setNewDays] = useState(days);
  const [viewDay, setView] = useState(true);



  useEffect(() => {
    const {row,column} = props.day;
    const newDays = props.days.filter((day)=>{
      if(day.row===row && day.column===column){
        return false
      }
      return true;
    })
    newDays.push(props.day);
    setNewDays(newDays);
    props.calculateColumns('previewColumnsTemplate', newDays);
  }, [props.day.events])

  const setDayView = () => {
    setView(true);
  }

  const setGlobalView = () => {
    setView(false);
  }
  return (
    <div className="modal__preview">
      <div className="preview__tabs">
        <div className="preview__tabs-fullscreen">
          <span className="preview__tabs-fullscreen-span" onClick={setGlobalView}>Fullscreen</span>
        </div>
        <div className="preview__tabs-day">
          <span className="preview__tabs-day-span" onClick={setDayView}>Day</span>
        </div>
      </div>
      {viewDay ? 
      <WeekdayTab events={day.events}/>:
      <CalendarGrid days={newDays} columnsTemplate={props.columnsTemplate}/>
      
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    days: state.daysGrid.days,
    columnsTemplate: state.daysGrid.previewColumnsTemplate,
  };
};

const mapDispatchToProps = {
  calculateColumns,
};


const enchancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enchancer(DayPreview)

