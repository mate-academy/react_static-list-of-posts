import React from 'react'
import { posts } from '../resources/posts';
import User from './User'
import Comment from './Comment'

function Post() {
  const list =[]
  posts.forEach(post => {
    list.push(
    <section key={post.id}>
      <h2 className='title' >{post.title}</h2>
      <p className='Body'>{post.body}</p>
      <User id={post.userId}/>
      <Comment id={post.id}/>
    </section>
    )
  })

  return <>{list}</>
}

export default Post
