import React, { useState } from 'react'
import CreateTags from './CreateTag';
import CreateTagList from './CreateTagList';
import TagList from './TagList';
import CreateTag from './CreateTag';
import { Select, MenuItem, TextField } from '@material-ui/core';

function CreateEvent(props) {
  const [editableTab, setEditableTab] = React.useState(props.tags.length - 1);
  const [openedSelect, setOpenedSelect] = useState('');
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

  const changeImageSettings = (e) => {
    e.count = props.count;
    props.changeImageSettings(e)
  }

  const openSelect = (selectName) => {
    setOpenedSelect(selectName)
  }

  const closeSelect = () => {
    setOpenedSelect('');
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
      {props.bgImage ?
        <div className="modal__bgsettings">
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            name="bgRepeat"
            open={openedSelect === 'bgRepeat'}
            onOpen={() => { openSelect('bgRepeat') }}
            onClose={closeSelect}
            value={props.imageSettings && props.imageSettings.bgRepeat || 'no-repeat'}
            onChange={changeImageSettings}
          >
            <MenuItem value="no-repeat"><span className="bgsettings__select-item">no-repeat</span></MenuItem>
            <MenuItem value="repeat"><span className="bgsettings__select-item">repeat</span></MenuItem>
            <MenuItem value="repeat-x"><span className="bgsettings__select-item">repeat-x</span></MenuItem>
            <MenuItem value="repeat-y"><span className="bgsettings__select-item">repeat-y</span></MenuItem>
          </Select>
          <TextField
            id="standard-basic"
            label="background position x"
            name="bgPositionX"
            width='50px'
            value={props.imageSettings && props.imageSettings.bgPositionX}
            onChange={changeImageSettings}
          />
          <TextField
            id="standard-basic"
            label="background position y"
            name="bgPositionY"
            width='50px'
            value={props.imageSettings && props.imageSettings.bgPositionY}
            onChange={changeImageSettings}
          />
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            name="bgPositionUnit"
            open={openedSelect === 'bgPositionUnit'}
            onOpen={() => { openSelect('bgPositionUnit') }}
            onClose={closeSelect}
            value={props.imageSettings && props.imageSettings.bgPositionUnit || 'px'}
            onChange={changeImageSettings}
          >
            <MenuItem value="px">  <span className="bgsettings__select-item">px</span></MenuItem>
            <MenuItem value="%"><span className="bgsettings__select-item">%</span></MenuItem>
          </Select>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            name="bgSize"
            open={openedSelect === 'bgSize'}
            onOpen={() => { openSelect('bgSize') }}
            onClose={closeSelect}
            value={props.imageSettings && props.imageSettings.bgSize || 'cover'}
            onChange={changeImageSettings}
          >
            <MenuItem value="auto">  <span className="bgsettings__select-item">auto</span></MenuItem>
            <MenuItem value="cover">  <span className="bgsettings__select-item">cover</span></MenuItem>
            <MenuItem value="contain"> <span className="bgsettings__select-item">contain</span></MenuItem>
          </Select>
        </div>
        : ''}
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
          text={props.tags[editableTab] && props.tags[editableTab].text}
        />
        <div className="controls__addTag">
          <button className="controls__button controls__addTag-btn" onClick={saveTag}>Add new tag</button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;