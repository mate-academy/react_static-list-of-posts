import React from 'react'
import User from './User'
import CommentList from './CommentList'

function Post({currentPost}) {
  return (
    <article className='article'>
      <h2 className='article__title'>{currentPost.title}</h2>
      <section className="article__body">{currentPost.body}</section><br />
      <User user={currentPost.user}/> <br />
      <div>Comments:</div>
      <CommentList currentComments={currentPost.comments}/>
    </article>
  )
}

export default Post