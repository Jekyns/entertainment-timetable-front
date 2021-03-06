import React, {useState, useEffect, Component} from 'react';
import CreateEvent from './CreateEvent';
import CreateTag from './CreateTag';
import { setDay } from '../../store/daysGrid/actions';
import { connect } from 'react-redux';
import DayPreview from './DayPreview';
// import { ReplayIcon as React.component } from '../../images/icons/replay.svg';
import {ReactComponent as ReplayIcon} from '../../images/icons/replay.svg';


function CreateEventsForm(props) {
  const initTag = { text: '', bgColor: '', color: '' };
  const initEvent = { title: '', bgImage: '', tags: [initTag] };
  const [events, setEvents] = useState([initEvent]);
  const [orientation, setOrientation] = useState('');
  const [previewDay, setPreviewDay] = useState({});
  // const [editableTab, setEditableTab] = React.useState(events[events.length].tags[events[events.length].tags[]]);

  useEffect(() => {
    const {daysGrid, row, column} = props;
    const newPreviewDay =  daysGrid.days.filter((day)=>{
       return ((day.row === row) && (day.column === column));
     })
     setPreviewDay(newPreviewDay[0]);
     setOrientation(props.orientation);
   }, [props.row,props.column, props.orientation])

  useEffect(()=>{
    if(props.events){
      const incammingEvents = props.events;
      const newEvents = incammingEvents.map((event)=>{
        return {
          ...event,
          tags: [...event.tags],
        };
      })
      setEvents(newEvents);
    }
  },[props.events]);


  const showEvents = () => {
    const htmlEvents = [];
    events.map((elem, i) => {
      htmlEvents.push(
      <CreateEvent
        key={`${elem.bgImage}${i}`}
        count={i} 
        onChange={onChange}
        changeTag={changeTag}
        saveTag={saveTag}
        deleteTag={deleteTag}
        changeImageSettings={changeImageSettings}
        {...elem}
      />)
    })
    return htmlEvents;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    const newEvents = [...events];
    newEvents[e.count][name] = value;
    setEvents(newEvents);
  }

  const changeImageSettings = (e) => {
    const { name, value } = e.target;
    const newEvents = [...events];
    newEvents[e.count].imageSettings = {
      ...newEvents[e.count].imageSettings,
      [name]: value,
    };
    setEvents(newEvents);
  }

  const changeTag = (e) => {
    const { name, value } = e.target;
    const newEvents = [...events];
    const arrayofTags = newEvents[e.count].tags;
    arrayofTags[e.editableTab] = { ...arrayofTags[e.editableTab], [name]: value };
    setEvents(newEvents);
  }

  const saveTag = (e) => {
    const newEvents = [...events];
    const arrayofTags = newEvents[e.count].tags;
    arrayofTags.push(initTag);
    setEvents(newEvents);
  }

  const deleteTag = (eventIndex,tabIndex) => {
    const newEvents = [...events];
    const arrayofTags = newEvents[eventIndex].tags;
    arrayofTags.splice(tabIndex, 1);
    setEvents(newEvents);
  }


  const addEvent = (e) => {
    const newEvents = [...events];
    newEvents.push(initEvent);
    setEvents(newEvents);
  }

  const changeOrientation = () => {
    if(orientation === 'vertical'){
      setOrientation('horizontal');
    }
    else{
      setOrientation('vertical');
    }
  }

  // const saveTag = (eventCount) => {
  //   const newEvents = [...events];
  //   const arrayofTags = newEvents[eventCount].tags;
  //   arrayofTags.push(initTag);
  //   setEvents(newEvents);
  // }

  const saveDay = () => {
    props.setDay({
      row:props.row,
      column: props.column,
      orientation: orientation || props.orientation,
      events: events,
    });
  }

  const closeModal = () => {
    setEvents([initEvent]);
    props.closeModal();
  }
  const {row, column} = props;
  return (
    <div className="modal__body">
    <div className="modal__edit">
      <div className="modal__events">
        {showEvents()}
      </div>
      <div className="modal__controls">
        <div className="controls__leftSide">
          <div className="controls__addEvent">
            <button className="controls__addEvent-btn controls__button" onClick={addEvent}>Добавить </button>
          </div>
          <div className="controls__changeOrientation">
            <button className="controls__changeOrientation-btn controls__button" onClick={changeOrientation}>
            <ReplayIcon  className="controls__button-icon"/>
            Поменять ориентацию
            </button>
          </div>
        </div>
        <div className="controls__rightSide">
          <div className="controls__discard">
            <button className="controls__discard-btn controls__button" onClick={closeModal}>Отмена</button>
          </div>
          <div className="controls__save">
            <button className="controls__save-btn controls__button" onClick={saveDay}>Сохранить</button>
          </div>
        </div>
      </div>
      </div>
      <div className="modal__preview">
        <DayPreview day={{row, column,events, orientation: orientation || previewDay && previewDay.orientation}}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    daysGrid: state.daysGrid,
  };
};

const mapDispatchToProps = {
  setDay,
};

const enchancer = connect(
  mapStateToProps,
  mapDispatchToProps,
);


export default enchancer(CreateEventsForm);