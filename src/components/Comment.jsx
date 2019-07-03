import React from "react"

function Comment({currentComment}) {
  return (
    <div>
      <div className='comment__author'>{currentComment.email} wrote: </div>
      <div className='comment__body'>{currentComment.body}</div>
    </div>
  )
}

export default Comment