import React from 'react';
import CreateEvent from './CreateEvent';
import CreateTag from './CreateTag';

function CreateEventsForm() {
  const initTag = { text: '', bgColor: '', color: '' };
  const initEvent = { title: '', imageUrl: '', tags: [initTag] };
  const [events, setEvents] = React.useState([initEvent])
  // const [editableTab, setEditableTab] = React.useState(events[events.length].tags[events[events.length].tags[]]);

  const showEvents = () => {
    const htmlEvents = [];
    events.map((elem, i) => {
      htmlEvents.push(<CreateEvent count={i} {...elem} onChange={onChange} changeTag={changeTag} saveTag={saveTag} deleteTag={deleteTag} />)
    })
    return htmlEvents;
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    const newEvents = [...events];
    newEvents[e.count][name] = value;
    setEvents(newEvents)
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

  // const saveTag = (eventCount) => {
  //   const newEvents = [...events];
  //   const arrayofTags = newEvents[eventCount].tags;
  //   arrayofTags.push(initTag);
  //   setEvents(newEvents);
  // }

  return (
    <>
      <div className="modal__events">
        {showEvents()}
      </div>
      <div className="modal__controls">
        <div className="controls__leftSide">
          <div className="controls__addEvent">
            <button className="controls__addEvent-btn controls__button" onClick={addEvent}>Добавить </button>
          </div>
        </div>
        <div className="controls__rightSide">
          <div className="controls__discard">
            <button className="controls__discard-btn controls__button">Отмена</button>
          </div>
          <div className="controls__save">
            <button className="controls__save-btn controls__button">Сохранить</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEventsForm;