import React from 'react'
import User from './User'
import CommentList from './CommentList'

function Post(props) {
  return (
    <article className='article'>
      <h2 className='article__title'>{props.post.title}</h2>
      <section className="article__body">{props.post.body}</section><br />
      <User user={props.post.user}/> <br />
      <div>Comments:</div>
      <CommentList comments={props.post.comments}/>

      {/* <div>{props.post.comment[0].name}</div> //работает */}
    </article>
  )
}

export default Post