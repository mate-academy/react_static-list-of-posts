import React from 'react'
import Post from './Post'


function PostList({currentPosts}) {
  return (
    <>
      {currentPosts.map(post => (
        <Post currentPost={post}/>
      ))}
    </>
  )
}

export default PostList