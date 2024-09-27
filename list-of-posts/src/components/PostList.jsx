import React, { Component } from 'react'
import Post from './Post';

export default function PostList(props) {
  return (
    <div>
      {props.posts.map(post =>
        <Post
          key={post.id}
          title={post.title} 
          body={post.body} 
          users={props.users}
          posts={post}
          comments={props.comments}
          />)}
    </div>
  )
}
