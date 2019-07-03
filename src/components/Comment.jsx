import React from "react"

function Comment(props) {
  return (
    <div>
      <div className='comment__author'>{props.comment.email} wrote: </div>
      <div className='comment__body'>{props.comment.body}</div>
    </div>
  )
}

export default Comment