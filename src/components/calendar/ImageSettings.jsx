import React, { useState }  from 'react'
import { Select, MenuItem, TextField, Box } from '@material-ui/core';
import styled from 'styled-components';
function ImageSettings({ imageSettings, changeImageSettings,withImageInput}) {
  const [openedSelect, setOpenedSelect] = useState('');

  const openSelect = (selectName) => {
    setOpenedSelect(selectName)
  }

  const closeSelect = () => {
    setOpenedSelect('');
  }

  return (
    <BoxOfSettings className="settings-image">
    {withImageInput ? 
        <TextField
        id="standard-basic"
        label="imageUrl"
        name="imageUrl"
        width='150px'
        value={imageSettings && imageSettings.imageUrl}
        onChange={changeImageSettings}
        // inputProps={{ style: { color: 'white', borderColor:'white'}}}
      />  : ''
  }
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        name="bgRepeat"
        open={openedSelect === 'bgRepeat'}
        onOpen={() => { openSelect('bgRepeat') }}
        onClose={closeSelect}
        value={imageSettings && imageSettings.bgRepeat || 'no-repeat'}
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
        value={imageSettings && imageSettings.bgPositionX}
        onChange={changeImageSettings}
        size="small"
      />
      <TextField
        id="standard-basic"
        label="background position y"
        name="bgPositionY"
        width='50px'
        value={imageSettings && imageSettings.bgPositionY}
        onChange={changeImageSettings}
        size="small"
      />
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        name="bgPositionUnit"
        open={openedSelect === 'bgPositionUnit'}
        onOpen={() => { openSelect('bgPositionUnit') }}
        onClose={closeSelect}
        value={imageSettings && imageSettings.bgPositionUnit || 'px'}
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
        value={imageSettings && imageSettings.bgSize || 'cover'}
        onChange={changeImageSettings}
      >
        <MenuItem value="auto">  <span className="bgsettings__select-item">auto</span></MenuItem>
        <MenuItem value="cover">  <span className="bgsettings__select-item">cover</span></MenuItem>
        <MenuItem value="contain"> <span className="bgsettings__select-item">contain</span></MenuItem>
      </Select>
    </BoxOfSettings>
  )
}

const BoxOfSettings = styled(Box)`

&& > div > div{
  color:#fff;
}
&& > div > label{
  color:#fff;
}

&& > div:before{
  border-color:#fff;
}
&&& > div > div:before, div:hover{
  border-color:#fff;
}
`

export default ImageSettings
