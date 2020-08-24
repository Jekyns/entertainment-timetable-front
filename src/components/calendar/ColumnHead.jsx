import React from 'react'
import styled from 'styled-components'

function ColumnHead(props) {
  return (
    <>
    <GridHead className="weekday__name">
        <span className="weekday__name-span">
          {props.weekday}
        </span>
    </GridHead>
    </>
  )
}


const GridHead = styled.div`

`;


export default ColumnHead;