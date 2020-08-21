import React from 'react';
import styled from 'styled-components';

function showTags(tags = []) {
  const eventTags = [];
  tags.map((elem) => {
    eventTags.push(
      <Tag bgColor={elem.bgColor} color={elem.color}>
        {elem.text}
      </Tag>
    )
  })
  return eventTags;
}


function TagList(props) {
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