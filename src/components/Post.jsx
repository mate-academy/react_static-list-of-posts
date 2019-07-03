import React from 'react'
import User from './User'

function Post(props) {
  return (
    <article>
      <h1>{props.post.title}</h1>
      <section>{props.post.body}</section><br />
      <User user={props.post.user}/>
    </article>
  )
}

export default Post