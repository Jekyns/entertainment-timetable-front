import React from 'react';

function CreateTag(props) {
  const onChange = (e) => {
    e.changedTag = props.count;
    props.changeTag(e);
  }

  return (
    <div className="modal__tags">
      <span className="modal__tags-titile"> Tags: </span>
      <div className="tags__tag">
        <label className="calendar__modal-label">
          <span className="calendar__modal-label-span">Text: </span>
          <input className="calendar__modal-input" name="text" onChange={onChange} value={props.text} />
        </label>
        <label className="calendar__modal-label">
          <span className="calendar__modal-label-span">Background color: </span>
          <input className="calendar__modal-input" name="bgColor" onChange={onChange} value={props.bgColor} />
        </label>
        <label className="calendar__modal-label">
          <span className="calendar__modal-label-span">Font color: </span>
          <input className="calendar__modal-input" name="color" onChange={onChange} value={props.color} />
        </label>
      </div>
    </div>
  )
}

export default CreateTag;