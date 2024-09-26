import React from 'react';
import Post from './Post';
import {posts} from '../posts';

function PostList() {
  const postList = [];
  posts.forEach(post => {
    postList.push(
      <Post postItem={post} key={post.title}/>
    )
  })
  return (
    <div>
      {postList};
    </div>
  )
}

export default PostList