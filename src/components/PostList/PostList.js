import React from 'react';
import Post from '../Post/Post';
import './PostList.css';


function PostList ({ fullPosts }) {
  return (
    fullPosts.map(post => (
      <Post post={post} key={post.id} />
    ))
  );
}


export default PostList;

