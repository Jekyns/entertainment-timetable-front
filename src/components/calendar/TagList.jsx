import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../images/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../images/icons/pencil.svg';




function TagList(props) {

  const showTags = (tags = []) => {
    const eventTags = [];
    tags.map((elem, i) => {
      eventTags.push(
        <Tag bgColor={elem.bgColor} color={elem.color}>
          <span className="tag-span">{elem.text}</span>
          {props.editTab ?
            <>
              <EditIcon className="tag-icon" fill={elem.color ? elem.color : "#333"} onClick={()=>{props.editTab(i)}} />
              <DeleteIcon className="tag-icon" fill={elem.color ? elem.color : "#333"}  onClick={()=>{props.deleteTag(i)}}/>
            </>
            : null}
        </Tag>
      )
    })
    return eventTags;
  }

  return (
    <div className="info__tags">
      {showTags(props.tags)}
    </div>
  )
}

const Tag = styled.div`
  background: ${props => props.bgColor ? props.bgColor : "#fff"};
  color: ${props => props.color ? props.color : "#333"};
  padding: 5px 20px;
  display: inline-block;
  border-radius: 25px;
  text-transform: uppercase;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default TagList;