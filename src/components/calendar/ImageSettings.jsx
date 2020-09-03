import React, { useState } from 'react'
import { Select, MenuItem, TextField, Box } from '@material-ui/core';
import styled from 'styled-components';
function ImageSettings({ imageSettings, changeImageSettings, withImageInput, themeColor }) {
  const [openedSelect, setOpenedSelect] = useState('');

  const openSelect = (selectName) => {
    setOpenedSelect(selectName)
  }

  const closeSelect = () => {
    setOpenedSelect('');
  }

  return (
    <BoxOfSettings className="settings-image" themeColor={themeColor}>
      <Select
        labelId="repeat-background"
        id="repeat-background"
        name="bgRepeat"
        open={openedSelect === 'bgRepeat'}
        onOpen={() => { openSelect('bgRepeat') }}
        onClose={closeSelect}
        value={imageSettings && imageSettings.bgRepeat || 'no-repeat'}
        onChange={changeImageSettings}
        className='settings-image-select'
      >
        <MenuItem value="no-repeat"><span className="bgsettings__select-item">no-repeat</span></MenuItem>
        <MenuItem value="repeat"><span className="bgsettings__select-item">repeat</span></MenuItem>
        <MenuItem value="repeat-x"><span className="bgsettings__select-item">repeat-x</span></MenuItem>
        <MenuItem value="repeat-y"><span className="bgsettings__select-item">repeat-y</span></MenuItem>
      </Select>
      {withImageInput ?
        <TextField
          id="image-url"
          label="image-url"
          name="imageUrl"
          value={imageSettings && imageSettings.imageUrl}
          onChange={changeImageSettings}
          className='settings-image-field'
          size="medium"
        /> : ''
      }
      <TextField
        id="background-position-x"
        label="background-position-x"
        name="bgPositionX"
        value={imageSettings && imageSettings.bgPositionX}
        onChange={changeImageSettings}
        size="small"
        className='settings-image-field'
      />
      <TextField
        id="background-position-y"
        label="background-position-y"
        name="bgPositionY"
        value={imageSettings && imageSettings.bgPositionY}
        onChange={changeImageSettings}
        size="small"
        className='settings-image-field'
      />
      <Select
        labelId="unit-for-position"
        id="unit-for-position"
        name="bgPositionUnit"
        open={openedSelect === 'bgPositionUnit'}
        onOpen={() => { openSelect('bgPositionUnit') }}
        onClose={closeSelect}
        value={imageSettings && imageSettings.bgPositionUnit || 'px'}
        onChange={changeImageSettings}
        className='settings-image-select'
      >
        <MenuItem value="px">  <span className="bgsettings__select-item">px</span></MenuItem>
        <MenuItem value="%"><span className="bgsettings__select-item">%</span></MenuItem>
      </Select>
      <Select
        labelId="background-size"
        id="background-size"
        name="bgSize"
        open={openedSelect === 'bgSize'}
        onOpen={() => { openSelect('bgSize') }}
        onClose={closeSelect}
        value={imageSettings && imageSettings.bgSize || 'cover'}
        onChange={changeImageSettings}
        className='settings-image-select'
      >
        <MenuItem value="auto">  <span className="bgsettings__select-item">auto</span></MenuItem>
        <MenuItem value="cover">  <span className="bgsettings__select-item">cover</span></MenuItem>
        <MenuItem value="contain"> <span className="bgsettings__select-item">contain</span></MenuItem>
      </Select>
    </BoxOfSettings>
  )
}

const BoxOfSettings = styled(Box)`
&{
  display: flex;
  align-items: baseline;
}

.settings-image-select, .settings-image-field {
  margin-right: 20px;
}

${props => props.themeColor === 'white' ?
    `&& > div > div{
  color:#fff;
}
&& > div > label{
  color:#fff;
}

&&& > div:before, div:hover{
  border-color:#fff;
}

&&& > div > div:before, div:hover{
  border-color:#fff;
}
`: ''
  }
`

export default ImageSettings
