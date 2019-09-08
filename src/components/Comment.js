import React from 'react'

function Comments({comment}) {
  // console.log(comment)
  return (
    <div>
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <hr style={{width: '30%'}} />
    </div>
  )
}

export default Comments
