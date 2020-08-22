import React from 'react'
import styled from 'styled-components'

function ColumnHead(props) {
  return (
    <>
    <GridHead className="weekday__name" column={props.column} row={props.row}>
        <span className="weekday__name-span">
          {props.weekday}
        </span>
    </GridHead>
    </>
  )
}


const GridHead = styled.div`
  grid-column: ${props => `${+props.column}/${+props.column+1}`};
  grid-row: ${props => `${+props.row}/${+props.row+1}`};
`;


export default ColumnHead;