import React from 'react'
import Post from './Post'


function PostList(props) {
  return (
    <>
      {props.posts.map(post => (
        <Post post={post}/>
      ))}
    </>
  )
}

export default PostList