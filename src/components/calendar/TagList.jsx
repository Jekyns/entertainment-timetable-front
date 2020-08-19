import React from 'react';
import styled from 'styled-components';

function TagList(props) {
  return (
    <div className="info__tags">
      <Tag bgColor={props.bgColor} color={props.color}>
        {props.text}
      </Tag>
      <Tag bgColor="#cb0b0e" color="#fff">
        Dead
      </Tag>
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
  margin-right: 10px;
`;

export default TagList;