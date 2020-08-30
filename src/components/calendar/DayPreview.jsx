import React,{useState, useEffect, Component} from 'react'
import WeekdayTab from './WeekdayTab';
import CalendarGrid from './CalendarGrid';
import {connect} from 'react-redux';
import { calculateColumns } from '../../store/daysGrid/actions';
import {ReactComponent as GridIcon} from '../../images/icons/grid.svg';
import {ReactComponent as ElementIcon} from '../../images/icons/elem.svg';

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
  }, [props.day.events,props.day.orientation])

  const setDayView = () => {
    setView(true);
  }

  const setGlobalView = () => {
    setView(false);
  }
  return (
    <div className="modal__preview">
      <div className="preview__tabs">
        <div className="preview__tabs-fullscreen preview-tab" onClick={setGlobalView}>
          <GridIcon className="preview__tabs-icon" />
        </div>
        <div className="preview__tabs-day preview-tab" onClick={setDayView}>
          <ElementIcon className="preview__tabs-icon"/>
        </div>
      </div>
      {viewDay ? 
      <WeekdayTab orientation={day.orientation} events={day.events}/>:
      <div className="grid-wrapper">
        <CalendarGrid days={newDays} columnsTemplate={props.columnsTemplate} padding={'false'}/>
      </div>
      
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

