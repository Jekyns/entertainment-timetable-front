import React from 'react';
import CreateEvent from './CreateEvent';

function CreateEventsForm() {
  const initTag = { text: '', bgColor: '', color: '' };
  const initEvent = { title: '', imageUrl: '', tags: [initTag] };
  const [events, setEvents] = React.useState([initEvent])

  const showEvents = () => {
    const htmlEvents = [];
    events.map((elem, i) => {
      htmlEvents.push(<CreateEvent count={i} {...elem} onChange={onChange} changeTag={changeTag} onBlurTag={onBlurTag}/>)
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
    arrayofTags[e.changedTag] = { ...arrayofTags[e.changedTag], [name]: value }
    setEvents(newEvents)
  }

  const addEvent = (e) => {
    const newEvents = [...events];
    newEvents.push(initEvent);
    setEvents(newEvents);
  }

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