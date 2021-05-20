import React from 'react';
import Post from "../Post/Post";

function PostList({posts}) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post}/>
        </li>
      ))}
    </ul>
  )
}

export default PostList;
