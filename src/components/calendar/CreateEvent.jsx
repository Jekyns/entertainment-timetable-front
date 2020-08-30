import React from 'react'
import CreateTags from './CreateTag';
import CreateTagList from './CreateTagList';
import TagList from './TagList';
import CreateTag from './CreateTag';

function CreateEvent(props) {
  const [editableTab, setEditableTab] = React.useState(props.tags.length-1);
  const editTab = (tabIndex) => {
    setEditableTab(tabIndex);
  }

  const onChange = (e) => {
    e.count = props.count;
    props.onChange(e);
  }

  const changeTag = (e) => {
    e.count = props.count;
    e.editableTab = editableTab;
    props.changeTag(e);
  }

  const saveTag = (e) => {
    e.count = props.count;
    setEditableTab(props.tags.length);
    props.saveTag(e);
  }

  const deleteTag = (tabIndex) => {
    if (tabIndex <= editableTab) {
      setEditableTab(editableTab - 1);
    }
    const elementIndex = props.count;
    props.deleteTag(elementIndex, tabIndex);
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
          <input className="calendar__modal-input" value={props.bgImage} onChange={onChange} name="bgImage" />
        </label>
      </div>
      <div className="modal__tags">
        <div className="tags__preview">
          <span className="modal__tags-titile"> Tags: </span>
          <TagList tags={props.tags} editTab={editTab} deleteTag={deleteTag} />
        </div>
      </div>
      <div className="calendar__modal-controls">
        <CreateTag
          changeTag={changeTag}
          color={props.tags[editableTab] && props.tags[editableTab].color}
          bgColor={props.tags[editableTab] && props.tags[editableTab].bgColor}
          text={ props.tags[editableTab] && props.tags[editableTab].text}
        />
        <div className="controls__addTag">
          <button className="controls__button controls__addTag-btn" onClick={saveTag}>Add new tag</button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;