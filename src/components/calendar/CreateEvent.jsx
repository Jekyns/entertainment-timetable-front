import React from 'react'
import CreateTags from './CreateTag';
import CreateTagList from './CreateTagList';

function CreateEvent(props) {
  const onChange = (e) => {
    e.count = props.count;
    props.onChange(e);
  }
  const changeTag = (e) => {
    e.count = props.count;
    props.changeTag(e);
  }
  return (
    <div className="modal__event">
      <div className="event__number">
        <span className="event__number-span">{props.count + 1}. </span>
      </div>
      <div className="modal__inputs">
        <label className="calendar__modal-label">
          <span className="calendar__modal-label-span">Title: </span>
          <input className="calendar__modal-input" value={props.title} onChange={onChange} name="title" />
        </label>
        <label className="calendar__modal-label">
          <span className="calendar__modal-label-span">Image (url): </span>
          <input className="calendar__modal-input" value={props.imageUrl} onChange={onChange} name="imageUrl" />
        </label>
      </div>
      <CreateTagList changeTag={changeTag} tags={props.tags} />
      <div className="calendar__modal-controls">
        <div className="controls__delete">
          <button className="controls__delete-btn controls__button">Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;