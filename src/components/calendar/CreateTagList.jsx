import React from 'react'
import CreateTag from './CreateTag';

function CreateTagList(props) {

  const showTags = () => {
    const tags = [];
    props.tags.map((tag,i) => {
      tags.push(<CreateTag count = {i} {...tag} changeTag={props.changeTag}/>)
    })
    return tags;
  }
  return (
    <>
      {showTags()}
    </>
  )
}

export default CreateTagList;